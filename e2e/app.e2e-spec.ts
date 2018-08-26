import { NgStoriesPage } from './app.po';

describe('ng-stories App', () => {
  let page: NgStoriesPage;

  beforeEach(() => {
    page = new NgStoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
