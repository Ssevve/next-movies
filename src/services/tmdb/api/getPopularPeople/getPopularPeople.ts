import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBPaginatedResponse from '@/services/TMDB/types/TMDBPaginatedResponse';
import { TMDBPerson } from '@/services/TMDB/types/TMDBPerson';
import transformPerson from '@/services/TMDB/utils/transformPerson/transformPerson';
import PaginatedResponse from '@/types/PaginatedResponse';
import { Person } from '@/types/Person';

export default async function getPopularPeople(
  requestPage = 1
): Promise<PaginatedResponse<Person>> {
  const res = await TMDBApi(`/person/popular?page=${requestPage}`);
  if (!res.ok) throw Error(`Failed to fetch popular people.`);
  const { page, results, total_pages, total_results }: TMDBPaginatedResponse<TMDBPerson> =
    await res.json();
  return {
    page,
    results: results.map((result) => transformPerson(result)),
    totalPages: total_pages,
    totalResults: total_results,
  };
}
