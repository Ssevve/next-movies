import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBPaginatedShows from '@/services/tmdb/types/TMDBPaginatedShows';
import transformShows from '@/services/tmdb/utils/transformShows/transformShows';
import Show from '@/types/Show';

export default async function getUpcomingMovies(): Promise<Show[]> {
  const res = await tmdbAPI(`/movie/upcoming`);
  if (!res.ok) throw Error('Failed to fetch upcoming movies.');
  const movies: TMDBPaginatedShows<TMDBMovie> = await res.json();
  return transformShows(movies.results);
}
