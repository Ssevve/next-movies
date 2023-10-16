import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBDetailedMovie from '@/services/TMDB/types/TMDBDetailedMovie';
import TMDBReleaseDates from '@/services/TMDB/types/TMDBReleaseDates';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import transformImages from '@/services/TMDB/utils/transformImages/transformImages';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import DetailedMovie from '@/types/DetailedMovie';

function getUSMovieRating(releaseDates: TMDBReleaseDates) {
  return releaseDates.results.find(({ iso_3166_1 }) => iso_3166_1 === 'US')?.release_dates[0]
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
    backdrop: { path: backdrop_path },
    budget,
    cast: credits.cast.map(({ character, id, name, profile_path }) => ({
      character,
      id,
      imagePath: profile_path || '',
      name,
    })),
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
    overview,
    poster: {
      height: TMDBImageSizes.posters.detailedShow.height,
      path: poster_path,
      width: TMDBImageSizes.posters.detailedShow.width,
    },
    rating: getUSMovieRating(release_dates) || '',
    recommendations: transformShows(recommendations.results),
    releaseDate: release_date ? formatDate(release_date) : 'N/A',
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
