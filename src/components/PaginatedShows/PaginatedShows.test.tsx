import { render, screen } from '@testing-library/react';

import mockShows from '@/__mocks__/data/mockShows';
import PaginatedShows from '@/components/PaginatedShows/PaginatedShows';

describe('PaginatedShows', () => {
  it('should render correct amount per page with "showsPerPage" provided', () => {
    const expectedShowCount = 2;
    render(
      <PaginatedShows
        showsPerPage={expectedShowCount}
        shows={mockShows}
        totalShows={mockShows.length}
      />
    );
    expect(screen.getAllByTestId('show-card')).toHaveLength(expectedShowCount);
  });

  it('should render all of shows  if totalShows length is less than showsPerPage', () => {
    render(<PaginatedShows shows={mockShows} totalShows={mockShows.length} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(mockShows.length);
  });

  it('should not render <Pagination /> component if totalShows length is less than showsPerPage', () => {
    render(<PaginatedShows showsPerPage={20} shows={mockShows} totalShows={mockShows.length} />);
    expect(screen.queryByRole('button', { name: /previous page/i })).not.toBeInTheDocument();
  });

  it('should render <Pagination /> component if totalShows length is greater than showsPerPage', () => {
    render(<PaginatedShows showsPerPage={1} shows={mockShows} totalShows={mockShows.length} />);
    expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument();
  });
});
