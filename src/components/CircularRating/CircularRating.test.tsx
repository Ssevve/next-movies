import { render, screen } from '@testing-library/react';

import CircularRating from '@/components/CircularRating/CircularRating';

describe('CircularRating', () => {
  it('should render a correct rating text', () => {
    const expectedRating = 3.5;
    render(<CircularRating rating={3.5} />);
    expect(screen.getByText(expectedRating)).toBeInTheDocument();
  });
});
