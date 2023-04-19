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
        await page.goto('https://letcode.in/dropdowns');
    })

    test('Enter full name', async ({ }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");

    await page.locator('#fruits').selectOption("2");
    await page.waitForTimeout(3000)
    const msg= await page.$('div.notification.is-success')
  if(msg){
    expect(await msg.textContent()).toContain("Apple");
  }
        // await name?.fill("mahesh patnam");
       
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
    test.skip('Multiple', async ({ }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");

    await page.locator('#superheros').selectOption([{
        label:"Ant-Man"
    },{index:8},{value:"bt"}]);
    await page.waitForTimeout(3000)
        // await name?.fill("mahesh patnam");
       
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
    test.skip('count', async ({ }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");

    const lang = await page.$$('#lang option')
    console.log(lang.length)
    await page.waitForTimeout(3000)
        // await name?.fill("mahesh patnam");
       
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
    test.only('selected value', async ({ }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");

        await page.selectOption("#country", "India");
        const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value)
        console.log(text);
        expect(text).toBe("India");
        // await name?.fill("mahesh patnam");
       
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
   
    test.afterAll(async()=>{
        await page.close();
        await context.close();
        await browser.close();
    })
})

