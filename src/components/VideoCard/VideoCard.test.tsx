import { render, screen } from '@testing-library/react';

import mockVideos from '@/__mocks__/data/mockVideos';
import VideoCard from '@/components/VideoCard/VideoCard';

describe('VideoCard', () => {
  it('should render <VideoLink /> component', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnail={expectedVideo.thumbnail}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );
    expect(screen.getByRole('link', { name: `watch ${expectedVideo.title}` })).toBeInTheDocument();
  });

  it('should render video thumbnail', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnail={expectedVideo.thumbnail}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render video thumbnail with correct "src" attribute', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnail={expectedVideo.thumbnail}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );

    const thumbnail: HTMLImageElement = screen.getByRole('img');

    const expectedThumbnailImage = expectedVideo.thumbnail.path.split('/').slice(-1)[0];
    expect(thumbnail.src).toContain(expectedThumbnailImage);
  });

  it('should render a link to the show page', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnail={expectedVideo.thumbnail}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );

    expect(screen.getByRole('link', { name: expectedVideo.showTitle })).toBeInTheDocument();
  });

  it('should render a link to the show page with correct "href" attribute', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnail={expectedVideo.thumbnail}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );

    expect(screen.getByRole('link', { name: expectedVideo.showTitle })).toHaveAttribute(
      'href',
      `${expectedVideo.showType}/${expectedVideo.showId}`
    );
  });

  it('should render a video title', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnail={expectedVideo.thumbnail}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );

    expect(screen.getByText(expectedVideo.title)).toBeInTheDocument();
  });
});
