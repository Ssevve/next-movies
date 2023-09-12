import { TrendingResponse } from '@/services/tmdb/api';
import { TMDB_IMAGE_URL } from '@/services/tmdb/constants';
import { Show } from '@/types/Show';

export interface PaginatedShows {
  page: number;
  results: Show[];
  totalPages: number;
  totalResults: number;
}

export const transformTrendingData = (
  data: TrendingResponse
): PaginatedShows => {
  const transformedTrendingShows = data.results.map((show): Show => {
    return {
      id: show.id,
      posterPath: TMDB_IMAGE_URL + show.poster_path,
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
};
