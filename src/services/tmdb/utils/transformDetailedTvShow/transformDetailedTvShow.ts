import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBContentRatings from '@/services/TMDB/types/TMDBContentRatings';
import TMDBDetailedTvShow from '@/services/TMDB/types/TMDBDetailedTvShow';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import getRecentSeason from '@/services/TMDB/utils/getRecentSeason/getRecentSeason';
import transformEpisode from '@/services/TMDB/utils/transformEpisode/transformEpisode';
import transformImages from '@/services/TMDB/utils/transformImages/transformImages';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import transformTvShowCast from '@/services/TMDB/utils/transformTvShowCast/transformTvShowCast';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import DetailedTvShow from '@/types/DetailedTvShow';

function getUSTvShowRating(contentRatings: TMDBContentRatings) {
  return contentRatings.results.find(({ iso_3166_1 }) => iso_3166_1 === 'US')?.rating;
}

export default function transformDetailedTvShow(tvShow: TMDBDetailedTvShow): DetailedTvShow {
  return {
    backdrop: { path: tvShow.backdrop_path },
    cast: transformTvShowCast(tvShow.aggregate_credits.cast),
    createdBy: tvShow.created_by.map(({ id, name }) => ({ id, name })),
    genres: tvShow.genres,
    homepage: tvShow.homepage,
    id: tvShow.id,
    images: {
      backdrops: transformImages(tvShow.images.backdrops),
      posters: transformImages(tvShow.images.posters),
    },
    keywords: tvShow.keywords.results,
    lastEpisode: transformEpisode(tvShow.last_episode_to_air),
    networks: tvShow.networks.map(({ id, logo_path, name }) => ({ id, logoPath: logo_path, name })),
    nextEpisode: transformEpisode(tvShow.next_episode_to_air),
    originalLanguage: tvShow.original_language,
    overview: tvShow.overview,
    poster: {
      height: TMDBImageSizes.posters.detailedShow.height,
      path: tvShow.poster_path,
      width: TMDBImageSizes.posters.detailedShow.width,
    },
    rating: getUSTvShowRating(tvShow.content_ratings) || '',
    recentSeason: getRecentSeason(tvShow.seasons),
    recommendations: transformShows(tvShow.recommendations.results),
    releaseDate: tvShow.first_air_date ? formatDate(tvShow.first_air_date) : 'N/A',
    showType: 'tv',
    socialHandles: {
      facebook: tvShow.external_ids['facebook_id'],
      instagram: tvShow.external_ids['instagram_id'],
      twitter: tvShow.external_ids['twitter_id'],
    },
    status: tvShow.status,
    tagline: tvShow.tagline,
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
