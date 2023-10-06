import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserScore, { calculateCircleSize } from '@/components/UserScore/UserScore';

describe('UserScore', () => {
  it('should render a correct userScore text', () => {
    const expectedUserScore = 3.5;
    render(<UserScore userScore={3.54} />);
    expect(screen.getByText(expectedUserScore)).toBeInTheDocument();
  });

  it('should render with a correct text size if "textSize" prop was provided', () => {
    const expectedTextSize = 'sm';
    const expectedUserScore = 3.5;
    render(<UserScore userScore={expectedUserScore} textSize={expectedTextSize} />);
    expect(screen.getByText(expectedUserScore)).toHaveClass(`text-${expectedTextSize}`);
  });

  it('should render with correct track stroke width if "strokeWidth" prop was provided', () => {
    const expectedStrokeWidth = 2;
    render(<UserScore userScore={3.5} strokeWidth={expectedStrokeWidth} />);
    expect(screen.getByTestId('user-score-track')).toHaveAttribute(
      'stroke-width',
      expectedStrokeWidth.toString()
    );
  });

  it('should render with correct fill stroke width if "strokeWidth" prop was provided', () => {
    const expectedStrokeWidth = 2;
    render(<UserScore userScore={3.5} strokeWidth={expectedStrokeWidth} />);
    expect(screen.getByTestId('user-score-fill')).toHaveAttribute(
      'stroke-width',
      expectedStrokeWidth.toString()
    );
  });

  it('should render with correct wrapper classes if "size" prop was provided', () => {
    const expectedSize = 30;
    render(<UserScore userScore={3.5} size={expectedSize} />);
    expect(screen.getByTestId('user-score-wrapper')).toHaveClass(`w-[${expectedSize}px]`);
    expect(screen.getByTestId('user-score-wrapper')).toHaveClass(`h-[${expectedSize}px]`);
  });

  it('should render with correct svg size if "size" prop was provided', () => {
    const expectedSize = 30;
    render(<UserScore userScore={3.5} size={expectedSize} />);

    expect(screen.getByTestId('user-score-svg')).toHaveAttribute('width', expectedSize.toString());
    expect(screen.getByTestId('user-score-svg')).toHaveAttribute('height', expectedSize.toString());
  });

  it('should render with correct track size if "size" prop was provided', () => {
    const expectedSize = 30;
    render(<UserScore userScore={3.5} size={expectedSize} />);

    expect(screen.getByTestId('user-score-track')).toHaveAttribute(
      'cx',
      calculateCircleSize(expectedSize).toString()
    );
    expect(screen.getByTestId('user-score-track')).toHaveAttribute(
      'cy',
      calculateCircleSize(expectedSize).toString()
    );
  });

  it('should render with correct fill size if "size" prop was provided', () => {
    const expectedSize = 30;
    render(<UserScore userScore={3.5} size={expectedSize} />);

    expect(screen.getByTestId('user-score-fill')).toHaveAttribute(
      'cx',
      calculateCircleSize(expectedSize).toString()
    );
    expect(screen.getByTestId('user-score-fill')).toHaveAttribute(
      'cy',
      calculateCircleSize(expectedSize).toString()
    );
  });

  it('should render with provided "className"', () => {
    const expectedClassName = 'testClassName';
    render(<UserScore userScore={3.5} className={expectedClassName} />);

    expect(screen.getByTestId('user-score-wrapper')).toHaveClass(expectedClassName);
  });

  it('should render a tooltip with "userScoreCount" on hover if "withTooltip" prop is true', async () => {
    const user = await userEvent.setup();
    const expectedCount = 367;
    const expectedTooltip = `${expectedCount} votes`;
    render(<UserScore userScore={3.5} withTooltip userScoreCount={expectedCount} />);

    await user.hover(screen.getByTestId('user-score-wrapper'));

    await waitFor(() => {
      // Shadcn tooltip content renders twice for some reason
      expect(screen.getAllByText(expectedTooltip)).toHaveLength(2);
    });
  });
});
