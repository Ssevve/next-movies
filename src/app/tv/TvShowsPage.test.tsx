import { render, screen, waitFor } from '@testing-library/react';

import TvShowsPage from '@/app/tv/page';

describe('TvShows', () => {
  it('should render <PaginatedShows /> component', async () => {
    render(await TvShowsPage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('show-card');
    });
  });
});
