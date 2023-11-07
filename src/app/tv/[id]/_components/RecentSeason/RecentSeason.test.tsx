import { render, screen } from '@testing-library/react';

import RecentSeason, {
  RecentSeasonProps,
} from '@/app/tv/[id]/_components/RecentSeason/RecentSeason';

const defaultTestProps: RecentSeasonProps = {
  episode: {
    episodeNumber: 4,
    episodeType: 'standard',
    id: 2,
    seasonNumber: 3,
    showId: 555,
    title: 'Test Episode Title',
  },
  season: {
    airDate: 'Jan 10, 2021',
    episodeCount: 3,
    id: 333,
    name: 'Test Season Name',
    overview: 'Test season overview',
    poster: {
      height: 200,
      path: '/testSeasonPath',
      width: 300,
    },
    seasonNumber: 3,
    userScore: 3.3,
  },
  showEnded: false,
};

const renderRecentSeason = (props?: Partial<RecentSeasonProps>) => {
  return render(<RecentSeason {...defaultTestProps} {...props} />);
};

describe('RecentSeason', () => {
  it('should render correct heading if show has ended', () => {
    renderRecentSeason({ showEnded: true });
    expect(screen.getByRole('heading', { name: /last season/i })).toBeInTheDocument();
  });

  it('should render correct heading if show has not ended', () => {
    renderRecentSeason({ showEnded: false });
    expect(screen.getByRole('heading', { name: /current season/i })).toBeInTheDocument();
  });

  it('should render <SeasonPoster /> component', () => {
    renderRecentSeason();
    expect(screen.getByRole('img', { name: defaultTestProps.season!.name })).toBeInTheDocument();
  });

  it('should render <SeasonPoster /> component', () => {
    renderRecentSeason();
    expect(screen.getByRole('img', { name: defaultTestProps.season!.name })).toBeInTheDocument();
  });

  it('should render <SeasonMetadata /> component', () => {
    renderRecentSeason();
    expect(screen.getByText(defaultTestProps.season!.name)).toBeInTheDocument();
  });

  it('should render <RecentEpisode /> component if episode is not null', () => {
    renderRecentSeason({ episode: defaultTestProps.episode });
    expect(screen.getByText(defaultTestProps.episode!.title)).toBeInTheDocument();
  });

  it('should not render <RecentEpisode /> component if episode is null', () => {
    renderRecentSeason({ episode: null });
    expect(screen.queryByText(defaultTestProps.episode!.title)).not.toBeInTheDocument();
  });

  it('should render season overview', () => {
    renderRecentSeason();
    expect(screen.getByText(defaultTestProps.season!.overview)).toBeInTheDocument();
  });

  it('should render "No season data available" if season is null', () => {
    renderRecentSeason({ season: null });
    expect(screen.getByText('No season data available.')).toBeInTheDocument();
  });
});
