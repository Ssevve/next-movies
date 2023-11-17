import { render, screen, waitFor } from '@testing-library/react';

import mockTMDBDetailedTvShows from '@/__mocks__/data/mockTMDBDetailedTvShows';
import DetailedTvShowPage, { DetailedTvShowPageProps } from '@/app/tv/[id]/page';

const testTvShow = mockTMDBDetailedTvShows.withOriginalLanguage;

const renderDetailedTvShowPage = async (props?: Partial<DetailedTvShowPageProps>) => {
  return render(await DetailedTvShowPage({ params: { id: '1' }, searchParams: {}, ...props }));
};

describe('DetailedTvShowPage', () => {
  it('should render <ShowPageHeader /> component', async () => {
    const expectedText = testTvShow.overview!;
    renderDetailedTvShowPage();
    await waitFor(() => {
      screen.getByText(expectedText);
    });
  });

  it('should render <TvShowFacts /> component', async () => {
    renderDetailedTvShowPage();
    await waitFor(() => {
      screen.getByText(testTvShow.status);
    });
  });

  it('should render <ShowCast /> component', async () => {
    const expectedPerson = testTvShow.aggregate_credits.cast[0];
    renderDetailedTvShowPage();
    await waitFor(() => {
      screen.getByText(expectedPerson.name);
    });
  });

  it('should render <ShowMedia /> component', async () => {
    const expectedVideo = testTvShow.videos.results[0];
    renderDetailedTvShowPage();
    await waitFor(() => {
      screen.getByText(expectedVideo.name);
    });
  });

  it('should render <Recommendations /> component', async () => {
    const expectedRecommendation = testTvShow.recommendations.results[0];
    renderDetailedTvShowPage();
    await waitFor(() => {
      screen.getByText(expectedRecommendation.name);
    });
  });

  it('should not render <YoutubeIframeModal /> component if "play" search param is not provided', async () => {
    renderDetailedTvShowPage({ searchParams: {} });
    await waitFor(() => {
      expect(screen.queryByTestId('youtube-video-thumbnail')).not.toBeInTheDocument();
    });
  });

  it('should render <YoutubeIframeModal /> component if "play" search param is present', async () => {
    renderDetailedTvShowPage({ searchParams: { play: 'test' } });
    await waitFor(() => {
      screen.getByTestId('youtube-video-thumbnail');
    });
  });
});
