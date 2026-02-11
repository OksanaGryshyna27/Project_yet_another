import { test, expect } from '@playwright/test';
import path from 'path';
import { HomePage } from '../pageObjects/home.page'; 


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test.use({ storageState: authFile });

test('has title', async ({ page }) => {
    const homePage = new HomePage(page);
   
    await page.goto(`${process.env.BASE_URL}`);
   
    await expect(homePage.header.navMenu).toHaveText('Jane Doe')
});
