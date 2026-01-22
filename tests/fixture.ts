import { test as base } from '@playwright/test';
import { AllPages } from './allPages';

type MyFixtures = {
    loggedInApp: AllPages;
    allPages: AllPages;

};

export const test = base.extend<MyFixtures>({
    loggedInApp: async ({ page }, use) => {
     
        const allPages = new AllPages(page);
        
        await page.goto('/auth/login');

    await allPages.loginPage.performLogin(
      process.env.USER_EMAIL!,
      process.env.USER_PASSWORD!
    );
    
        await page.waitForURL('https://practicesoftwaretesting.com/account');

    await use(allPages);

        //Clean up the fixture.
    },
    allPages: async ({ page }, use) => {
        const allPages = new AllPages(page);
        await use(allPages);
    }
});