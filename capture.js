// Noon SA UX audit — screenshot capture with 3-attempt fallback
const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const LOG_PATH = path.join(ROOT, 'capture-log.json');
const log = [];

const MOBILE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1';

const STEPS = [
  { id: 1, slug: 'step-01-homepage',     name: 'Homepage' },
  { id: 2, slug: 'step-02-search',       name: 'Search' },
  { id: 3, slug: 'step-03-results',      name: 'Search Results' },
  { id: 4, slug: 'step-04-brands',       name: 'Noon Brands / Apple' },
  { id: 5, slug: 'step-05-product',      name: 'Product Page' },
  { id: 6, slug: 'step-06-add-to-cart',  name: 'Add to Cart' },
  { id: 7, slug: 'step-07-cart',         name: 'Cart' },
  { id: 8, slug: 'step-08-checkout',     name: 'Checkout' },
  { id: 9, slug: 'step-09-confirmation', name: 'Order Confirmation' },
];

function nowIso() { return new Date().toISOString(); }

function placeholderHtml(stepName, platform) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;height:100%;font-family:'Segoe UI',Arial,sans-serif;background:#F5F5F5;color:#111}
  .bar{height:56px;background:#FEEE00;display:flex;align-items:center;padding:0 24px;font-weight:700}
  .wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100% - 56px);text-align:center;padding:40px}
  h1{font-size:20px;margin:0 0 16px}
  p{font-size:14px;color:#666;margin:4px 0}
  .tag{margin-top:40px;background:#111;color:#FEEE00;padding:6px 14px;border-radius:6px;font-size:11px;letter-spacing:2px}
</style></head><body>
  <div class="bar">noon</div>
  <div class="wrap">
    <h1>${stepName} — ${platform.toUpperCase()}</h1>
    <p>Screenshot could not be captured.</p>
    <p>Noon's bot protection was triggered.</p>
    <p>Manual review required for this step.</p>
    <div class="tag">FALLBACK PLACEHOLDER</div>
  </div>
</body></html>`;
}

async function makePlaceholder(page, stepName, platform, outPath, viewport) {
  await page.setViewportSize(viewport);
  await page.setContent(placeholderHtml(stepName, platform));
  await page.screenshot({ path: outPath, fullPage: false });
}

async function isLikelyBlocked(page) {
  try {
    const html = (await page.content()).toLowerCase();
    if (html.length < 400) return true;
    if (html.includes('captcha') || html.includes('px-captcha') ||
        html.includes('access denied') || html.includes('just a moment') ||
        html.includes('unusual traffic')) return true;
    const bodyText = (await page.evaluate(() => document.body ? document.body.innerText : '')).trim();
    if (bodyText.length < 80) return true;
  } catch { return true; }
  return false;
}

async function safeGoto(page, url, opts = {}) {
  try { await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000, ...opts }); return true; }
  catch (e) { console.log('  goto failed:', e.message); return false; }
}

async function tryAttempt(page, action, attempt) {
  const delays = [800, 1500, 2200];
  try {
    await action();
    await page.waitForTimeout(delays[attempt] || 1000);
    if (attempt >= 1) {
      try { await page.evaluate(() => window.scrollBy(0, Math.random() * 300)); } catch {}
      try { await page.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
    }
    const blocked = await isLikelyBlocked(page);
    return !blocked;
  } catch (e) {
    console.log('  attempt error:', e.message);
    return false;
  }
}

async function captureStep({ page, placeholderPage, platform, viewport, slug, stepName, action, outPath }) {
  console.log(`\n[${platform}] ${slug}: ${stepName}`);
  let status = 'fallback';
  let reason = '';

  for (let attempt = 0; attempt < 3; attempt++) {
    console.log(`  attempt ${attempt + 1}...`);
    const ok = await tryAttempt(page, action, attempt);
    if (ok) {
      try {
        await page.screenshot({ path: outPath, fullPage: true });
        status = 'captured';
        console.log('  captured ✓');
        break;
      } catch (e) { reason = 'screenshot error: ' + e.message; }
    } else {
      reason = 'Bot protection or empty page';
    }
  }

  if (status === 'fallback') {
    console.log('  → placeholder');
    await makePlaceholder(placeholderPage, stepName, platform, outPath, viewport);
  }

  log.push({
    step: slug, platform, status,
    reason: status === 'fallback' ? reason : undefined,
    timestamp: nowIso()
  });
}

async function runPlatform(browser, platform) {
  const viewport = platform === 'web' ? { width: 1440, height: 900 } : { width: 390, height: 844 };
  const contextOpts = {
    viewport,
    userAgent: platform === 'mobile' ? MOBILE_UA : undefined,
    locale: 'en-US',
    timezoneId: 'Asia/Riyadh',
    ...(platform === 'mobile' ? { isMobile: true, hasTouch: true, deviceScaleFactor: 3 } : {}),
  };
  const context = await browser.newContext(contextOpts);
  const page = await context.newPage();
  const placeholderPage = await context.newPage();

  const dir = path.join(ROOT, 'screenshots', platform);
  const out = (slug) => path.join(dir, `${slug}.png`);

  // Step 1: homepage
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-01-homepage', stepName: 'Homepage',
    outPath: out('step-01-homepage'),
    action: async () => { await safeGoto(page, 'https://www.noon.com/saudi-en/'); }
  });

  // Step 2: search (type but don't submit)
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-02-search', stepName: 'Search',
    outPath: out('step-02-search'),
    action: async () => {
      try {
        const input = await page.$('input[type="search"], input[name="q"], input[placeholder*="search" i]');
        if (input) { await input.click(); await input.fill('iPhone 17'); }
      } catch {}
    }
  });

  // Step 3: search results (submit)
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-03-results', stepName: 'Search Results',
    outPath: out('step-03-results'),
    action: async () => {
      await safeGoto(page, 'https://www.noon.com/saudi-en/search/?q=iPhone%2017');
    }
  });

  // Step 4: brand page (try Apple)
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-04-brands', stepName: 'Noon Brands / Apple',
    outPath: out('step-04-brands'),
    action: async () => {
      await safeGoto(page, 'https://www.noon.com/saudi-en/apple/');
    }
  });

  // Step 5: product page — try to click first product from results
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-05-product', stepName: 'Product Page',
    outPath: out('step-05-product'),
    action: async () => {
      await safeGoto(page, 'https://www.noon.com/saudi-en/search/?q=iPhone%2017');
      try {
        const link = await page.$('a[href*="/p/"], a[href*="/apple-iphone"]');
        if (link) {
          const href = await link.getAttribute('href');
          if (href) await safeGoto(page, new URL(href, 'https://www.noon.com').href);
        }
      } catch {}
    }
  });

  // Step 6: add to cart — try clicking add to cart
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-06-add-to-cart', stepName: 'Add to Cart',
    outPath: out('step-06-add-to-cart'),
    action: async () => {
      try {
        const btn = await page.$('button:has-text("Add to Cart"), button:has-text("Add to cart")');
        if (btn) await btn.click({ timeout: 4000 }).catch(() => {});
        await page.waitForTimeout(1200);
      } catch {}
    }
  });

  // Step 7: cart page
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-07-cart', stepName: 'Cart',
    outPath: out('step-07-cart'),
    action: async () => {
      await safeGoto(page, 'https://www.noon.com/saudi-en/cart/');
    }
  });

  // Step 8: checkout — try proceed
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-08-checkout', stepName: 'Checkout',
    outPath: out('step-08-checkout'),
    action: async () => {
      await safeGoto(page, 'https://www.noon.com/saudi-en/checkout/');
    }
  });

  // Step 9: order confirmation (likely login wall)
  await captureStep({
    page, placeholderPage, platform, viewport,
    slug: 'step-09-confirmation', stepName: 'Order Confirmation',
    outPath: out('step-09-confirmation'),
    action: async () => {
      await safeGoto(page, 'https://www.noon.com/saudi-en/login/');
    }
  });

  await context.close();
}

(async () => {
  const browser = await chromium.launch({ headless: true, slowMo: 200 });
  try {
    for (const platform of ['web', 'mobile']) {
      await runPlatform(browser, platform);
    }
  } finally {
    await browser.close();
    fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
    const captured = log.filter(l => l.status === 'captured').length;
    const fallback = log.filter(l => l.status === 'fallback').length;
    console.log(`\nDone. Captured: ${captured}, Fallback: ${fallback}, Total: ${log.length}`);
  }
})();
