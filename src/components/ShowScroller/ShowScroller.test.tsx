import { render, screen } from '@testing-library/react';

import mockShows from '@/__mocks__/data/mockShows';
import ShowScroller from '@/components/ShowScroller/ShowScroller';

describe('ShowScroller', () => {
  it('should render correct amount of shows', () => {
    render(<ShowScroller shows={mockShows} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(mockShows.length);
  });

  it('should render "No shows to display" if shows array is empty', () => {
    render(<ShowScroller shows={[]} />);
    expect(screen.getByText('No shows to display')).toBeInTheDocument();
  });
});
