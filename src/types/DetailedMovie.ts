import DetailedShow from '@/types/DetailedShow';

import CastPerson from './CastPerson';

export default interface DetailedMovie extends DetailedShow {
  budget: number;
  revenue: number;
  runtime: number;
  cast: CastPerson[];
}
