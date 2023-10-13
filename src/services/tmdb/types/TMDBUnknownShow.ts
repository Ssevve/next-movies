import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBTvShow from '@/services/TMDB/types/TMDBTvShow';

type TMDBUnknownShow = TMDBMovie | TMDBTvShow;

export default TMDBUnknownShow;
