import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBTvShow from '@/services/tmdb/types/TMDBTvShow';

type TMDBUnknownShow = TMDBMovie | TMDBTvShow;

export default TMDBUnknownShow;
