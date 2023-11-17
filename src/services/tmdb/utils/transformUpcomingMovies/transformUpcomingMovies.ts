import { TMDBMovie } from '@/services/TMDB/types/TMDBShow';
import transformShow from '@/services/TMDB/utils/transformShow/transformShow';
import UpcomingMovie from '@/types/UpcomingMovie';

export default function transformUpcomingMovies(movies: TMDBMovie[]) {
  return movies.map(
    (movie): UpcomingMovie => ({
      ...transformShow(movie),
      showType: 'movie',
      thumbnailPath: movie.backdrop_path || '',
    })
  );
}
