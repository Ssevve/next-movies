import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBSeason from '@/services/TMDB/types/TMDBSeason';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import { Season } from '@/types/DetailedTvShow';

export default function getRecentSeason(seasons: TMDBSeason[]): Season {
  const recentSeason = seasons.slice(-1)[0];
  return {
    airDate: recentSeason.air_date ? formatDate(recentSeason.air_date) : 'N/A',
    episodeCount: recentSeason.episode_count,
    id: recentSeason.id,
    name: recentSeason.name,
    overview: recentSeason.overview || 'Overview not available.',
    poster: {
      height: TMDBImageSizes.posters.season.height,
      path: recentSeason.poster_path || '',
      width: TMDBImageSizes.posters.season.width,
    },
    seasonNumber: recentSeason.season_number,
    userScore: recentSeason.vote_average,
  };
}
