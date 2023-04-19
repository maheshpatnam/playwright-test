import { BrowserContext, chromium, expect, Page, test, firefox } from '@playwright/test';
import { Browser } from 'playwright';

test.describe("drag and drop...", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false,
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://jqueryui.com/droppable');
    })

    test.skip('drag and drop', async ({ }) => {
        const src = await page.$("#draggable");
        const dst = await page.$("#droppable");
        if (src && dst) {
            const srcBound = await src.boundingBox();
            const dstBound = await dst.boundingBox();
            if(srcBound&&dstBound){
                await page.mouse.move(srcBound.x+srcBound.width/2,srcBound.y+srcBound.width/2);
                await page.mouse.down()
                await page.mouse.move(dstBound.x+dstBound.width/2,dstBound.y+dstBound.width/2);
                await page.mouse.down()
                await page.waitForTimeout(3000);
            }
            else{
                throw new Error("No element");
            }
        }
    });
    test.only('drag and drop1', async ({ }) => {
        const frame = await page.frame({url:"https://jqueryui.com/resources/demos/droppable/default.html"})
        const src = await frame?.$("#draggable");
        const dst = await frame?.$("#droppable");
        if (src && dst) {
            const srcBound = await src.boundingBox();
            const dstBound = await dst.boundingBox();
            if(srcBound&&dstBound){
                await page.mouse.move(srcBound.x+srcBound.width/2,srcBound.y+srcBound.width/2);
                await page.mouse.down()
                await page.mouse.move(dstBound.x+dstBound.width/2,dstBound.y+dstBound.width/2);
                await page.mouse.down()
                await page.waitForTimeout(3000);
            }
            else{
                throw new Error("No element");
            }
        }
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })
})

