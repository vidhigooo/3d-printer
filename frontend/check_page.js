const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('response', response => console.log('PAGE RESPONSE:', response.status(), response.url()));
  page.on('requestfailed', request => console.log('PAGE REQUEST FAILED:', request.failure().errorText, request.url()));

  console.log('Navigating to page...');
  try {
    await page.goto('http://localhost:3001/product-page/flashforge-waxjet-51c-build-material', { waitUntil: 'networkidle0' });
    console.log('Page loaded successfully');
  } catch (err) {
    console.error('Failed to load page:', err);
  }

  await browser.close();
})();
