// Noon SA UX audit — stealth headful retry
const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const LOG_PATH = path.join(ROOT, 'capture-log.json');
let log = [];
try { log = JSON.parse(fs.readFileSync(LOG_PATH, 'utf8')); } catch {}

const MOBILE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

const nowIso = () => new Date().toISOString();

function placeholderHtml(stepName, platform) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;height:100%;font-family:'Segoe UI',Arial,sans-serif;background:#F5F5F5;color:#111}
  .bar{height:56px;background:#FEEE00;display:flex;align-items:center;padding:0 24px;font-weight:700}
  .wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100% - 56px);text-align:center;padding:40px}
  h1{font-size:20px;margin:0 0 16px}
  p{font-size:14px;color:#666;margin:4px 0}
  .tag{margin-top:40px;background:#111;color:#FEEE00;padding:6px 14px;border-radius:6px;font-size:11px;letter-spacing:2px}
  </style></head><body><div class="bar">noon</div><div class="wrap"><h1>${stepName} — ${platform.toUpperCase()}</h1>
  <p>Screenshot could not be captured.</p><p>Noon's bot protection was triggered.</p>
  <p>Manual review required for this step.</p><div class="tag">FALLBACK PLACEHOLDER</div></div></body></html>`;
}

async function isBlocked(page) {
  try {
    const html = (await page.content()).toLowerCase();
    if (html.length < 400) return true;
    if (html.includes('captcha') || html.includes('px-captcha') ||
        html.includes('access denied') || html.includes('just a moment')) return true;
    const txt = (await page.evaluate(() => document.body ? document.body.innerText : '')).trim();
    if (txt.length < 100) return true;
  } catch { return true; }
  return false;
}

async function humanize(page) {
  try {
    await page.mouse.move(200 + Math.random()*400, 200 + Math.random()*300, { steps: 10 });
    await page.waitForTimeout(600 + Math.random()*800);
    await page.evaluate(() => window.scrollBy(0, 100 + Math.random()*400));
    await page.waitForTimeout(500 + Math.random()*500);
  } catch {}
}

async function captureStep(page, placeholderPage, platform, viewport, slug, stepName, url, extra) {
  console.log(`[${platform}] ${slug}`);
  const outPath = path.join(ROOT, 'screenshots', platform, `${slug}.png`);
  let status = 'fallback', reason = '';

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      if (url) await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(2000 + attempt*1500);
      await humanize(page);
      try { await page.waitForLoadState('networkidle', { timeout: 10000 }); } catch {}
      if (extra) { try { await extra(page); } catch {} }
      if (!(await isBlocked(page))) {
        await page.screenshot({ path: outPath, fullPage: true });
        status = 'captured';
        console.log('  ✓ captured (attempt ' + (attempt+1) + ')');
        break;
      } else {
        reason = 'blocked/empty';
        console.log('  blocked, attempt ' + (attempt+1));
      }
    } catch (e) {
      reason = e.message.split('\n')[0];
      console.log('  error: ' + reason);
    }
  }

  if (status === 'fallback') {
    await placeholderPage.setViewportSize(viewport);
    await placeholderPage.setContent(placeholderHtml(stepName, platform));
    await placeholderPage.screenshot({ path: outPath });
    console.log('  → placeholder');
  }

  // update log
  log = log.filter(l => !(l.step === slug && l.platform === platform));
  log.push({ step: slug, platform, status, reason: status === 'fallback' ? reason : undefined, timestamp: nowIso() });
  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

async function runPlatform(platform) {
  const viewport = platform === 'web' ? { width: 1440, height: 900 } : { width: 390, height: 844 };
  const browser = await chromium.launch({
    headless: false,
    args: ['--disable-blink-features=AutomationControlled', '--no-sandbox']
  });
  const context = await browser.newContext({
    viewport,
    userAgent: platform === 'mobile' ? MOBILE_UA : undefined,
    locale: 'en-US',
    timezoneId: 'Asia/Riyadh',
    ...(platform === 'mobile' ? { isMobile: true, hasTouch: true, deviceScaleFactor: 3 } : {}),
  });
  const page = await context.newPage();
  const placeholderPage = await context.newPage();

  const base = 'https://www.noon.com/saudi-en';

  await captureStep(page, placeholderPage, platform, viewport, 'step-01-homepage', 'Homepage', base + '/');

  // Step 2: type into search
  await captureStep(page, placeholderPage, platform, viewport, 'step-02-search', 'Search', null, async (p) => {
    const input = await p.$('input[type="search"], input[name="q"], input[placeholder*="search" i]');
    if (input) { await input.click(); await p.keyboard.type('iPhone 17', { delay: 80 }); await p.waitForTimeout(800); }
  });

  await captureStep(page, placeholderPage, platform, viewport, 'step-03-results', 'Search Results',
    base + '/search/?q=iPhone%2017');
  await captureStep(page, placeholderPage, platform, viewport, 'step-04-brands', 'Apple Brand',
    base + '/apple/');
  await captureStep(page, placeholderPage, platform, viewport, 'step-05-product', 'Product Page',
    base + '/search/?q=iPhone%2017', async (p) => {
      const link = await p.$('a[href*="/p/"]');
      if (link) {
        const href = await link.getAttribute('href');
        if (href) await p.goto(new URL(href, 'https://www.noon.com').href, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await p.waitForTimeout(2000);
      }
    });
  await captureStep(page, placeholderPage, platform, viewport, 'step-06-add-to-cart', 'Add to Cart', null, async (p) => {
    const btn = await p.$('button:has-text("Add to Cart"), button:has-text("Add to cart")');
    if (btn) await btn.click({ timeout: 5000 }).catch(() => {});
    await p.waitForTimeout(1500);
  });
  await captureStep(page, placeholderPage, platform, viewport, 'step-07-cart', 'Cart', base + '/cart/');
  await captureStep(page, placeholderPage, platform, viewport, 'step-08-checkout', 'Checkout', base + '/checkout/');
  await captureStep(page, placeholderPage, platform, viewport, 'step-09-confirmation', 'Order Confirmation', base + '/login/');

  await context.close();
  await browser.close();
}

(async () => {
  for (const platform of ['web', 'mobile']) {
    try { await runPlatform(platform); } catch (e) { console.log('platform error:', e.message); }
  }
  const captured = log.filter(l => l.status === 'captured').length;
  const fallback = log.filter(l => l.status === 'fallback').length;
  console.log(`\nFinal: Captured ${captured}, Fallback ${fallback}, Total ${log.length}`);
})();
