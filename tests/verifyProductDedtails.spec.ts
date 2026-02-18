import { test } from '../fixture';


test('Verify user can view product details', { tag: ['@smoke'] }, async ({ apiLoggedInApp }) => {
 

    await test.step('Open home page', async () => {
        await apiLoggedInApp.homePage.openHomePage();
    });
    await test.step('Open product "Combination Pliers"', async () => {
        await apiLoggedInApp.homePage.clickProductByName('Combination Pliers');
    });    
    await test.step('Verify product details', async () => {
        await apiLoggedInApp.productDetailsPage.verifyProductURL();   
        await apiLoggedInApp.productDetailsPage.verifyProductName('Combination Pliers');
        await apiLoggedInApp.productDetailsPage.verifyProductPrice('14.15');
    }); 
    await test.step('Verify action buttons are visible', async () => {
        await apiLoggedInApp.productDetailsPage.verifyAddToCartButtonVisible();
        await apiLoggedInApp.productDetailsPage.verifyAddToFavoriteButtonVisible();
    });

    


}
);
