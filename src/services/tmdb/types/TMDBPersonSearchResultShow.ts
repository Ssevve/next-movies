import TMDBPersonSearchResultMovie from '@/services/TMDB/types/TMDBPersonSearchResultMovie';
import TMDBPersonSearchResultTvShow from '@/services/TMDB/types/TMDBPersonSearchResultTvShow';

type TMDBPersonSearchResultShow = TMDBPersonSearchResultTvShow | TMDBPersonSearchResultMovie;

export default TMDBPersonSearchResultShow;
