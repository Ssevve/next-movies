import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { PaginatedShowsResponse } from '@/services/tmdb/types';
import Show from '@/types/Show';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
    new Date(dateString)
  );
}

export function transformPaginatedShowsResponse(data: PaginatedShowsResponse) {
  const transformedTrendingShows = data.results.map((show): Show => {
    const releaseDate =
      'release_date' in show ? show.release_date : show.first_air_date;

    return {
      id: show.id,
      posterPath: show.poster_path,
      rating: show.vote_average,
      ratingsCount: show.vote_count,
      releaseDate: releaseDate ? formatDate(releaseDate) : 'N/A',
      showType: 'title' in show ? 'movie' : 'tv',
      title: 'title' in show ? show.title : show.name,
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
