import { BrowserContext, chromium, expect, Page, test } from '@playwright/test';
import { Browser } from 'playwright';

test.describe(() => {

    test('Enter full name', async ({ page }) => {
        // await page.locator('input#fullName').fill("mahesh patnam");
        await page.goto('https://github.com/login');
        await page.fill("input:below(:text('Username or email address'))","mahesh.patnam123@gmail.com");
        await page.fill("input:above(:text('Sign in'))","SaiGanesh@132");
        await page.click("a:near(:text('Password'))");

        await page.waitForTimeout(3000)
        // await name?.fill("mahesh patnam");
        // await page.waitForTimeout(3000)
        // Expect a title "to contain" a substring.

        // await expect(page).toHaveTitle(/Playwright/);
    });
})

