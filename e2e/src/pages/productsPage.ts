import { browser, by, element } from 'protractor';

export class ProductsPage {
  navigateTo() {
    return browser.get('/');
  }

  async TypeSearch(value: string) {
    await element(by.className('mat-input-element')).sendKeys(value);
  }

  async getRowsCount() {
    const rowsCount = await element.all(by.className('mat-row')).count();
    return rowsCount;
  }

  async nextPage() {
    await element(by.className('mat-paginator-navigation-next')).click();
  }

  async lastPage() {
    await element(by.className('mat-paginator-navigation-last')).click();
  }

  async previousPage() {
    await element(by.className('mat-paginator-navigation-previous')).click();
  }

  async firstPage() {
    await element(by.className('mat-paginator-navigation-first')).click();
  }

  async sortBy(key: string) {
    await element(by.className(`mat-column-${key}`)).click();
  }

  async getFirstRowID() {
    const rowId = await element.all(by.tagName('mat-cell')).first().getText();
    return Number(rowId);
  }

}
