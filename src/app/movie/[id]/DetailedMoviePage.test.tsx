import { render, screen, waitFor } from '@testing-library/react';

import mockTMDBDetailedMovies from '@/__mocks__/data/mockTMDBDetailedMovies';
import DetailedMoviePage, { DetailedMoviePageProps } from '@/app/movie/[id]/page';

const testMovie = mockTMDBDetailedMovies.withOriginalLanguage;

const renderDetailedMoviePage = async (props?: Partial<DetailedMoviePageProps>) => {
  return render(await DetailedMoviePage({ params: { id: '1' }, searchParams: {}, ...props }));
};

describe('DetailedMoviePage', () => {
  it('should render <ShowPageHeader /> component', async () => {
    const expectedText = testMovie.overview!;
    renderDetailedMoviePage();
    await waitFor(() => {
      screen.getByText(expectedText);
    });
  });

  it('should render <MovieFacts /> component', async () => {
    renderDetailedMoviePage();
    await waitFor(() => {
      screen.getByText(testMovie.status);
    });
  });

  it('should render <ShowCast /> component', async () => {
    const expectedPerson = testMovie.credits.cast[0];
    renderDetailedMoviePage();
    await waitFor(() => {
      screen.getByText(expectedPerson.name);
    });
  });

  it('should render <ShowMedia /> component', async () => {
    const expectedVideo = testMovie.videos.results[0];
    renderDetailedMoviePage();
    await waitFor(() => {
      screen.getByText(expectedVideo.name);
    });
  });

  it('should render <Recommendations /> component', async () => {
    const expectedRecommendation = testMovie.recommendations.results[0];
    renderDetailedMoviePage();
    await waitFor(() => {
      screen.getByText(expectedRecommendation.title);
    });
  });

  it('should not render <YoutubeIframeModal /> component if "play" search param is not provided', async () => {
    renderDetailedMoviePage({ searchParams: {} });
    await waitFor(() => {
      expect(screen.queryByTestId('youtube-video-thumbnail')).not.toBeInTheDocument();
    });
  });

  it('should render <YoutubeIframeModal /> component if "play" search param is present', async () => {
    renderDetailedMoviePage({ searchParams: { play: 'test' } });
    await waitFor(() => {
      screen.getByTestId('youtube-video-thumbnail');
    });
  });
});
