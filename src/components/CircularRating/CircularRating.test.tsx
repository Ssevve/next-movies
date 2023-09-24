import { render, screen } from '@testing-library/react';

import CircularRating, { calculateCircleSize } from '@/components/CircularRating/CircularRating';

describe('CircularRating', () => {
  it('should render a correct rating text', () => {
    const expectedRating = 3.5;
    render(<CircularRating rating={3.54} />);
    expect(screen.getByText(expectedRating)).toBeInTheDocument();
  });

  it('should render with a correct text size if "textSize" prop was provided', () => {
    const expectedTextSize = 'sm';
    const expectedRating = 3.5;
    render(<CircularRating rating={expectedRating} textSize={expectedTextSize} />);
    expect(screen.getByText(expectedRating)).toHaveClass(`text-${expectedTextSize}`);
  });

  it('should render with correct track stroke width if "strokeWidth" prop was provided', () => {
    const expectedStrokeWidth = 2;
    render(<CircularRating rating={3.5} strokeWidth={expectedStrokeWidth} />);
    expect(screen.getByTestId('circular-rating-track')).toHaveAttribute(
      'stroke-width',
      expectedStrokeWidth.toString()
    );
  });

  it('should render with correct fill stroke width if "strokeWidth" prop was provided', () => {
    const expectedStrokeWidth = 2;
    render(<CircularRating rating={3.5} strokeWidth={expectedStrokeWidth} />);
    expect(screen.getByTestId('circular-rating-fill')).toHaveAttribute(
      'stroke-width',
      expectedStrokeWidth.toString()
    );
  });

  it('should render with correct wrapper classes if "size" prop was provided', () => {
    const expectedSize = 30;
    render(<CircularRating rating={3.5} size={expectedSize} />);
    expect(screen.getByTestId('circular-rating-wrapper')).toHaveClass(`w-[${expectedSize}px]`);
    expect(screen.getByTestId('circular-rating-wrapper')).toHaveClass(`h-[${expectedSize}px]`);
  });

  it('should render with correct svg size if "size" prop was provided', () => {
    const expectedSize = 30;
    render(<CircularRating rating={3.5} size={expectedSize} />);

    expect(screen.getByTestId('circular-rating-svg')).toHaveAttribute(
      'width',
      expectedSize.toString()
    );
    expect(screen.getByTestId('circular-rating-svg')).toHaveAttribute(
      'height',
      expectedSize.toString()
    );
  });

  it('should render with correct track size if "size" prop was provided', () => {
    const expectedSize = 30;
    render(<CircularRating rating={3.5} size={expectedSize} />);

    expect(screen.getByTestId('circular-rating-track')).toHaveAttribute(
      'cx',
      calculateCircleSize(expectedSize).toString()
    );
    expect(screen.getByTestId('circular-rating-track')).toHaveAttribute(
      'cy',
      calculateCircleSize(expectedSize).toString()
    );
  });

  it('should render with correct fill size if "size" prop was provided', () => {
    const expectedSize = 30;
    render(<CircularRating rating={3.5} size={expectedSize} />);

    expect(screen.getByTestId('circular-rating-fill')).toHaveAttribute(
      'cx',
      calculateCircleSize(expectedSize).toString()
    );
    expect(screen.getByTestId('circular-rating-fill')).toHaveAttribute(
      'cy',
      calculateCircleSize(expectedSize).toString()
    );
  });

  it('should render with provided "className"', () => {
    const expectedClassName = 'testClassName';
    render(<CircularRating rating={3.5} className={expectedClassName} />);

    expect(screen.getByTestId('circular-rating-wrapper')).toHaveClass(expectedClassName);
  });
});
