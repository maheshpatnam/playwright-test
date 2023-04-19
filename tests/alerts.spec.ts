import { BrowserContext, chromium, expect, Page, test } from '@playwright/test';
import { Browser } from 'playwright';

test.describe(() => {

    test('Enter full name', async ({ page }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");
        await page.goto('https://letcode.in/alert');
        page.on("dialog", (dialog) => {
            console.log("message" + dialog.message());
            console.log("defaultValue" + dialog.defaultValue());
            dialog.accept("mahesh");
        })
        await page.locator('button#prompt').click();

        // await name?.fill("mahesh patnam");
        // await page.waitForTimeout(3000)
        // Expect a title "to contain" a substring.

        await expect(page).toHaveTitle(/Playwright/);
    });
})

