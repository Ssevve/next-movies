import mockTMDBDetailedTvShows from '@/__mocks__/data/mockTMDBDetailedTvShows';
import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBDetailedTvShow from '@/services/TMDB/types/TMDBDetailedTvShow';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import transformDetailedTvShow from '@/services/TMDB/utils/transformDetailedTvShow/transformDetailedTvShow';
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

describe('transformDetailedTvShow', () => {
  it('should return correctly transformed data', () => {
    const testTvShow: TMDBDetailedTvShow = mockTMDBDetailedTvShows.withOriginalLanguage;
    const expectedData: DetailedTvShow = {
      backdrop: { path: testTvShow.backdrop_path || '' },
      cast: transformTvShowCast(testTvShow.aggregate_credits.cast),
      createdBy: transformTvShowCreatedBy(testTvShow.created_by),
      genres: testTvShow.genres,
      homepage: testTvShow.homepage,
      id: testTvShow.id,
      images: {
        backdrops: transformImages(testTvShow.images.backdrops),
        posters: transformImages(testTvShow.images.posters),
      },
      keywords: testTvShow.keywords.results,
      lastEpisode: transformDetailedTvShowEpisode(testTvShow.last_episode_to_air!),
      networks: transformTvShowNetworks(testTvShow.networks),
      nextEpisode: null,
      originalLanguage: testTvShow.original_language,
      overview: testTvShow.overview!,
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testTvShow.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: getUSTvShowRating(testTvShow.content_ratings)!,
      recentSeason: getRecentSeason(testTvShow.seasons),
      recommendations: transformShows(testTvShow.recommendations.results),
      releaseDate: formatDate(testTvShow.first_air_date!),
      showType: 'tv',
      socialHandles: transformExternalIds(testTvShow.external_ids),
      status: testTvShow.status,
      tagline: testTvShow.tagline!,
      title: testTvShow.name,
      type: testTvShow.type,
      userScore: testTvShow.vote_average,
      userScoreCount: testTvShow.vote_count,
      videos: transformVideos({
        showId: testTvShow.id,
        showTitle: testTvShow.name,
        showType: 'tv',
        videos: testTvShow.videos.results,
      }),
    };
    const transformedData = transformDetailedTvShow(testTvShow);
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for TV show without a tagline', () => {
    const testTvShow: TMDBDetailedTvShow = {
      ...mockTMDBDetailedTvShows.withOriginalLanguage,
      tagline: '',
    };
    const expectedData: DetailedTvShow = {
      backdrop: { path: testTvShow.backdrop_path || '' },
      cast: transformTvShowCast(testTvShow.aggregate_credits.cast),
      createdBy: transformTvShowCreatedBy(testTvShow.created_by),
      genres: testTvShow.genres,
      homepage: testTvShow.homepage,
      id: testTvShow.id,
      images: {
        backdrops: transformImages(testTvShow.images.backdrops),
        posters: transformImages(testTvShow.images.posters),
      },
      keywords: testTvShow.keywords.results,
      lastEpisode: transformDetailedTvShowEpisode(testTvShow.last_episode_to_air!),
      networks: transformTvShowNetworks(testTvShow.networks),
      nextEpisode: null,
      originalLanguage: testTvShow.original_language,
      overview: testTvShow.overview!,
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testTvShow.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: getUSTvShowRating(testTvShow.content_ratings)!,
      recentSeason: getRecentSeason(testTvShow.seasons),
      recommendations: transformShows(testTvShow.recommendations.results),
      releaseDate: formatDate(testTvShow.first_air_date!),
      showType: 'tv',
      socialHandles: transformExternalIds(testTvShow.external_ids),
      status: testTvShow.status,
      tagline: null,
      title: testTvShow.name,
      type: testTvShow.type,
      userScore: testTvShow.vote_average,
      userScoreCount: testTvShow.vote_count,
      videos: transformVideos({
        showId: testTvShow.id,
        showTitle: testTvShow.name,
        showType: 'tv',
        videos: testTvShow.videos.results,
      }),
    };
    const transformedData = transformDetailedTvShow(testTvShow);
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for TV show without release date', () => {
    const testTvShow: TMDBDetailedTvShow = {
      ...mockTMDBDetailedTvShows.withOriginalLanguage,
      first_air_date: undefined,
    };
    const expectedData: DetailedTvShow = {
      backdrop: { path: testTvShow.backdrop_path || '' },
      cast: transformTvShowCast(testTvShow.aggregate_credits.cast),
      createdBy: transformTvShowCreatedBy(testTvShow.created_by),
      genres: testTvShow.genres,
      homepage: testTvShow.homepage,
      id: testTvShow.id,
      images: {
        backdrops: transformImages(testTvShow.images.backdrops),
        posters: transformImages(testTvShow.images.posters),
      },
      keywords: testTvShow.keywords.results,
      lastEpisode: transformDetailedTvShowEpisode(testTvShow.last_episode_to_air!),
      networks: transformTvShowNetworks(testTvShow.networks),
      nextEpisode: null,
      originalLanguage: testTvShow.original_language,
      overview: testTvShow.overview!,
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testTvShow.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: getUSTvShowRating(testTvShow.content_ratings)!,
      recentSeason: getRecentSeason(testTvShow.seasons),
      recommendations: transformShows(testTvShow.recommendations.results),
      releaseDate: 'N/A',
      showType: 'tv',
      socialHandles: transformExternalIds(testTvShow.external_ids),
      status: testTvShow.status,
      tagline: testTvShow.tagline!,
      title: testTvShow.name,
      type: testTvShow.type,
      userScore: testTvShow.vote_average,
      userScoreCount: testTvShow.vote_count,
      videos: transformVideos({
        showId: testTvShow.id,
        showTitle: testTvShow.name,
        showType: 'tv',
        videos: testTvShow.videos.results,
      }),
    };
    const transformedData = transformDetailedTvShow(testTvShow);
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for TV show without US rating', () => {
    const testTvShow: TMDBDetailedTvShow = {
      ...mockTMDBDetailedTvShows.withOriginalLanguage,
      content_ratings: { results: [] },
    };
    const expectedData: DetailedTvShow = {
      backdrop: { path: testTvShow.backdrop_path || '' },
      cast: transformTvShowCast(testTvShow.aggregate_credits.cast),
      createdBy: transformTvShowCreatedBy(testTvShow.created_by),
      genres: testTvShow.genres,
      homepage: testTvShow.homepage,
      id: testTvShow.id,
      images: {
        backdrops: transformImages(testTvShow.images.backdrops),
        posters: transformImages(testTvShow.images.posters),
      },
      keywords: testTvShow.keywords.results,
      lastEpisode: transformDetailedTvShowEpisode(testTvShow.last_episode_to_air!),
      networks: transformTvShowNetworks(testTvShow.networks),
      nextEpisode: null,
      originalLanguage: testTvShow.original_language,
      overview: testTvShow.overview!,
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testTvShow.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: null,
      recentSeason: getRecentSeason(testTvShow.seasons),
      recommendations: transformShows(testTvShow.recommendations.results),
      releaseDate: formatDate(testTvShow.first_air_date!),
      showType: 'tv',
      socialHandles: transformExternalIds(testTvShow.external_ids),
      status: testTvShow.status,
      tagline: testTvShow.tagline!,
      title: testTvShow.name,
      type: testTvShow.type,
      userScore: testTvShow.vote_average,
      userScoreCount: testTvShow.vote_count,
      videos: transformVideos({
        showId: testTvShow.id,
        showTitle: testTvShow.name,
        showType: 'tv',
        videos: testTvShow.videos.results,
      }),
    };
    const transformedData = transformDetailedTvShow(testTvShow);
    expect(transformedData).toEqual(expectedData);
  });

  it('should return correctly transformed data for TV show without an overview', () => {
    const testTvShow: TMDBDetailedTvShow = {
      ...mockTMDBDetailedTvShows.withOriginalLanguage,
      overview: '',
    };
    const expectedData: DetailedTvShow = {
      backdrop: { path: testTvShow.backdrop_path || '' },
      cast: transformTvShowCast(testTvShow.aggregate_credits.cast),
      createdBy: transformTvShowCreatedBy(testTvShow.created_by),
      genres: testTvShow.genres,
      homepage: testTvShow.homepage,
      id: testTvShow.id,
      images: {
        backdrops: transformImages(testTvShow.images.backdrops),
        posters: transformImages(testTvShow.images.posters),
      },
      keywords: testTvShow.keywords.results,
      lastEpisode: transformDetailedTvShowEpisode(testTvShow.last_episode_to_air!),
      networks: transformTvShowNetworks(testTvShow.networks),
      nextEpisode: null,
      originalLanguage: testTvShow.original_language,
      overview: 'Overview not available.',
      poster: {
        height: TMDBImageSizes.posters.detailedShow.height,
        path: testTvShow.poster_path || '',
        width: TMDBImageSizes.posters.detailedShow.width,
      },
      rating: getUSTvShowRating(testTvShow.content_ratings)!,
      recentSeason: getRecentSeason(testTvShow.seasons),
      recommendations: transformShows(testTvShow.recommendations.results),
      releaseDate: formatDate(testTvShow.first_air_date!),
      showType: 'tv',
      socialHandles: transformExternalIds(testTvShow.external_ids),
      status: testTvShow.status,
      tagline: testTvShow.tagline!,
      title: testTvShow.name,
      type: testTvShow.type,
      userScore: testTvShow.vote_average,
      userScoreCount: testTvShow.vote_count,
      videos: transformVideos({
        showId: testTvShow.id,
        showTitle: testTvShow.name,
        showType: 'tv',
        videos: testTvShow.videos.results,
      }),
    };
    const transformedData = transformDetailedTvShow(testTvShow);
    expect(transformedData).toEqual(expectedData);
  });
});
