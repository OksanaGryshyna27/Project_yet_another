# Project_yet_another
Unit 11
Completed Tasks

 Task 2 — Page Objects

Implemented Page Object Model

Created page objects:

HomePage

LoginPage

AccountPage

Extracted shared header logic into HeaderFragment to avoid duplication

Updated existing test to use page objects


 Task 3 — Product Details Test

Implemented test Verify user can view product details

Used existing page objects

Added ProductDetailsPage with assertions:

product URL

product name

product price

Add to Cart button visibility

Add to Favorites button visibility


 Environment Configuration (.env)

Added .env support using dotenv

Moved BASE_URL, USER_EMAIL, USER_PASSWORD to environment variables

Configured playwright.config.ts to use BASE_URL