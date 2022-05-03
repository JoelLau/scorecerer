import { render, screen } from '@testing-library/react';
import Typography, {
  TypographyTag,
  TypographyVariantClassMap,
} from './typography';

describe(`given 'Typography'`, () => {
  it(`should render`, () => {
    const { baseElement } = render(<Typography />);
    expect(baseElement).toBeTruthy();
  });

  it.each([
    ['h1', HTMLHeadingElement],
    ['p', HTMLParagraphElement],
    ['div', HTMLDivElement],
    [undefined, HTMLDivElement],
  ] as [TypographyTag, never][])(
    'should render correctly when tag is %s',
    (tag, element) => {
      render(<Typography tag={tag}>SOME TEXT</Typography>);
      const asdf = screen.getByText('SOME TEXT');
      expect(asdf).toBeInstanceOf(element);
    }
  );

  it.each([...Object.entries(TypographyVariantClassMap)] as [
    keyof typeof TypographyVariantClassMap,
    string
  ][])(
    'should render correctly when variant is %s (%s)',
    (variant, classes) => {
      const { container } = render(
        <Typography variant={variant}>SOME TEXT</Typography>
      );
      expect(container.firstChild).toHaveClass(...classes.split(' '));
    }
  );

  describe('when tag is a valid variant key, and variant is absent', () => {
    it('then apply tag classes', () => {
      const { container } = render(<Typography tag="h1">SOME TEXT</Typography>);
      expect(container.firstChild).toHaveClass(
        ...TypographyVariantClassMap['h1'].split(' ')
      );
    });
  });

  describe('when tag is also a variant, and variant is present', () => {
    it('then prefer variant classes', () => {
      const { container } = render(
        <Typography tag="h1" variant="button">
          SOME TEXT
        </Typography>
      );
      expect(container.firstChild).toHaveClass(
        ...TypographyVariantClassMap['button'].split(' ')
      );
    });
  });
});
