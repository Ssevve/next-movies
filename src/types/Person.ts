import { ShowType } from '@/types/Show';

export interface PersonShow {
  id: number;
  title: string;
  showType: ShowType;
}

export interface Person {
  id: number;
  department: string;
  name: string;
  imagePath: string;
  shows: PersonShow[];
}
