import { TMDBEpisode } from '@/services/TMDB/types/TMDBDetailedTvShow';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import transformDetailedTvShowEpisode from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformDetailedTvShowEpisode/transformDetailedTvShowEpisode';
import { Episode } from '@/types/DetailedTvShow';

const mockEpisode: TMDBEpisode = {
  air_date: '2013-09-29',
  episode_number: 16,
  episode_type: 'finale',
  id: 62161,
  name: 'Felina',
  season_number: 5,
  show_id: 1396,
};

describe('transformDetailedTvShowEpisode', () => {
  it('should return correctly transformed episode', () => {
    const expectedEpisode: Episode = {
      airDate: formatDate(mockEpisode.air_date!),
      episodeNumber: mockEpisode.episode_number,
      episodeType: mockEpisode.episode_type,
      id: mockEpisode.id,
      seasonNumber: mockEpisode.season_number,
      showId: mockEpisode.show_id,
      title: mockEpisode.name,
    };

    const result = transformDetailedTvShowEpisode(mockEpisode);
    expect(result).toStrictEqual(expectedEpisode);
  });

  it('should return correctly transformed episode without an air_date', () => {
    const testEpisode = { ...mockEpisode, air_date: '' };
    const expectedEpisode: Episode = {
      airDate: 'N/A',
      episodeNumber: mockEpisode.episode_number,
      episodeType: mockEpisode.episode_type,
      id: mockEpisode.id,
      seasonNumber: mockEpisode.season_number,
      showId: mockEpisode.show_id,
      title: mockEpisode.name,
    };

    const result = transformDetailedTvShowEpisode(testEpisode);
    expect(result).toStrictEqual(expectedEpisode);
  });
});
