/* global describe, beforeAll, afterAll, test, expect */

const { launchBrowser } = require('./utils')

describe('Главная страница', () => {
  let browser
  let page

  beforeAll(async () => {
    const launchBrowserResult = await launchBrowser()
    browser = launchBrowserResult.browser
    page = launchBrowserResult.page
  })

  afterAll(async () => {
    await browser.close()
    browser = null
    page = null
  })

  test('Должен открывать главную страницу', async () => {
    await page.goto('http://localhost:3000/')

    await page.waitForSelector('.main')
    const result = await page.$eval('.main', ({ innerText }) => innerText)

    expect(result).toBe('Main')
  })

})
