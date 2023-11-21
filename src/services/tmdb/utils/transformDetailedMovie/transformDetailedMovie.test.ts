import mockTMDBDetailedMovies from '@/__mocks__/data/mockTMDBDetailedMovies';
import { TMDBImageSizes } from '@/services/TMDB/config';
import { TMDBDetailedMovie } from '@/services/TMDB/types/TMDBDetailedMovie';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import transformDetailedMovie from '@/services/TMDB/utils/transformDetailedMovie/transformDetailedMovie';
import getUSMovieRating from '@/services/TMDB/utils/transformDetailedMovie/utils/getUSMovieRating/getUSMovieRating';
import transformMovieCast from '@/services/TMDB/utils/transformDetailedMovie/utils/transformMovieCast/transformMovieCast';
import transformMovieCreatedBy from '@/services/TMDB/utils/transformDetailedMovie/utils/transformMovieCreatedBy/transformMovieCreatedBy';
import transformExternalIds from '@/services/TMDB/utils/transformExternalIds/transformExternalIds';
import transformImages from '@/services/TMDB/utils/transformImages/transformImages';
import transformShows from '@/services/TMDB/utils/transformShows/transformShows';
import transformVideos from '@/services/TMDB/utils/transformVideos/transformVideos';
import { DetailedMovie } from '@/types/DetailedMovie';

const mockTMDBDetailedMovie = mockTMDBDetailedMovies.withOriginalLanguage;

