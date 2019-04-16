import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/productsPage';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I increment the counter (\d+) times$/, async times => {
  for (let i = 0; i < times; i++) {
    await page.incrementCount();
  }
});

When(/^I supply my name, ([\w|\s]+)$/, async name => {
  await page.enterName(name);
});

Then(/^I see the current count of (\d+) displayed$/, async count => {
  expect(await page.getCountText()).to.equal(`Total clicks: ${count}`);
});

Then(/I see a personalized greeting for ([\w|\s]+)/, async name => {
  expect(await page.readGreeting()).to.equal(`Hello, ${name}`);
});
