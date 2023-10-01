import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import YoutubeIframeModal from '@/components/YoutubeIframeModal/YoutubeIframeModal';

jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn(),
  };
});

describe('YoutubeIframeModal', () => {
  it('should render a video youtube thumbnail', () => {
    render(<YoutubeIframeModal videoKey="test" />);
    expect(screen.getByTestId('youtube-video-thumbnail')).toBeInTheDocument();
  });

  it('should render a "play" button', () => {
    render(<YoutubeIframeModal videoKey="test" />);
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument();
  });

  it('should render a YouTube play button image', () => {
    render(<YoutubeIframeModal videoKey="test" />);
    expect(screen.getByRole('img', { name: 'YouTube play button' })).toBeInTheDocument();
  });

  it('should render a YouTube play button image with correct image name', () => {
    render(<YoutubeIframeModal videoKey="test" />);

    const playButtonImage: HTMLImageElement = screen.getByRole('img', {
      name: 'YouTube play button',
    });

    expect(playButtonImage.src).toContain('yt-play-button.png');
  });

  it('should render a YouTube iframe on "play" button click', async () => {
    const user = await userEvent.setup();
    render(<YoutubeIframeModal videoKey="test" />);

    expect(screen.queryByTestId('youtube-iframe')).not.toBeInTheDocument();

    user.click(screen.getByRole('button', { name: 'Play video' }));

    await waitFor(() => {
      expect(screen.getByTestId('youtube-iframe')).toBeInTheDocument();
    });
  });
});
