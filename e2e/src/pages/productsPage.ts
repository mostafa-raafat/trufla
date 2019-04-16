import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  incrementCount() {
    return element(by.id('incButton')).click();
  }

  getCountText() {
    return element(by.id('countText')).getText();
  }

  enterName(name: string) {
    return element(by.id('nameInput')).sendKeys(name);
  }

  readGreeting() {
    return element(by.id('greeting')).getText();
  }
}
