import { formatDate } from '@/lib/utils';
import DetailedMovie from '@/types/DetailedMovie';

import TMDBDetailedMovie from '../../types/TMDBDetailedMovie';
import TMDBReleaseDates from '../../types/TMDBReleaseDates';
import transformImages from '../transformImages/transformImages';
import transformMovieCast from '../transformMovieCast/transformMovieCast';
import transformShows from '../transformShows/transformShows';
import transformVideos from '../transformVideos/transformVideos';

function getMovieRating(releaseDates: TMDBReleaseDates) {
  return releaseDates.results.find((release) => release.iso_3166_1 === 'US')?.release_dates[0]
    .certification;
}

export default function transformDetailedMovie({
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
}: TMDBDetailedMovie): DetailedMovie {
  return {
    backdropPath: backdrop_path,
    budget,
    cast: transformMovieCast(credits.cast),
    genres,
    homepage,
    id,
    images: {
      backdrops: transformImages(images.backdrops),
      posters: transformImages(images.posters),
    },
    keywords: keywords.keywords,
    originalLanguage: original_language,
    originalTitle: original_title,
    overview,
    posterPath: poster_path,
    rating: getMovieRating(release_dates),
    recommendations: transformShows(recommendations.results),
    releaseDate: formatDate(release_date) || 'N/A',
    revenue,
    runtime,
    showType: 'movie',
    socialHandles: {
      facebook: external_ids['facebook_id'],
      instagram: external_ids['instagram_id'],
      twitter: external_ids['twitter_id'],
    },
    status,
    tagline,
    title,
    userScore: vote_average,
    userScoreCount: vote_count,
    videos: transformVideos({
      showId: id,
      showTitle: title,
      showType: 'movie',
      videos: videos.results,
    }),
  };
}