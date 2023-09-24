import { formatDate } from '@/lib/utils';
import { MixedShowsResult, MovieResult, TvShowResult } from '@/services/tmdb/types';
import Show from '@/types/Show';

function isMovieResult(show: MixedShowsResult): show is MovieResult {
  return 'title' in show;
}

function isTvShowResult(show: MixedShowsResult): show is TvShowResult {
  return 'name' in show;
}

type CommonProps = 'title' | 'showType' | 'releaseDate';

export default function transformShowsResults(results: MixedShowsResult[]) {
  if (!results.length) return [];
  return results.map((result) => {
    const { backdrop_path, id, poster_path, vote_average, vote_count } = result;

    const transformedResult: Omit<Show, CommonProps> = {
      backdropPath: backdrop_path,
      id,
      posterPath: poster_path,
      rating: vote_average,
      ratingsCount: vote_count,
    };

    if (isMovieResult(result)) {
      const { title, release_date } = result;
      const movieProps: Pick<Show, CommonProps> = {
        releaseDate: formatDate(release_date) || 'N/A',
        showType: 'movie',
        title: title,
      };
      return { ...transformedResult, ...movieProps };
    } else if (isTvShowResult(result)) {
      const { name, first_air_date } = result;
      const tvShowProps: Pick<Show, CommonProps> = {
        releaseDate: first_air_date ? formatDate(first_air_date) : 'N/A',
        showType: 'tv',
        title: name,
      };
      return { ...transformedResult, ...tvShowProps };
    } else {
      throw Error('Incorrect data.');
    }
  });
}
