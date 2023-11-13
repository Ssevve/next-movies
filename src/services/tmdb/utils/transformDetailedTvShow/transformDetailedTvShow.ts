import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBDetailedTvShow from '@/services/TMDB/types/TMDBDetailedTvShow';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import getRecentSeason from '@/services/TMDB/utils/transformDetailedTvShow/utils/getRecentSeason/getRecentSeason';
import getUSTvShowRating from '@/services/TMDB/utils/transformDetailedTvShow/utils/getUSTvShowRating/getUSTvShowRating';
import transformDetailedTvShowEpisode from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformDetailedTvShowEpisode/transformDetailedTvShowEpisode';
import transformTvShowCast from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformTvShowCast/transformTvShowCast';
import transformTvShowCreatedBy from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformTvShowCreatedBy/transformTvShowCreatedBy';
import transformTvShowNetworks from '@/services/TMDB/utils/transformDetailedTvShow/utils/transformTvShowNetworks/transformTvShowNetworks';
import transformExternalIds from '@/services/TMDB/utils/transformExternalIds/transformExternalIds';
import transformImages from '@/services/TMDB/utils/transformImages/transformImages';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import DetailedTvShow from '@/types/DetailedTvShow';

export default function transformDetailedTvShow(tvShow: TMDBDetailedTvShow): DetailedTvShow {
  return {
    backdrop: { path: tvShow.backdrop_path || '' },
    cast: transformTvShowCast(tvShow.aggregate_credits.cast),
    createdBy: transformTvShowCreatedBy(tvShow.created_by),
    genres: tvShow.genres,
    homepage: tvShow.homepage,
    id: tvShow.id,
    images: {
      backdrops: transformImages(tvShow.images.backdrops),
      posters: transformImages(tvShow.images.posters),
    },
    keywords: tvShow.keywords.results,
    lastEpisode: tvShow.last_episode_to_air
      ? transformDetailedTvShowEpisode(tvShow.last_episode_to_air)
      : null,
    networks: transformTvShowNetworks(tvShow.networks),
    nextEpisode: tvShow.next_episode_to_air
      ? transformDetailedTvShowEpisode(tvShow.next_episode_to_air)
      : null,
    originalLanguage: tvShow.original_language,
    overview: tvShow.overview || 'Overview not available.',
    poster: {
      height: TMDBImageSizes.posters.detailedShow.height,
      path: tvShow.poster_path || '',
      width: TMDBImageSizes.posters.detailedShow.width,
    },
    rating: getUSTvShowRating(tvShow.content_ratings) || null,
    recentSeason: tvShow.seasons.length ? getRecentSeason(tvShow.seasons) : null,
    recommendations: transformShows(tvShow.recommendations.results),
    releaseDate: tvShow.first_air_date ? formatDate(tvShow.first_air_date) : 'N/A',
    showType: 'tv',
    socialHandles: transformExternalIds(tvShow.external_ids),
    status: tvShow.status,
    tagline: tvShow.tagline || null,
    title: tvShow.name,
    type: tvShow.type,
    userScore: tvShow.vote_average,
    userScoreCount: tvShow.vote_count,
    videos: transformVideos({
      showId: tvShow.id,
      showTitle: tvShow.name,
      showType: 'tv',
      videos: tvShow.videos.results,
    }),
  };
}