describe('transformDetailedMovie', () => {
  it('should return correctly transformed data', () => {
    const testMovie = mockTMDBDetailedMovie;
    const expectedData: DetailedMovie = {
      backdrop: { path: testMovie.backdrop_path || '' },
      budget: 120000000,
      cast: transformMovieCast(testMovie.credits.cast),
      createdBy: transformMovieCreatedBy(testMovie.credits.crew),
      genres: testMovie.genres,
      homepage: testMovie.homepage,
      id: testMovie.id,
      images: {
        backdrops: transformImages(testMovie.images.backdrops),
        posters: transformImages(testMovie.images.posters),
      },
      originalLanguage: testMovie.original_language,
      overview: testMovie.overview!,
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testMovie.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: getUSMovieRating(testMovie.release_dates),
      recommendations: transformShows(testMovie.recommendations.results),
      releaseDate: formatDate(testMovie.release_date!),
      revenue: testMovie.revenue,
      runtime: testMovie.runtime,
      showType: 'movie',
      socialHandles: transformExternalIds(testMovie.external_ids),
      status: testMovie.status,
      tagline: testMovie.tagline!,
      title: testMovie.title,
      userScore: testMovie.vote_average,
      userScoreCount: testMovie.vote_count,
      videos: transformVideos({
        showId: testMovie.id,
        showTitle: testMovie.title,
        showType: 'movie',
        videos: testMovie.videos.results,
      }),
    };
    const transformedData = transformDetailedMovie(testMovie);
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for a movie without tagline', () => {
    const testMovie = { ...mockTMDBDetailedMovie, tagline: '' };
    const expectedData: DetailedMovie = {
      backdrop: { path: testMovie.backdrop_path || '' },
      budget: 120000000,
      cast: transformMovieCast(testMovie.credits.cast),
      createdBy: transformMovieCreatedBy(testMovie.credits.crew),
      genres: testMovie.genres,
      homepage: testMovie.homepage,
      id: testMovie.id,
      images: {
        backdrops: transformImages(testMovie.images.backdrops),
        posters: transformImages(testMovie.images.posters),
      },
      originalLanguage: testMovie.original_language,
      overview: testMovie.overview!,
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testMovie.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: getUSMovieRating(testMovie.release_dates),
      recommendations: transformShows(testMovie.recommendations.results),
      releaseDate: formatDate(testMovie.release_date!),
      revenue: testMovie.revenue,
      runtime: testMovie.runtime,
      showType: 'movie',
      socialHandles: transformExternalIds(testMovie.external_ids),
      status: testMovie.status,
      tagline: null,
      title: testMovie.title,
      userScore: testMovie.vote_average,
      userScoreCount: testMovie.vote_count,
      videos: transformVideos({
        showId: testMovie.id,
        showTitle: testMovie.title,
        showType: 'movie',
        videos: testMovie.videos.results,
      }),
    };
    const transformedData = transformDetailedMovie(testMovie);
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for a movie without a release date', () => {
    const testMovie: TMDBDetailedMovie = {
      ...mockTMDBDetailedMovie,
      release_date: undefined,
    };
    const expectedData: DetailedMovie = {
      backdrop: { path: testMovie.backdrop_path || '' },
      budget: 120000000,
      cast: transformMovieCast(testMovie.credits.cast),
      createdBy: transformMovieCreatedBy(testMovie.credits.crew),
      genres: testMovie.genres,
      homepage: testMovie.homepage,
      id: testMovie.id,
      images: {
        backdrops: transformImages(testMovie.images.backdrops),
        posters: transformImages(testMovie.images.posters),
      },
      originalLanguage: testMovie.original_language,
      overview: testMovie.overview!,
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testMovie.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: getUSMovieRating(testMovie.release_dates)!,
      recommendations: transformShows(testMovie.recommendations.results),
      releaseDate: 'N/A',
      revenue: testMovie.revenue,
      runtime: testMovie.runtime,
      showType: 'movie',
      socialHandles: transformExternalIds(testMovie.external_ids),
      status: testMovie.status,
      tagline: testMovie.tagline!,
      title: testMovie.title,
      userScore: testMovie.vote_average,
      userScoreCount: testMovie.vote_count,
      videos: transformVideos({
        showId: testMovie.id,
        showTitle: testMovie.title,
        showType: 'movie',
        videos: testMovie.videos.results,
      }),
    };

    const transformedData = transformDetailedMovie(testMovie);
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for a movie without an overview', () => {
    const testMovie: TMDBDetailedMovie = {
      ...mockTMDBDetailedMovie,
      overview: '',
    };

    const expectedData: DetailedMovie = {
      backdrop: { path: testMovie.backdrop_path || '' },
      budget: 120000000,
      cast: transformMovieCast(testMovie.credits.cast),
      createdBy: transformMovieCreatedBy(testMovie.credits.crew),
      genres: testMovie.genres,
      homepage: testMovie.homepage,
      id: testMovie.id,
      images: {
        backdrops: transformImages(testMovie.images.backdrops),
        posters: transformImages(testMovie.images.posters),
      },
      originalLanguage: testMovie.original_language,
      overview: 'Overview not available.',
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testMovie.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: getUSMovieRating(testMovie.release_dates)!,
      recommendations: transformShows(testMovie.recommendations.results),
      releaseDate: formatDate(testMovie.release_date!),
      revenue: testMovie.revenue,
      runtime: testMovie.runtime,
      showType: 'movie',
      socialHandles: transformExternalIds(testMovie.external_ids),
      status: testMovie.status,
      tagline: testMovie.tagline!,
      title: testMovie.title,
      userScore: testMovie.vote_average,
      userScoreCount: testMovie.vote_count,
      videos: transformVideos({
        showId: testMovie.id,
        showTitle: testMovie.title,
        showType: 'movie',
        videos: testMovie.videos.results,
      }),
    };

    const transformedData = transformDetailedMovie(testMovie);
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for a movie without a US rating', () => {
    const testMovie: TMDBDetailedMovie = {
      ...mockTMDBDetailedMovie,
      release_dates: {
        results: [],
      },
    };

    const expectedData: DetailedMovie = {
      backdrop: { path: testMovie.backdrop_path || '' },
      budget: 120000000,
      cast: transformMovieCast(testMovie.credits.cast),
      createdBy: transformMovieCreatedBy(testMovie.credits.crew),
      genres: testMovie.genres,
      homepage: testMovie.homepage,
      id: testMovie.id,
      images: {
        backdrops: transformImages(testMovie.images.backdrops),
        posters: transformImages(testMovie.images.posters),
      },
      originalLanguage: testMovie.original_language,
      overview: testMovie.overview!,
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testMovie.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: null,
      recommendations: transformShows(testMovie.recommendations.results),
      releaseDate: formatDate(testMovie.release_date!),
      revenue: testMovie.revenue,
      runtime: testMovie.runtime,
      showType: 'movie',
      socialHandles: transformExternalIds(testMovie.external_ids),
      status: testMovie.status,
      tagline: testMovie.tagline!,
      title: testMovie.title,
      userScore: testMovie.vote_average,
      userScoreCount: testMovie.vote_count,
      videos: transformVideos({
        showId: testMovie.id,
        showTitle: testMovie.title,
        showType: 'movie',
        videos: testMovie.videos.results,
      }),
    };

    const transformedData = transformDetailedMovie(testMovie);
    expect(transformedData).toEqual(expectedData);
  });
});
