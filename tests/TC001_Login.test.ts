import CommonFunctions from "../page/common.page";
import HeaderPage from "../page/Header.page";
import LoginPage from "../page/Login.page";
import Env from "../utils/environment";
import * as data from "../data/login.cred.json";
import { Page, test, expect, Browser, BrowserContext, chromium } from "@playwright/test";
// import ReportUtils from "../utils/reportUtils";
// declare let browser: Browser;
declare const reporter: any;

test.describe("TC001", () => {
    // my pages
    let header: HeaderPage;
    let login: LoginPage;
    let common: CommonFunctions;

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(Env.test);
        header = new HeaderPage(page);
        login = new LoginPage(page);
        common = new CommonFunctions(page);
    })


    test("Login positive _ JIRA101", async () => {
        expect(page.url()).toBe("https://letcode.com/")
        //await ReportUtils.screenshot("naviagation")
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName(data.email);
        // await ReportUtils.screenshot("username")
        // const screenshotBuffer = await page.screenshot();
        // await reporter.addAttachment("username", screenshotBuffer, "image/png");
        await login.enterUserPassword(data.pass);
        // await ReportUtils.screenshot();
        await login.clickLoginBtn();
        const toaster = await common.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await header.clickSignOutLink();
        // await ReportUtils.screenshot("done")

    });
    test("Login again", async () => {
        await page.goto(Env.test, {
            waitUntil: "domcontentloaded"
        });
        await header.clickLoginLink();
        await login.login("koushik350@gmail.com", "Pass123$");
        // await page.waitForNavigation();
        expect(page.url()).toBe("https://letcode.in/")
        // await ReportUtils.screenshot("done")
    })
})