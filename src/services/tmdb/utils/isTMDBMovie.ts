import { TMDBMovie, TMDBUnknownShow } from '@/services/TMDB/types/TMDBShow';

export default function isTMDBMovie(show: TMDBUnknownShow): show is TMDBMovie {
  return 'title' in show;
}
