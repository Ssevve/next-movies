import 'server-only';

import { formatDate } from '@/lib/utils';
import tmdbAPI from '@/services/tmdb/api/client';
import transformImages from '@/services/tmdb/helpers/transformImages/transformImages';
import transformShows from '@/services/tmdb/helpers/transformShows/transformShows';
import transformVideos from '@/services/tmdb/helpers/transformVideos/transformVideos';
import TMDBDetailedMovie from '@/services/tmdb/types/TMDBDetailedMovie';
import CastPerson from '@/types/CastPerson';
import DetailedMovie from '@/types/DetailedMovie';
import Images from '@/types/Images';
import Show from '@/types/Show';
import SocialHandles from '@/types/SocialHandles';

import TMDBReleaseDates from '../../types/TMDBReleaseDates';

function getMovieRating(releaseDates: TMDBReleaseDates) {
  return releaseDates.results.find((release) => release.iso_3166_1 === 'US')?.release_dates[0]
    .certification;
}

export default async function getDetailedMovie(movieId: number): Promise<DetailedMovie> {
  const appendToResponseString = [
    'videos',
    'images',
    'keywords',
    'external_ids',
    'recommendations',
    'credits',
    'release_dates',
  ].join(',');

  const res = await tmdbAPI(`/movie/${movieId}?append_to_response=${appendToResponseString}`);
  const {
    backdrop_path,
    budget,
    credits,
    external_ids,
    genres,
    homepage,
    id,
    images,
    keywords,
    original_language,
    original_title,
    overview,
    poster_path,
    recommendations,
    release_date,
    release_dates,
    revenue,
    runtime,
    status,
    tagline,
    title,
    videos,
    vote_average,
    vote_count,
  }: TMDBDetailedMovie = await res.json();

  const transformedVideos = transformVideos({
    showId: id,
    showTitle: title,
    showType: 'movie',
    videos: videos.results,
  });

  const transformedRecommendations: Show[] = transformShows(recommendations.results);

  const transformedImages: Images = {
    backdrops: transformImages(images.backdrops),
    posters: transformImages(images.posters),
  };

  const socialHandles: SocialHandles = {
    facebook: external_ids['facebook_id'],
    instagram: external_ids['instagram_id'],
    twitter: external_ids['twitter_id'],
  };

  const transformedCast = credits.cast.map(
    ({ character, id, name, profile_path }): CastPerson => ({
      character,
      id,
      imagePath: profile_path,
      name,
    })
  );

  return {
    backdropPath: backdrop_path,
    budget,
    cast: transformedCast,
    genres,
    homepage,
    id,
    images: transformedImages,
    keywords,
    originalLanguage: original_language,
    originalTitle: original_title,
    overview,
    posterPath: poster_path,
    rating: getMovieRating(release_dates),
    recommendations: transformedRecommendations,
    releaseDate: formatDate(release_date) || 'N/A',
    revenue,
    runtime,
    showType: 'movie',
    socialHandles,
    status,
    tagline,
    title,
    userScore: vote_average,
    userScoreCount: vote_count,
    videos: transformedVideos,
  };
}
