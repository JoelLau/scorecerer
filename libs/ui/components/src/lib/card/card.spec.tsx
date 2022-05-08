import { render, screen } from '@testing-library/react';
import Card from './card';

describe(`given 'Card'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });

  describe(`when given classNames`, () => {
    const testId = 'card-component';
    const testClass = 'test-class-one test-class-two';

    it(`should apply test classes`, () => {
      render(<Card className={testClass} data-testid={testId} />);

      const card = screen.getByTestId(testId);
      expect(card.className).toContain('test-class-one');
      expect(card.className).toContain('test-class-two');
    });
  });
});
