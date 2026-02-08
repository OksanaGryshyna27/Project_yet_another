import { test as base, BrowserContext } from '@playwright/test';
import { AllPages } from './pageObjects/allPages';
import path from 'path';

const authFile = path.resolve(__dirname, 'playwright/.auth/user.json');

type MyFixtures = {
    loggedInApp: AllPages;
    allPages: AllPages;
    apiLoggedInApp: AllPages;
    context: BrowserContext

};

export const test = base.extend<MyFixtures>({

    context: async ({ browser }, use) => {
        const context = await browser.newContext({
        });

        await use(context);
        await context.close();
    },

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
    },
    apiLoggedInApp: async ({ browser, request }, use) => {
    
    const resp = await request.post(
      'https://api.practicesoftwaretesting.com/users/login',
      {
        data: {
          email: 'customer@practicesoftwaretesting.com',
          password: 'welcome01',
        },
      }
    );

    const { access_token } = await resp.json();

    const context = await browser.newContext();
    const page = await context.newPage();

    
    await page.addInitScript((token) => {
      localStorage.setItem('auth-token', token);
    }, access_token);

    await page.goto('/');

    const allPages = new AllPages(page);

    await use(allPages);
    await context.close();
  },
});
    