import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import ShowScroller from '@/components/ShowScroller';
import {
  MixedShowsResult,
  MovieResult,
  PaginatedShowsResponse,
  Result,
  TvShowResult,
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

interface TransformPaginatedShowsResponseArgs {
  page: number;
  results: MixedShowsResult[];
  total_pages: number;
  total_results: number;
}

export function transformPaginatedShowsResponse({
  page,
  results,
  total_pages,
  total_results,
}: TransformPaginatedShowsResponseArgs) {
  const transformedShows: Show[] = transformTMDBShowsResults(results);

  const transformedResponse = {
    page,
    results: transformedShows,
    totalPages: total_pages,
    totalResults: total_results,
  };

  return transformedResponse;
}

export function isMovieResult(show: MixedShowsResult): show is MovieResult {
  return 'title' in show;
}

export function isTvShowResult(show: MixedShowsResult): show is TvShowResult {
  return 'name' in show;
}

export function transformTMDBShowsResults(results: MixedShowsResult[]) {
  return results.map((result) => {
    const { backdrop_path, id, poster_path, vote_average, vote_count } = result;

    const sharedProps: Omit<Show, 'showType' | 'title' | 'releaseDate'> = {
      backdropPath: backdrop_path,
      id,
      posterPath: poster_path,
      rating: vote_average,
      ratingsCount: vote_count,
    };

    const uniqueProps: Partial<Pick<Show, 'showType' | 'title' | 'releaseDate'>> = {};

    if (isMovieResult(result)) {
      const { title, release_date } = result;
      uniqueProps.showType = 'movie';
      uniqueProps.title = title;
      uniqueProps.releaseDate = formatDate(release_date) || 'N/A';
    } else if (isTvShowResult(result)) {
      const { name, first_air_date } = result;
      uniqueProps.showType = 'tv';
      uniqueProps.title = name;
      uniqueProps.releaseDate = formatDate(first_air_date) || 'N/A';
    }

    const transformedResult = { ...sharedProps, ...uniqueProps } as Show;

    return transformedResult;
  });
}

export function findTrailer(videos: Video[]) {
  return videos.find((video) => ALLOWED_TRAILER_VIDEO_TYPES.includes(video.type));
}
