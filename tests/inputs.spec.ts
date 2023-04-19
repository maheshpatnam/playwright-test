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
    })

    test('Enter full name', async ({ }) => {
        await page.goto('https://letcode.in/edit');
        // await page.locator('input#fullName').fill("mahesh patnam");
        const name = await page.$('input#fullName')
        if(name!=null){
            await name.type("mahesh patnam")
        }
        // await name?.fill("mahesh patnam");
        // await page.waitForTimeout(5000)
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
    test('Join', async ({ }) => {
        await page.goto('https://letcode.in/edit');
        // await page.locator('input#fullName').fill("mahesh patnam");
        const name = await page.$('input#join')
        await name?.focus();
        await page.keyboard.press("End")
        // if(name!=null){
        //     await name.fill("mahesh patnam")
        // }
        await name?.type(" mahesh patnam");
        // await page.waitForTimeout(5000)
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
    test('getMe', async ({ }) => {
        await page.goto('https://letcode.in/edit');
        // await page.locator('input#fullName').fill("mahesh patnam");
        const name = await page.getAttribute('input#getMe',"value")
         console.log(name)
        // await page.waitForTimeout(5000)
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
    
    test.only('clear', async ({ }) => {
        await page.goto('https://letcode.in/edit');
        // await page.locator('input#fullName').fill("mahesh patnam");
        await page.locator('input#clearMe').fill("")
        //  console.log(name)
        // await page.waitForTimeout(5000)
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
      
    });
    test.afterAll(async()=>{
        await context.close();
        await browser.close();
    })
})

