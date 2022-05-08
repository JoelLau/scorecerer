import { render, screen } from '@testing-library/react';
import PageLayoutStackedBackground from './page-layout-stacked-background';

describe(`given 'PageLayoutStackedBackground'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<PageLayoutStackedBackground />);
    expect(baseElement).toBeTruthy();
  });

  describe(`when given classNames`, () => {
    const testId = 'page-layout-stacked-background-component';
    const testClass = 'test-class-one test-class-two';

    it(`should apply test classes`, () => {
      render(
        <PageLayoutStackedBackground
          className={testClass}
          data-testid={testId}
        />
      );

      const pageLayoutStackedBackground = screen.getByTestId(testId);
      expect(pageLayoutStackedBackground.className).toContain('test-class-one');
      expect(pageLayoutStackedBackground.className).toContain('test-class-two');
    });
  });
});
