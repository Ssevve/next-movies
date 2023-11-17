import { render, screen, waitFor } from '@testing-library/react';

import TopRatedTvShowsPage from '@/app/tv/top-rated/page';

describe('TopRatedTvShowsPage', () => {
  it('should render <PaginatedShows /> component', async () => {
    render(await TopRatedTvShowsPage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('show-card');
    });
  });
});
