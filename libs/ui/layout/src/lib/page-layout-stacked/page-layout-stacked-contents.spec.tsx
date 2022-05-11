import { render, screen } from '@testing-library/react';
import PageLayoutStackedContents from './page-layout-stacked-contents';

describe(`given 'PageLayoutStackedContents'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<PageLayoutStackedContents />);
    expect(baseElement).toBeTruthy();
  });

  describe(`when given classNames`, () => {
    const testId = 'card-component';
    const testClass = 'test-class-one test-class-two';

    it(`should apply test classes`, () => {
      render(
        <PageLayoutStackedContents className={testClass} data-testid={testId} />
      );

      const pageLayoutStackedContents = screen.getByTestId(testId);
      expect(pageLayoutStackedContents.className).toContain('test-class-one');
      expect(pageLayoutStackedContents.className).toContain('test-class-two');
    });
  });
});
