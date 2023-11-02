import TMDBEpisode from '@/services/TMDB/types/TMDBEpisode';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import Episode from '@/types/Episode';

export default function transformEpisode(episode: TMDBEpisode | null): Episode | null {
  if (!episode) return null;
  return {
    airDate: episode.air_date ? formatDate(episode.air_date) : 'N/A',
    episodeNumber: episode.episode_number,
    episodeType: episode.episode_type,
    id: episode.id,
    seasonNumber: episode.season_number,
    showId: episode.show_id,
    title: episode.name,
  };
}
