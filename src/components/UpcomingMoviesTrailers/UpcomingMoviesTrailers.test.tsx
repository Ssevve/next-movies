import { render, screen } from '@testing-library/react';

import mockVideos from '@/__mocks__/data/mockVideos';
import UpcomingMoviesTrailers from '@/components/UpcomingMoviesTrailers/UpcomingMoviesTrailers';

describe('UpcomingMoviesTrailers', () => {
  it('should render <VideoScroller /> component', async () => {
    render(<UpcomingMoviesTrailers trailers={mockVideos} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render correct amount of trailers', async () => {
    render(<UpcomingMoviesTrailers trailers={mockVideos} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(mockVideos.length);
  });

  it('should render "No upcoming movies to display" message if "trailers" array is empty', async () => {
    render(<UpcomingMoviesTrailers trailers={[]} />);

    expect(screen.getByText('No upcoming movies to display')).toBeInTheDocument();
  });
});
