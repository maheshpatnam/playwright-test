import { BrowserContext, chromium, expect, Page, test } from '@playwright/test';
import { Browser } from 'playwright';

test.describe(() => {
let browser:Browser;
let context:BrowserContext;
let page:Page;
    test.beforeAll(async()=>{
         browser = await chromium.launch({
            headless:false
        });
        context = await browser.newContext();
        page = await context.newPage();
    })
   
    test.skip('has title', async ({ }) => {
        const filePath1 ="/Users/mahesh.patnam@otrium.com/Desktop/learn_test/play_learn/videos/samp.png"
        const filePath2 ="/Users/mahesh.patnam@otrium.com/Desktop/learn_test/play_learn/videos/samp2.png"
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.sendgb.com/en/');
        await page.locator('input[name="qqfile"]').setInputFiles([filePath1,filePath2])
        await page.waitForTimeout(5000)
        // Expect a title "to contain" a substring.
        
        // await expect(page).toHaveTitle(/Playwright/);
        await context.close();
        await browser.close();
    });
    test.only('file upload', async ({ }) => {
        const filePath1 ="/Users/mahesh.patnam@otrium.com/Desktop/learn_test/play_learn/videos/samp.png"
        const filePath2 ="/Users/mahesh.patnam@otrium.com/Desktop/learn_test/play_learn/videos/samp2.png"
      
       
        await page.goto('https://the-internet.herokuapp.com/upload');
        page.on("filechooser",async(filechooser)=>{
            await filechooser.setFiles([filePath1,filePath2]);
        })
        await page.locator('div#drag-drop-upload').click({force:true});

        await page.waitForTimeout(5000)
        // Expect a title "to contain" a substring.
        
        // await expect(page).toHaveTitle(/Playwright/);
        await context.close();
        await browser.close();
    });
})

