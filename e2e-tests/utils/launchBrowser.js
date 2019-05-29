const puppeteer = require('puppeteer')

const launchBrowser = async () => {
  const hideBrowser = false
  const browser = await puppeteer.launch({
    headless: hideBrowser,
    slowMo: 250, // slow down by 250ms
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1366, height: 768 })

  return {
    browser,
    page,
  }
}

module.exports = launchBrowser
