import { render, screen } from '@testing-library/react';

import mockMovieCast from '@/__mocks__/data/mockMovieCast';
import CastScroller from '@/components/CastScroller/CastScroller';

describe('CastScroller', () => {
  it('should render correct amount of cast people', () => {
    render(<CastScroller cast={mockMovieCast} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(mockMovieCast.length);
  });

  it('should render "No cast to display" if cast array is empty', () => {
    render(<CastScroller cast={[]} />);
    expect(screen.getByText('No cast to display')).toBeInTheDocument();
  });
});
