import TMDBEpisode from '@/services/TMDB/types/TMDBEpisode';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import Episode from '@/types/Episode';

// TODO: tests
export default function transformEpisode(episode: TMDBEpisode | null): Episode | null {
  if (!episode) return null;
  return {
    airDate: episode.air_date ? formatDate(episode.air_date) : '',
    episodeNumber: episode.episode_number,
    episodeType: episode.episode_type,
    id: episode.id,
    name: episode.name,
    seasonNumber: episode.season_number,
    showId: episode.show_id,
  };
}
