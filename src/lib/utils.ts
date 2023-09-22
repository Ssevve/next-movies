import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  MixedShowsResult,
  MovieResult,
  PaginatedShowsResponse,
  TvShowResult,
} from '@/services/tmdb/types';
import Show from '@/types/Show';
import ShowType from '@/types/ShowType';

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
  const transformedTrendingShows = transformTMDBResults(data.results);

  const transformedResponse = {
    page: data.page,
    results: transformedTrendingShows,
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };

  return transformedResponse;
}

export function transformTMDBResults(results: MixedShowsResult[] | MovieResult[] | TvShowResult[]) {
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
