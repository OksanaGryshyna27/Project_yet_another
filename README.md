# Project_yet_another
Unit 11
## Project overview

This repository contains automated UI tests for https://practicesoftwaretesting.com  
The project is built with Playwright and uses the Page Object Model (POM) approach.

The goal of this project is to demonstrate:
- usage of Page Objects and Fragments
- separation of test logic from UI interactions
- environment-based configuration using `.env`

---

## Implemented tasks

### Task 2
- Refactored existing tests to use Page Object Model
- Implemented `HomePage`, `LoginPage`, `AccountPage`
- Extracted common header into `HeaderFragment` to avoid duplication

### Task 3
- Implemented test **“Verify user can view product details”**
- Added `ProductDetailsPage`
- Added assertions for:
  - product URL
  - product name
  - product price
  - “Add to Cart” button visibility
  - “Add to Favorites” button visibility

---

## Environment variables

Project uses `.env` file for configuration:

```env
BASE_URL=https://practicesoftwaretesting.com
USER_EMAIL=customer@practicesoftwaretesting.com
USER_PASSWORD=welcome01

## How to run tests
1. Install dependencies

nmp install

2. Run tests

npx playwright test
