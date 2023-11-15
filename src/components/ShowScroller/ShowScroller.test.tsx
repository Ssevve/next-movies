import { render, screen } from '@testing-library/react';

import mockShows from '@/__mocks__/data/mockShows';
import ShowScroller from '@/components/ShowScroller/ShowScroller';

describe('ShowScroller', () => {
  it('should render correct amount of shows', () => {
    render(<ShowScroller shows={mockShows} />);
    expect(screen.getAllByTestId('show-card')).toHaveLength(mockShows.length);
  });

  it('should render "No shows to display" by default if shows array is empty', () => {
    render(<ShowScroller shows={[]} />);
    expect(screen.getByText('No shows to display')).toBeInTheDocument();
  });

  it('should render provided emptyMessage if shows array is empty', () => {
    render(<ShowScroller shows={[]} emptyMessage="Test empty message" />);
    expect(screen.getByText('Test empty message')).toBeInTheDocument();
  });
});
