import { Show, ShowType } from '@/types/Show';

export interface PersonSearchResultShow {
  id: number;
  title: string;
  showType: ShowType;
}

export interface PersonSearchResult {
  id: number;
  department: string;
  name: string;
  imagePath: string;
  shows: PersonSearchResultShow[];
}

export interface ShowSearchResult extends Show {
  overview: string;
}
