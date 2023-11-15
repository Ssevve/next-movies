import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import PaginatedResponse from '@/types/PaginatedResponse';
import Show from '@/types/Show';

interface UpcomingMovie extends Show {
  id: number;
  thumbnailPath: string;
  releaseDate: string;
  title: string;
  showType: 'movie';
}

// TODO: Update tests
export default async function getUpcomingMovies(
  requestPage = 1
): Promise<PaginatedResponse<UpcomingMovie>> {
  const res = await TMDBApi(`/movie/upcoming?page=${requestPage}`);
  if (!res.ok) throw Error('Failed to fetch upcoming movies.');
  const { page, results, total_pages, total_results }: TMDBPaginatedResponse<TMDBMovie> =
    await res.json();

  return {
    page,
    results: results.map(
      ({ release_date, title, backdrop_path, id, vote_average, poster_path }): UpcomingMovie => ({
        id,
        poster: {
          height: TMDBImageSizes.posters.show.height,
          path: poster_path || '',
          width: TMDBImageSizes.posters.show.width,
        },
        releaseDate: release_date ? formatDate(release_date) : 'N/A',
        showType: 'movie',
        thumbnailPath: backdrop_path || '',
        title,
        userScore: vote_average,
      })
    ),
    totalPages: total_pages,
    totalResults: total_results,
  };
}
