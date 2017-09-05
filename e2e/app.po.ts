import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getH1Title() {
    return element(by.css('app-root h1')).getText();
  }

  getDashboard()
  {
    return element(by.id('dashboard')).getText();
  }

  getHeroes()
  {
    return element(by.id('heroes')).getText();
  }
}
