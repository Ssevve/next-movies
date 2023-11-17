import { render, screen, waitFor } from '@testing-library/react';

import AiringTodayTvShowsPage from '@/app/tv/airing-today/page';

describe('AiringTodayTvShowsPage', () => {
  it('should render <PaginatedShows /> component', async () => {
    render(await AiringTodayTvShowsPage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('show-card');
    });
  });
});
