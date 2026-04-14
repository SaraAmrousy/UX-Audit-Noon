// Targeted retry for failed steps with persistent context
const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const LOG_PATH = path.join(ROOT, 'capture-log.json');
let log = JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));

const MOBILE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const nowIso = () => new Date().toISOString();

function placeholderHtml(n,p){return `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;height:100%;font-family:'Segoe UI',Arial,sans-serif;background:#F5F5F5;color:#111}.bar{height:56px;background:#FEEE00;display:flex;align-items:center;padding:0 24px;font-weight:700}.wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100% - 56px);text-align:center;padding:40px}h1{font-size:20px;margin:0 0 16px}p{font-size:14px;color:#666;margin:4px 0}.tag{margin-top:40px;background:#111;color:#FEEE00;padding:6px 14px;border-radius:6px;font-size:11px;letter-spacing:2px}</style></head><body><div class="bar">noon</div><div class="wrap"><h1>${n} — ${p.toUpperCase()}</h1><p>Screenshot could not be captured.</p><p>Noon's bot protection was triggered.</p><p>Manual review required for this step.</p><div class="tag">FALLBACK PLACEHOLDER</div></div></body></html>`;}

async function isBlocked(page) {
  try {
    const html = (await page.content()).toLowerCase();
    if (html.length < 400) return true;
    if (html.includes('captcha') || html.includes('access denied') || html.includes('just a moment')) return true;
    const txt = (await page.evaluate(() => document.body ? document.body.innerText : '')).trim();
    if (txt.length < 100) return true;
  } catch { return true; }
  return false;
}

async function tryCapture(page, slug, platform, outPath, fn) {
  for (let i = 0; i < 3; i++) {
    try {
      await fn(page);
      await page.waitForTimeout(2500 + i*1500);
      try { await page.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
      if (!(await isBlocked(page))) {
        await page.screenshot({ path: outPath, fullPage: true });
        console.log(`  ${slug}: captured (try ${i+1})`);
        log = log.filter(l => !(l.step === slug && l.platform === platform));
        log.push({ step: slug, platform, status: 'captured', timestamp: nowIso() });
        fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
        return true;
      }
    } catch (e) { console.log('  err:', e.message.split('\n')[0]); }
  }
  console.log(`  ${slug}: still blocked`);
  return false;
}

async function run(platform) {
  const viewport = platform === 'web' ? { width: 1440, height: 900 } : { width: 390, height: 844 };
  const browser = await chromium.launch({ headless: false, args: ['--disable-blink-features=AutomationControlled'] });
  const context = await browser.newContext({
    viewport,
    userAgent: platform === 'mobile' ? MOBILE_UA : undefined,
    locale: 'en-US', timezoneId: 'Asia/Riyadh',
    ...(platform === 'mobile' ? { isMobile: true, hasTouch: true, deviceScaleFactor: 3 } : {}),
  });
  const page = await context.newPage();
  const ph = await context.newPage();

  // Warm up: hit homepage
  console.log(`[${platform}] warmup`);
  try {
    await page.goto('https://www.noon.com/saudi-en/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(4000);
    await page.evaluate(() => window.scrollBy(0, 400));
    await page.waitForTimeout(1500);
  } catch (e) { console.log('  warmup failed:', e.message); }

  const dir = (s) => path.join(ROOT, 'screenshots', platform, `${s}.png`);

  // Step 01 mobile homepage
  if (platform === 'mobile') {
    await tryCapture(page, 'step-01-homepage', 'mobile', dir('step-01-homepage'), async p => {
      // already on homepage from warmup
    });
  }

  // Step 02: search with typed text (stay on page, click search input and type)
  await tryCapture(page, 'step-02-search', platform, dir('step-02-search'), async p => {
    await p.goto('https://www.noon.com/saudi-en/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await p.waitForTimeout(3000);
    const sel = 'input[type="search"], input[name="q"], input[placeholder*="search" i]';
    const inp = await p.$(sel);
    if (inp) {
      await inp.click();
      await p.keyboard.type('iPhone 17', { delay: 90 });
      await p.waitForTimeout(1500);
    }
  });

  // Step 03: search results — press Enter from step 2
  await tryCapture(page, 'step-03-results', platform, dir('step-03-results'), async p => {
    try { await p.keyboard.press('Enter'); await p.waitForTimeout(4000); } catch {}
    // also try direct URL with no trailing slash
    if (await isBlocked(p)) {
      await p.goto('https://www.noon.com/saudi-en/search?q=iphone+17', { waitUntil: 'domcontentloaded', timeout: 45000 });
      await p.waitForTimeout(3500);
    }
  });

  // Step 06: add to cart — click actual product & click Add
  await tryCapture(page, 'step-06-add-to-cart', platform, dir('step-06-add-to-cart'), async p => {
    try {
      const link = await p.$('a[href*="/p/"]');
      if (link) {
        const href = await link.getAttribute('href');
        if (href) {
          await p.goto(new URL(href, 'https://www.noon.com').href, { waitUntil: 'domcontentloaded', timeout: 45000 });
          await p.waitForTimeout(3500);
        }
      }
      const addBtn = await p.$('button:has-text("Add to Cart"), button:has-text("Add to cart"), [data-qa="pdp-add-to-cart"]');
      if (addBtn) {
        await addBtn.scrollIntoViewIfNeeded();
        await addBtn.click({ timeout: 5000 }).catch(() => {});
        await p.waitForTimeout(2500);
      }
    } catch {}
  });

  // Step 07: cart — with established session
  await tryCapture(page, 'step-07-cart', platform, dir('step-07-cart'), async p => {
    await p.goto('https://www.noon.com/saudi-en/cart/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  });

  // Step 09: login screen
  await tryCapture(page, 'step-09-confirmation', platform, dir('step-09-confirmation'), async p => {
    await p.goto('https://www.noon.com/saudi-en/login', { waitUntil: 'domcontentloaded', timeout: 45000 });
  });

  await context.close();
  await browser.close();
}

(async () => {
  for (const platform of ['web', 'mobile']) {
    await run(platform).catch(e => console.log('err', e.message));
  }
  const c = log.filter(l => l.status === 'captured').length;
  console.log(`\nFinal: ${c}/${log.length} captured`);
})();
