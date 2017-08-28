import { Angular4OrderbyPage } from './app.po';

describe('angular4-orderby App', () => {
  let page: Angular4OrderbyPage;

  beforeEach(() => {
    page = new Angular4OrderbyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
