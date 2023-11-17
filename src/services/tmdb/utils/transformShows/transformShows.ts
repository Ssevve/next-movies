import { TMDBUnknownShow } from '@/services/TMDB/types/TMDBShow';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';

export default function transformShows(shows: TMDBUnknownShow[]) {
  return shows.map((show) => transformShow(show));
}
