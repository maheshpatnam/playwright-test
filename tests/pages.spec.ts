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
        await page.goto('https://letcode.in/windows');
    })

    test('Single page', async ({ }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");
       const [newWindow] = await Promise.all([context.waitForEvent("page"),
        await page.click("#home")])
        await newWindow.waitForLoadState();
        expect(newWindow.url()).toContain("test");
        await newWindow.click('"Log in"');

        // await newWindow.waitUntil("");
        expect(newWindow.url()).toContain("signin");
        await page.bringToFront()
        await page.waitForTimeout(3000)
        await newWindow.close()
    });
    test.only('Multi page', async ({ }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");
       const [multiPage] = await Promise.all([context.waitForEvent("page"),
        await page.click("#multi")])
        await multiPage.waitForLoadState();
      const pages =multiPage.context().pages();
      console.log(pages.length);
      pages.forEach(page=>{
        console.log(page.url())
      })
      pages[1].on("dialog",(dialog)=>{
        console.log("message"+dialog.message())
        dialog.accept()
      })
      await pages[1].click("id=accept");
    });

   
    test.afterAll(async()=>{
        await page.close();
        await context.close();
        await browser.close();
    })
})

