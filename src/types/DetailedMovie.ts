import CastPerson from '@/types/CastPerson';
import DetailedShow from '@/types/DetailedShow';

interface Director {
  name: string;
  id: number;
}

export default interface DetailedMovie extends DetailedShow {
  budget: number;
  revenue: number;
  runtime: number;
  cast: CastPerson[];
  directedBy: Director[];
}
