import { render, screen } from '@testing-library/react';

import TrendingShows from '@/app/_components/TrendingShows/TrendingShows';

describe('TrendingShows', () => {
  it('should render <TabsSection /> component with correct title', async () => {
    render(await TrendingShows());
    expect(screen.getByRole('heading', { name: 'Trending' })).toBeInTheDocument();
  });
});
