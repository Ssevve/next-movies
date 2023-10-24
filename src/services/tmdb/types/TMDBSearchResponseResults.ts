import TMDBPersonSearchResult from '@/services/TMDB/types/TMDBPersonSearchResult';
import TMDBShowSearchResult from '@/services/TMDB/types/TMDBShowSearchResult';

type TMDBSearchResponseResults = (TMDBPersonSearchResult | TMDBShowSearchResult)[];

export default TMDBSearchResponseResults;
