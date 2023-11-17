import { render, screen, waitFor } from '@testing-library/react';

import MoviesPage from '@/app/movie/page';

describe('MoviesPage', () => {
  it('should render <PaginatedShows /> component', async () => {
    render(await MoviesPage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('show-card');
    });
  });
});
