import { BrowserContext, chromium, expect, Page, test } from '@playwright/test';
import { Browser } from 'playwright';

test.describe(() => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://letcode.in/frame');
    })

    test('frames', async ({ }) => {
      const allFrames = page.frames();
      console.log(allFrames.length)
      const frameName = page.frameLocator("#firstFr");
      await frameName.locator("input[name='fname']").fill("mahesh");
      await frameName.locator("input[name='lname']").fill("patnam");
      expect(await frameName?.locator('p.has-text-info').textContent()).toContain("You have entered");
      const innerFrame = frameName.frameLocator("iframe[src='innerFrame']");
      await innerFrame.locator("input[name='email']").fill("mahesh@gmail.com");
      await frameName.locator("input[name='fname']").fill("ramesh");
      await page.waitForTimeout(3000);
    });
   
    test.afterAll(async()=>{
        await page.close();
        await context.close();
        await browser.close();
    })
})

