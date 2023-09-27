import { render, screen } from '@testing-library/react';

import TrendingShows from './TrendingShows';

describe('TrendingShows', () => {
  it('should render tabs section with correct title', async () => {
    render(await TrendingShows());
    expect(screen.getByRole('heading', { name: 'Trending' })).toBeInTheDocument();
  });
});
