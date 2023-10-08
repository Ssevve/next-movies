import { render, screen, waitFor } from '@testing-library/react';

import UpcomingMovies from '@/app/_components/UpcomingMovies/UpcomingMovies';

describe('UpcomingMovies', () => {
  it('should render correct title', async () => {
    render(await UpcomingMovies());

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Upcoming Movies' })).toBeInTheDocument();
    });
  });

  it('should render <UpcomingMoviesTrailers /> component', async () => {
    render(await UpcomingMovies());

    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });
});
