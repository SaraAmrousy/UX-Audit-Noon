// Final pass for 3 stragglers
const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const LOG = path.join(ROOT, 'capture-log.json');
let log = JSON.parse(fs.readFileSync(LOG, 'utf8'));
const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const iso=()=>new Date().toISOString();

async function blocked(p){try{const h=(await p.content()).toLowerCase();if(h.length<400)return true;if(h.includes('captcha')||h.includes('access denied'))return true;const t=(await p.evaluate(()=>document.body?document.body.innerText:'')).trim();if(t.length<100)return true;}catch{return true}return false;}

async function markCaptured(slug,platform){log=log.filter(l=>!(l.step===slug&&l.platform===platform));log.push({step:slug,platform,status:'captured',timestamp:iso()});fs.writeFileSync(LOG,JSON.stringify(log,null,2));}

(async () => {
  // --- Web step-02-search: go to homepage, type, screenshot BEFORE submit ---
  {
    const browser = await chromium.launch({ headless: false, args: ['--disable-blink-features=AutomationControlled'] });
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'en-US', timezoneId: 'Asia/Riyadh' });
    const p = await ctx.newPage();
    try {
      await p.goto('https://www.noon.com/saudi-en/', { waitUntil: 'domcontentloaded', timeout: 45000 });
      await p.waitForTimeout(5000);
      await p.evaluate(() => window.scrollBy(0, 150));
      await p.waitForTimeout(1500);
      // click search + type
      const inp = await p.$('input[type="search"], input[name="q"], input[placeholder*="search" i]');
      if (inp) { await inp.click(); await p.keyboard.type('iPhone 17', { delay: 110 }); await p.waitForTimeout(2500); }
      if (!(await blocked(p))) {
        await p.screenshot({ path: path.join(ROOT, 'screenshots/web/step-02-search.png'), fullPage: true });
        console.log('web step-02-search: captured'); await markCaptured('step-02-search','web');
      } else console.log('web step-02-search: still blocked');
    } catch (e) { console.log('web02 err', e.message.split('\n')[0]); }
    await ctx.close(); await browser.close();
  }

  // --- Web step-08-checkout: try after cart warmup ---
  {
    const browser = await chromium.launch({ headless: false, args: ['--disable-blink-features=AutomationControlled'] });
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'en-US', timezoneId: 'Asia/Riyadh' });
    const p = await ctx.newPage();
    try {
      await p.goto('https://www.noon.com/saudi-en/', { waitUntil: 'domcontentloaded', timeout: 45000 });
      await p.waitForTimeout(4000);
      await p.goto('https://www.noon.com/saudi-en/cart', { waitUntil: 'domcontentloaded', timeout: 45000 });
      await p.waitForTimeout(4000);
      await p.goto('https://www.noon.com/saudi-en/checkout', { waitUntil: 'domcontentloaded', timeout: 45000 });
      await p.waitForTimeout(5000);
      if (!(await blocked(p))) {
        await p.screenshot({ path: path.join(ROOT, 'screenshots/web/step-08-checkout.png'), fullPage: true });
        console.log('web step-08-checkout: captured'); await markCaptured('step-08-checkout','web');
      } else console.log('web step-08-checkout: still blocked');
    } catch (e) { console.log('web08 err', e.message.split('\n')[0]); }
    await ctx.close(); await browser.close();
  }

  // --- Mobile step-01-homepage: fresh browser, wait longer before screenshot ---
  {
    const browser = await chromium.launch({ headless: false, args: ['--disable-blink-features=AutomationControlled'] });
    const ctx = await browser.newContext({
      viewport: { width: 390, height: 844 }, userAgent: UA,
      locale: 'en-US', timezoneId: 'Asia/Riyadh',
      isMobile: true, hasTouch: true, deviceScaleFactor: 2
    });
    const p = await ctx.newPage();
    try {
      await p.goto('https://www.noon.com/saudi-en/', { waitUntil: 'domcontentloaded', timeout: 45000 });
      await p.waitForTimeout(6000);
      await p.evaluate(() => window.scrollBy(0, 200));
      await p.waitForTimeout(2000);
      await p.evaluate(() => window.scrollTo(0, 0));
      await p.waitForTimeout(2000);
      // Screenshot WITHOUT fullPage (the protocol error was on fullPage)
      await p.screenshot({ path: path.join(ROOT, 'screenshots/mobile/step-01-homepage.png'), fullPage: false });
      if (!(await blocked(p))) {
        console.log('mobile step-01-homepage: captured'); await markCaptured('step-01-homepage','mobile');
      } else console.log('mobile 01 blocked after screenshot');
    } catch (e) { console.log('mob01 err', e.message.split('\n')[0]); }
    await ctx.close(); await browser.close();
  }

  const c = log.filter(l => l.status === 'captured').length;
  console.log(`\nFinal: ${c}/${log.length} captured`);
})();
