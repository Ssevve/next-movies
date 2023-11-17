import { TMDBTvShow, TMDBUnknownShow } from '@/services/TMDB/types/TMDBShow';

export default function isTMDBTvShow(show: TMDBUnknownShow): show is TMDBTvShow {
  return 'name' in show;
}
