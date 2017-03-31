import { Angular2RssReaderTutorialPage } from './app.po';

describe('angular2-rss-reader-tutorial App', function() {
  let page: Angular2RssReaderTutorialPage;

  beforeEach(() => {
    page = new Angular2RssReaderTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
