import {browser, by, element} from "protractor";

describe('angular-tour-of-heroes Heroes', () =>
{
  let dashboardLink;
  beforeEach(() =>
  {
    dashboardLink = element(by.id('heroes'));
  });

  it('should display heroes link', () =>
  {
    browser.get('/');
    expect(dashboardLink.getText()).toEqual('Heroes');
  });

  it('should navigate to heroes', () =>
  {
    expect(dashboardLink).toBeTruthy("heroes link should exist");
    dashboardLink.click();
    expect(element(by.id('dashboard-hero'))).toBeTruthy();
    expect(element(by.id('li-hero-13'))).toBeTruthy('Bombasto should exist')
  });

  it('should navigate to bombasto summary', () =>
  {
    let bombasto = element(by.id('li-hero-13'));
    expect(bombasto).toBeTruthy('Bombasto should exist');
    bombasto.click();
    expect(element(by.id('details-hero-13'))).toBeTruthy('Bombasto should exist');
  });

  it('should navigate to bombasto details', () =>
  {
    let bombastoDetails = element(by.id('details-hero-13'));
    expect(bombastoDetails).toBeTruthy('Bombasto should exist');
    bombastoDetails.click();
    let bombastoInput = element(by.id('input-hero-13'));
    expect(bombastoInput).toBeTruthy('Bombasto input field should exist');
    expect(bombastoInput.getAttribute('value')).toEqual('Bombasto');
  });

});
