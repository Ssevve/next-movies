import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';

export default interface TMDBPersonSearchResult {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  known_for: TMDBUnknownShow[];
}
