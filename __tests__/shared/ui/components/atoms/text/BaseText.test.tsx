import React from 'react';
import { render } from '@testing-library/react-native';
import { BaseText, BaseTextVariant } from '@/shared/ui/components/atoms/text';

describe('BaseText', () => {
  it('renders text correctly', () => {
    const { getByText } = render(<BaseText>Hello World</BaseText>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('does not render when children are not provided', () => {
    const { container } = render(<BaseText />);
    expect(container).toBeNull();
  });

  it('applies uppercase style when uppercase prop is true', () => {
    const { getByText } = render(<BaseText uppercase>text</BaseText>);
    const element = getByText('text');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          textTransform: 'uppercase'
        })
      ])
    );
  });

  it('applies text-center style when textCenter prop is true', () => {
    const { getByText } = render(<BaseText textCenter>centered</BaseText>);
    const element = getByText('centered');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          textAlign: 'center'
        })
      ])
    );
  });

  it('applies custom color when color prop is provided', () => {
    const { getByText } = render(<BaseText color="red">colored</BaseText>);
    const element = getByText('colored');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: 'red'
        })
      ])
    );
  });

  it('applies correct font variant style', () => {
    const { getByText } = render(
      <BaseText variant={BaseTextVariant.CaptionH1}>heading</BaseText>
    );
    const element = getByText('heading');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 16
        })
      ])
    );
  });
});
