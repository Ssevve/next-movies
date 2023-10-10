import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBPaginatedShows from '@/services/tmdb/types/TMDBPaginatedShows';
import formatDate from '@/services/tmdb/utils/formatDate/formatDate';

interface UpcomingMovie {
  id: number;
  thumbnailPath: string;
  releaseDate: string;
  title: string;
  showType: 'movie';
}

export default async function getUpcomingMovies(): Promise<UpcomingMovie[]> {
  const res = await tmdbAPI(`/movie/upcoming`);
  if (!res.ok) throw Error('Failed to fetch upcoming movies.');
  const movies: TMDBPaginatedShows<TMDBMovie> = await res.json();

  return movies.results.map(
    ({ release_date, title, backdrop_path, id }): UpcomingMovie => ({
      id,
      releaseDate: release_date ? formatDate(release_date) : 'N/A',
      showType: 'movie',
      thumbnailPath: backdrop_path,
      title,
    })
  );
}
