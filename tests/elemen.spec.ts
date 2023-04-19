import { BrowserContext, chromium,expect, Page, test,firefox } from '@playwright/test';
import { Browser } from 'playwright';

test.describe("local browser...",() => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await firefox.launch({
            headless: false,
            channel:"firefox"
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://letcode.in/elements');
    })

    test('enter git username', async ({ }) => {
      await page.locator("input[name='username']").fill("ortonikc");
      await page.locator("button#search").click()
      await page.waitForSelector("app-gitrepos ol li",{timeout:5000});
      const repos = await page.$$("app-gitrepos ol li");
    //   console.log(repos.length);
    //   for await(const repo of repos){
    //     console.log(await repo.innerText())
    //   }
    const allUrls =await Promise.all(repos.map(async(repo,i)=>{
        return await repo.innerText();
    })) 
    console.log(allUrls);
    });
    test.afterAll(async()=>{
        await page.close();
        await context.close();
        await browser.close();
    })
})

