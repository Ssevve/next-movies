import { render, screen, waitFor } from '@testing-library/react';

import OnTvTvShowsPage from '@/app/tv/airing-today/page';

describe('OnTvTvShowsPage', () => {
  it('should render <PaginatedShows /> component', async () => {
    render(await OnTvTvShowsPage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('show-card');
    });
  });
});
