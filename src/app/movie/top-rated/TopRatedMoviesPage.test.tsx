import { render, screen, waitFor } from '@testing-library/react';

import TopRatedMoviesPage from '@/app/movie/now-playing/page';

describe('TopRatedMoviesPage', () => {
  it('should render <PaginatedShows /> component', async () => {
    render(await TopRatedMoviesPage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('show-card');
    });
  });
});
