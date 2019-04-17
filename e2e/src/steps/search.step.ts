import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { ProductsPage } from '../pages/productsPage';
import { browser } from 'protractor';

let page: ProductsPage;

Before(() => {
  page = new ProductsPage();
});

Given('I am on the product page', async () => {
  await page.navigateTo();
});

When('I type {string} in the search box', async (text) => {
  await page.TypeSearch(text);
});

Then('I should see {int} as a search result', async (result) => {
  expect(await page.getRowsCount()).to.equal(result);
});
