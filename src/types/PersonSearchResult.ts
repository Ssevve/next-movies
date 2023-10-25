import PersonSearchResultShow from '@/types/PersonSearchResultShow';

export default interface PersonSearchResult {
  id: number;
  department: string;
  name: string;
  imagePath: string;
  shows: PersonSearchResultShow[];
}
