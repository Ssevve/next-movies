import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBDetailedMovie from '@/services/TMDB/types/TMDBDetailedMovie';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import getUSMovieRating from '@/services/TMDB/utils/transformDetailedMovie/utils/getUSMovieRating/getUSMovieRating';
import transformMovieCast from '@/services/TMDB/utils/transformDetailedMovie/utils/transformMovieCast/transformMovieCast';
import transformMovieCreatedBy from '@/services/TMDB/utils/transformDetailedMovie/utils/transformMovieCreatedBy/transformMovieCreatedBy';
import transformExternalIds from '@/services/TMDB/utils/transformExternalIds/transformExternalIds';
import transformImages from '@/services/TMDB/utils/transformImages/transformImages';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import DetailedMovie from '@/types/DetailedMovie';

export default function transformDetailedMovie(movie: TMDBDetailedMovie): DetailedMovie {
  return {
    backdrop: { path: movie.backdrop_path },
    budget: movie.budget,
    cast: transformMovieCast(movie.credits.cast),
    createdBy: transformMovieCreatedBy(movie.credits.crew),
    genres: movie.genres,
    homepage: movie.homepage,
    id: movie.id,
    images: {
      backdrops: transformImages(movie.images.backdrops),
      posters: transformImages(movie.images.posters),
    },
    keywords: movie.keywords.keywords,
    originalLanguage: movie.original_language,
    overview: movie.overview || 'Overview not available.',
    poster: {
      height: TMDBImageSizes.posters.detailedShow.height,
      path: movie.poster_path,
      width: TMDBImageSizes.posters.detailedShow.width,
    },
    rating: getUSMovieRating(movie.release_dates) || '',
    recommendations: transformShows(movie.recommendations.results),
    releaseDate: movie.release_date ? formatDate(movie.release_date) : 'N/A',
    revenue: movie.revenue,
    runtime: movie.runtime,
    showType: 'movie',
    socialHandles: transformExternalIds(movie.external_ids),
    status: movie.status,
    tagline: movie.tagline,
    title: movie.title,
    userScore: movie.vote_average,
    userScoreCount: movie.vote_count,
    videos: transformVideos({
      showId: movie.id,
      showTitle: movie.title,
      showType: 'movie',
      videos: movie.videos.results,
    }),
  };
}
