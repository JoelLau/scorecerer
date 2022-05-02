import { TEST_IDS } from '@scorecerer/util';
import { render, screen } from '@testing-library/react';
import PageContent from './page-content';

describe(`given 'PageContent'`, () => {
  it('should render', async () => {
    const { baseElement } = render(<PageContent />);
    expect(baseElement).toBeTruthy();
  });

  describe(`when 'header' prop is present`, () => {
    it('should render all children components', () => {
      render(<PageContent header="asdf">Hello World</PageContent>);

      const pageContent = screen.getByTestId(TEST_IDS.PAGE_CONTENT);
      expect(pageContent).toBeInTheDocument();

      const pageHeader = screen.getByTestId(TEST_IDS.PAGE_CONTENT_HEADER);
      expect(pageHeader).toBeInTheDocument();

      const pageContentBody = screen.getByTestId(TEST_IDS.PAGE_CONTENT_BODY);
      expect(pageContentBody).toBeInTheDocument();
    });
  });
});
