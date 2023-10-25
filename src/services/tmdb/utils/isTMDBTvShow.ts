import TMDBTvShow from '@/services/TMDB/types/TMDBTvShow';
import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';

export default function isTMDBTvShow(show: TMDBUnknownShow): show is TMDBTvShow {
  return 'name' in show;
}
