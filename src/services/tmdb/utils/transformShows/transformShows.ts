import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import Show from '@/types/Show';

export default function transformShows(shows: TMDBUnknownShow[]) {
  return shows.map((show): Show => transformShow(show));
}
