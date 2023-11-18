import { TMDBPerson } from '@/services/TMDB/types/TMDBPerson';
import transformPersonShows from '@/services/TMDB/utils/transformPersonShows/transformPersonShows';
import { Person } from '@/types/Person';

export default function transformPerson(result: TMDBPerson): Person {
  return {
    department: result.known_for_department,
    id: result.id,
    imagePath: result.profile_path,
    name: result.name,
    shows: result.known_for ? transformPersonShows(result.known_for) : [],
  };
}
