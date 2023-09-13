import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  TMDB_CARD_POSTER_PATH,
  TMDB_IMAGE_URL,
} from '@/services/tmdb/constants';
import { PaginatedResponse } from '@/types/PaginatedResponse';
import { Show } from '@/types/Show';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
    new Date(dateString)
  );
}

export function transformTMDBResponse(data: PaginatedResponse) {
  const transformedTrendingShows = data.results.map((show): Show => {
    return {
      id: show.id,
      posterPath: `${TMDB_IMAGE_URL}${TMDB_CARD_POSTER_PATH}${show.poster_path}`,
      rating: show.vote_average,
      ratingsCount: show.vote_count,
      releaseDate: show.release_date || show.first_air_date,
      showType: show.title ? 'movie' : 'tv',
      title: show.title || show.name,
    };
  });

  const transformedResponse = {
    page: data.page,
    results: transformedTrendingShows,
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };

  return transformedResponse;
}
