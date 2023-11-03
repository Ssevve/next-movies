import TMDBTvShowCastPerson from '@/services/TMDB/types/TMDBTvShowCastPerson';
import TvShowCastPerson from '@/types/TvShowCastPerson';

export default function transformTvShowCast(cast: TMDBTvShowCastPerson[]): TvShowCastPerson[] {
  if (!cast || !cast.length || !Array.isArray(cast)) return [];
  return cast.map(({ roles, id, name, profile_path, total_episode_count }) => ({
    characters: roles.map(({ character }) => character),
    id,
    imagePath: profile_path || '',
    name,
    totalEpisodeCount: total_episode_count,
  }));
}
