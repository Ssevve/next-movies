import { TMDBUnknownShow } from '@/services/tmdb/types';

import { transformShow } from '../transformShow/transformShow';

export default function transformShows(results: TMDBUnknownShow[]) {
  return results.map((show) => transformShow(show));
}
