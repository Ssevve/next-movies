import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  MixedShowsResult,
  MovieResult,
  PaginatedShowsResponse,
  TvShowResult,
  VideosResponseResult,
} from '@/services/tmdb/types';
import Show from '@/types/Show';
import ShowType from '@/types/ShowType';
import Video from '@/types/Video';

import { ALLOWED_TRAILER_VIDEO_TYPES } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(dateString));
}

export const isFulfilled = <T>(
  promise: PromiseSettledResult<T>
): promise is PromiseFulfilledResult<T> => promise.status === 'fulfilled';

export function transformPaginatedShowsResponse(data: PaginatedShowsResponse) {
  const transformedTrendingShows = transformTMDBShowResults(data.results);

  const transformedResponse = {
    page: data.page,
    results: transformedTrendingShows,
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };

  return transformedResponse;
}

export function transformTMDBShowResults(
  results: MixedShowsResult[] | MovieResult[] | TvShowResult[]
) {
  return results.map(
    ({ backdrop_path, id, media_type, poster_path, vote_average, vote_count, ...rest }): Show => {
      const releaseDate = media_type === 'movie' ? rest.release_date : rest.first_air_date;

      const showTitle = media_type === 'movie' ? rest.title : rest.name;

      return {
        id,
        posterPath: poster_path,
        rating: vote_average,
        ratingsCount: vote_count,
        releaseDate: releaseDate ? formatDate(releaseDate) : 'N/A',
        showType: media_type,
        title: showTitle || 'N/A',
      };
    }
  );
}

interface TransformVideosResponseArgs {
  showId: number;
  results: VideosResponseResult[];
  showTitle: string;
  showType: ShowType;
  thumbnailPath: string;
}

export function transformVideosResponse({
  showId,
  results,
  showTitle,
  showType,
  thumbnailPath,
}: TransformVideosResponseArgs) {
  const transformedResults: Video[] = results.map(({ id, name, key, type }) => {
    return {
      id,
      showId,
      showTitle,
      showType,
      thumbnailPath,
      title: name,
      type,
      youtubeKey: key,
    };
  });

  return transformedResults;
}

export function findTrailer(videos: Video[]) {
  return videos.find((video) => ALLOWED_TRAILER_VIDEO_TYPES.includes(video.type));
}
