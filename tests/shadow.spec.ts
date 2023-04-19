import { BrowserContext, chromium, expect, Page, test } from '@playwright/test';
import { Browser } from 'playwright';

test.describe(() => {

    test.skip('Enter full name', async ({ page }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");
        await page.goto('https://letcode.in/shadow');
        await page.locator('#fname').fill("mahesh");

        // await name?.fill("mahesh patnam");
        // await page.waitForTimeout(3000)
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
    test.only("chromium bug App", async ({ page }) => {
        await page.goto("https://bugs.chromium.org/p/chromium/issues/list");
        // select dropdown
        const ele = await page.$("#can")
        if (ele) {
            await ele.selectOption({
                label: "Issues to verify"
            })
        } else throw new Error("Eleemnt not found")
    
        // input data
    
        await page.fill("#searchq", "some bug");
        await page.waitForTimeout(3000);
    })
})

