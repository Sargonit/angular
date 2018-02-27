import { Angular33Page } from './app.po';

describe('angular33 App', function() {
  let page: Angular33Page;

  beforeEach(() => {
    page = new Angular33Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
