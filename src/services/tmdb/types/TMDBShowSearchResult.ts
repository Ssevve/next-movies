import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';

type TMDBShowSearchResult = {
  overview: string;
} & TMDBUnknownShow;

export default TMDBShowSearchResult;
