import TMDBDetailedMovie from '@/services/tmdb/types/TMDBDetailedMovie';
import TMDBReleaseDates from '@/services/tmdb/types/TMDBReleaseDates';
import formatDate from '@/services/tmdb/utils/formatDate/formatDate';
import transformImages from '@/services/tmdb/utils/transformImages/transformImages';
import transformMovieCast from '@/services/tmdb/utils/transformMovieCast/transformMovieCast';
import transformShows from '@/services/tmdb/utils/transformShows/transformShows';
import transformVideos from '@/services/tmdb/utils/transformVideos/transformVideos';
import DetailedMovie from '@/types/DetailedMovie';

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
    createdBy: credits.crew
      .filter((person) => person.job === 'Director')
      .map(({ name, id }) => ({ id, name })),
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
    rating: getMovieRating(release_dates) || '',
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
