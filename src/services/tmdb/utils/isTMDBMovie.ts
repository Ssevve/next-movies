import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';

export default function isTMDBMovie(show: TMDBUnknownShow): show is TMDBMovie {
  return 'title' in show;
}
