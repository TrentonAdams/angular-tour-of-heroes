import { AppPage } from './app.po';

describe('angular-tour-of-heroes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display h1 title', () => {
    page.navigateTo();
    expect(page.getH1Title()).toEqual('Tour of Heroes');
  });
  it('should display dashboard link', () => {
    page.navigateTo();
    expect(page.getDashboard()).toEqual('Dashboard');
  });
  it('should display heroes link', () => {
    page.navigateTo();
    expect(page.getHeroes()).toEqual('Heroes');
  });
});
