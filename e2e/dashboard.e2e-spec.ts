import { AppPage } from './app.po';
import {browser, by, element} from "protractor";

describe('angular-tour-of-heroes Dashboard', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display dashboard link', () => {
    page.navigateTo();
    expect(page.getDashboard()).toEqual('Dashboard');
  });
  it('should navigate to dashboard', () => {
    let dashboardLink = element(by.id('dashboard'));
    expect(dashboardLink).toBeTruthy("dashboard link should exist");
    dashboardLink.click();
    let bombasto = element(by.id('hero-13'));
    expect(bombasto).toBeTruthy('Bombasto should exist');
    bombasto.click();
  });
});
