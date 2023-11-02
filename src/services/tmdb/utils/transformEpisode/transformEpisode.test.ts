import TMDBEpisode from '@/services/TMDB/types/TMDBEpisode';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import transformEpisode from '@/services/TMDB/utils/transformEpisode/transformEpisode';
import Episode from '@/types/Episode';

const mockEpisode: TMDBEpisode = {
  air_date: '2013-09-29',
  episode_number: 16,
  episode_type: 'finale',
  id: 62161,
  name: 'Felina',
  season_number: 5,
  show_id: 1396,
};

describe('transformEpisode', () => {
  it('should return null if episode is null', () => {
    expect(transformEpisode(null)).toEqual(null);
  });

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

    const result = transformEpisode(mockEpisode);
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

    const result = transformEpisode(testEpisode);
    expect(result).toStrictEqual(expectedEpisode);
  });
});
