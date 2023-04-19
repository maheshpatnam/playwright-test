import { chromium, expect, test } from '@playwright/test';

test.describe(() => {
    test('has title', async ({ }) => {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            recordVideo:{
                dir: "./videos/",
                size:{
                    width:800,
                    height:600
                }
            }
        });
        const page = await context.newPage();
        await page.goto('https://letcode.in/');
        await page.locator("text='Log in'").click();
        await page.locator('input[name="email"]').fill("surranna234@gmail.com")
        await page.locator('input[name="password"]').fill("Test@4321")
        await page.locator('button:text("LOGIN")').click();
        await page.locator("text='Sign out'").click();
        
        // Expect a title "to contain" a substring.
        
        // await expect(page).toHaveTitle(/Playwright/);
        await context.close();
        await browser.close();
    });
    test.only('has title2', async ({ page}) => {
        await page.goto('https://letcode.in/');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.getByRole('textbox', { name: 'Enter registered email' }).click();
        await page.getByRole('textbox', { name: 'Enter registered email' }).fill('surranna234@gmail.com');
        await page.getByPlaceholder('Enter password').click();
        await page.getByPlaceholder('Enter password').fill('Test@4321');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.getByRole('alertdialog', { name: 'Welcome mahesh' }).click();
        await page.getByRole('link', { name: 'Sign out' }).click();
    
    });



})

