import { test as base } from '@playwright/test';
import { AllPages } from './pageObjects/allPages';
import path from 'path';

const authFile = path.resolve(__dirname, 'playwright/.auth/user.json');

type MyFixtures = {
    loggedInApp: AllPages;
    allPages: AllPages;

};

export const test = base.extend<MyFixtures>({
    loggedInApp: async ({ browser }, use) => {

        const context = await browser.newContext({
            storageState: authFile,
        });
        const page = await context.newPage();
        const allPages = new AllPages(page);

        await use(allPages);
        await context.close();

        //Clean up the fixture.
    },
    allPages: async ({ page }, use) => {
        const allPages = new AllPages(page);
        await use(allPages);
    }
});