import { test as base, BrowserContext } from '@playwright/test';
import { AllPages } from './pageObjects/allPages';
import path from 'path';
import { API_BASE_URL, USER_EMAIL, USER_PASSWORD } from './config/baseConfig';

const authFile = path.resolve(__dirname, 'playwright/.auth/user.json');

type MyFixtures = {
    loggedInApp: AllPages;
    allPages: AllPages;
    apiLoggedInApp: AllPages;
    context: BrowserContext

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
    },
    apiLoggedInApp: async ({ browser, request }, use) => {
    
    const resp = await request.post(
      `${API_BASE_URL}/users/login`,
      {
        data: {
          email: USER_EMAIL,
          password: USER_PASSWORD,
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
    