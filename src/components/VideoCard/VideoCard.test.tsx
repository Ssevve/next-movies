import { render, screen } from '@testing-library/react';

import mockVideos from '@/__mocks__/data/mockVideos';
import VideoCard from '@/components/VideoCard/VideoCard';

describe('VideoCard', () => {
  it('should render a link to open a video player', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnailPath={expectedVideo.thumbnailPath}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );
    expect(screen.getByRole('link', { name: `watch ${expectedVideo.title}` })).toBeInTheDocument();
  });

  it('should render a link to open a video player with correct "play" search param', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnailPath={expectedVideo.thumbnailPath}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );

    const linkElement: HTMLAnchorElement = screen.getByRole('link', {
      name: `watch ${expectedVideo.title}`,
    });

    expect(linkElement.href.endsWith(`play=${expectedVideo.youtubeKey}`)).toBeTruthy();
  });

  it('should render video thumbnail', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnailPath={expectedVideo.thumbnailPath}
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
        thumbnailPath={expectedVideo.thumbnailPath}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );

    const thumbnail: HTMLImageElement = screen.getByRole('img');

    expect(thumbnail.src).toContain(expectedVideo.thumbnailPath.slice(1));
  });

  it('should render a link to the show page', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoCard
        id={expectedVideo.id}
        showId={expectedVideo.showId}
        showTitle={expectedVideo.showTitle}
        showType={expectedVideo.showType}
        thumbnailPath={expectedVideo.thumbnailPath}
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
        thumbnailPath={expectedVideo.thumbnailPath}
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
        thumbnailPath={expectedVideo.thumbnailPath}
        videoTitle={expectedVideo.title}
        youtubeKey={expectedVideo.youtubeKey}
      />
    );

    expect(screen.getByText(expectedVideo.title)).toBeInTheDocument();
  });
});
