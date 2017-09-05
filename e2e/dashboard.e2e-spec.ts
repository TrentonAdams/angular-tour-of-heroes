import {browser, by, element} from "protractor";

describe('angular-tour-of-heroes Dashboard', () =>
{
  let dashboardLink;
  beforeEach(() =>
  {
    dashboardLink = element(by.id('dashboard'));
  });

  it('should display dashboard link', () =>
  {
    browser.get('/');
    expect(dashboardLink.getText()).toEqual('Dashboard');
  });

  it('should navigate to dashboard', () =>
  {
    expect(dashboardLink).toBeTruthy("dashboard link should exist");
    dashboardLink.click();
    let bombasto = element(by.id('hero-13'));
    expect(bombasto).toBeTruthy('Bombasto should exist');
    bombasto.click();
  });
});
