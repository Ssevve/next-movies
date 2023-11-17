import { render, screen, waitFor } from '@testing-library/react';

import NowPlayingMoviesPage from '@/app/movie/now-playing/page';

describe('NowPlayingMoviesPage', () => {
  it('should render <PaginatedShows /> component', async () => {
    render(await NowPlayingMoviesPage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('show-card');
    });
  });
});
