import { render, screen } from '@testing-library/react';

import RecentEpisode, {
  RecentEpisodeProps,
} from '@/app/tv/[id]/_components/RecentSeason/components/RecentEpisode/RecentEpisode';

const episode: RecentEpisodeProps = {
  airDate: 'Jan 10, 2021',
  episodeNumber: 4,
  episodeType: 'standard',
  seasonNumber: 2,
  showEnded: false,
  title: 'Test episode',
};

const renderRecentEpisode = (props?: Partial<RecentEpisodeProps>) => {
  return render(<RecentEpisode {...episode} {...props} />);
};

describe('RecentEpisode', () => {
  it('should render metadata', () => {
    renderRecentEpisode();
    expect(screen.getByText(episode.airDate!, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(`${episode.episodeNumber}`, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(episode.seasonNumber, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(episode.title, { exact: false })).toBeInTheDocument();
  });

  it('should render correct heading if show has not ended', () => {
    renderRecentEpisode();
    expect(screen.getByRole('heading', { name: /next episode/i })).toBeInTheDocument();
  });

  it('should render correct heading if show has ended', () => {
    renderRecentEpisode({ showEnded: true });
    expect(screen.getByRole('heading', { name: /last episode/i })).toBeInTheDocument();
  });

  it('should render "finale" if episode is a season finale', () => {
    renderRecentEpisode({ episodeType: 'finale' });
    expect(screen.getByText(/finale/i)).toBeInTheDocument();
  });

  it('should not render "finale" if episode is not a season finale', () => {
    renderRecentEpisode();
    expect(screen.queryByText(/finale/i)).not.toBeInTheDocument();
  });
});
