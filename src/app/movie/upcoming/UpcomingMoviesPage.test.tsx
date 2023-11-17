import { render, screen, waitFor } from '@testing-library/react';

import UpcomingMoviesPage from '@/app/movie/upcoming/page';

describe('UpcomingMoviesPage', () => {
  it('should render <PaginatedShows /> component', async () => {
    render(await UpcomingMoviesPage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('show-card');
    });
  });
});
