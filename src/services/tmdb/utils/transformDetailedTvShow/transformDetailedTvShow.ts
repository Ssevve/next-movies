import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBContentRatings from '@/services/TMDB/types/TMDBContentRatings';
import TMDBDetailedTvShow from '@/services/TMDB/types/TMDBDetailedTvShow';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import transformImages from '@/services/TMDB/utils/transformImages/transformImages';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import DetailedTvShow from '@/types/DetailedTvShow';

function getUSTvShowRating(contentRatings: TMDBContentRatings) {
  return contentRatings.results.find(({ iso_3166_1 }) => iso_3166_1 === 'US')?.rating;
}

export default function transformDetailedTvShow({
  backdrop_path,
  aggregate_credits,
  external_ids,
  genres,
  homepage,
  id,
  images,
  keywords,
  original_language,
  overview,
  poster_path,
  recommendations,
  status,
  tagline,
  videos,
  vote_average,
  vote_count,
  content_ratings,
  name,
  networks,
  seasons,
  type,
  first_air_date,
  last_episode_to_air,
  next_episode_to_air,
  created_by,
}: TMDBDetailedTvShow): DetailedTvShow {
  return {
    backdrop: { path: backdrop_path },
    cast: aggregate_credits.cast.map(({ roles, id, name, profile_path, total_episode_count }) => ({
      characters: roles.map(({ character }) => character),
      id,
      imagePath: profile_path || '',
      name,
      totalEpisodeCount: total_episode_count,
    })),
    createdBy: created_by.map(({ id, name }) => ({ id, name })),
    genres,
    homepage,
    id,
    images: {
      backdrops: transformImages(images.backdrops),
      posters: transformImages(images.posters),
    },
    keywords: keywords.results,
    lastEpisode: last_episode_to_air
      ? {
          airDate: last_episode_to_air?.air_date ? formatDate(last_episode_to_air.air_date) : '',
          episodeNumber: last_episode_to_air.episode_number,
          episodeType: last_episode_to_air.episode_type,
          id: last_episode_to_air.id,
          seasonNumber: last_episode_to_air.season_number,
          showId: last_episode_to_air.show_id,
          title: last_episode_to_air.name,
        }
      : null,
    networks: networks.map(({ id, logo_path, name }) => ({ id, logoPath: logo_path, name })),
    nextEpisode: next_episode_to_air
      ? {
          airDate: next_episode_to_air?.air_date ? formatDate(next_episode_to_air.air_date) : '',
          episodeNumber: next_episode_to_air.episode_number,
          episodeType: next_episode_to_air.episode_type,
          id: next_episode_to_air.id,
          seasonNumber: next_episode_to_air.season_number,
          showId: next_episode_to_air.show_id,
          title: next_episode_to_air.name,
        }
      : null,
    originalLanguage: original_language,
    overview,
    poster: {
      height: TMDBImageSizes.posters.detailedShow.height,
      path: poster_path,
      width: TMDBImageSizes.posters.detailedShow.width,
    },
    rating: getUSTvShowRating(content_ratings) || '',
    recommendations: transformShows(recommendations.results),
    releaseDate: first_air_date ? formatDate(first_air_date) : 'N/A',
    seasons: seasons.map(
      ({
        air_date,
        episode_count,
        id,
        name,
        overview,
        season_number,
        vote_average,
        poster_path,
      }) => ({
        airDate: formatDate(air_date),
        episodeCount: episode_count,
        id,
        name,
        overview,
        poster: {
          height: TMDBImageSizes.posters.season.height,
          path: poster_path || '',
          width: TMDBImageSizes.posters.season.width,
        },
        seasonNumber: season_number,
        userScore: vote_average,
      })
    ),
    showType: 'tv',
    socialHandles: {
      facebook: external_ids['facebook_id'],
      instagram: external_ids['instagram_id'],
      twitter: external_ids['twitter_id'],
    },
    status,
    tagline,
    title: name,
    type,
    userScore: vote_average,
    userScoreCount: vote_count,
    videos: transformVideos({
      showId: id,
      showTitle: name,
      showType: 'tv',
      videos: videos.results,
    }),
  };
}
