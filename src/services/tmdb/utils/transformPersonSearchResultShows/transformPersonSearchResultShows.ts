import {
  TMDBPersonSearchResultMovie,
  TMDBPersonSearchResultShow,
} from '@/services/TMDB/types/TMDBSearchResult';
import PersonSearchResultShow from '@/types/PersonSearchResultShow';

function isTMDBPersonSearchResultMovie(
  show: TMDBPersonSearchResultShow
): show is TMDBPersonSearchResultMovie {
  return show.media_type === 'movie';
}

export default function transformPersonSearchResultShows(
  shows: TMDBPersonSearchResultShow[]
): PersonSearchResultShow[] {
  return shows.map((show) => {
    const { id } = show;
    if (isTMDBPersonSearchResultMovie(show)) {
      return { id, showType: 'movie', title: show.title };
    } else {
      return { id, showType: 'tv', title: show.name };
    }
  });
}
