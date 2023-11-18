import { TMDBPersonMovie, TMDBPersonShow } from '@/services/TMDB/types/TMDBPerson';
import { PersonShow } from '@/types/Person';

function isTMDBPersonSearchResultMovie(show: TMDBPersonShow): show is TMDBPersonMovie {
  return show.media_type === 'movie';
}

export default function transformPersonShows(shows: TMDBPersonShow[]): PersonShow[] {
  return shows.map((show) => {
    const { id } = show;
    if (isTMDBPersonSearchResultMovie(show)) {
      return { id, showType: 'movie', title: show.title };
    } else {
      return { id, showType: 'tv', title: show.name };
    }
  });
}
