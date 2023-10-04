import { render, screen } from '@testing-library/react';

import mockVideos from '@/__mocks__/data/mockVideos';
import VideoLink from '@/components/VideoLink/VideoLink';

describe('VideoLink', () => {
  it('should render a link to open a video player', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoLink title={expectedVideo.title} youtubeKey={expectedVideo.youtubeKey}>
        Test
      </VideoLink>
    );
    expect(screen.getByRole('link', { name: `watch ${expectedVideo.title}` })).toBeInTheDocument();
  });

  it('should render a link to open a video player with correct "play" search param', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoLink title={expectedVideo.title} youtubeKey={expectedVideo.youtubeKey}>
        Test
      </VideoLink>
    );

    const linkElement: HTMLAnchorElement = screen.getByRole('link', {
      name: `watch ${expectedVideo.title}`,
    });

    expect(linkElement.href.endsWith(`play=${expectedVideo.youtubeKey}`)).toBeTruthy();
  });

  it('should render children', () => {
    const expectedVideo = mockVideos[0];
    render(
      <VideoLink title={expectedVideo.title} youtubeKey={expectedVideo.youtubeKey}>
        Test
      </VideoLink>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
