import { formatDate } from '@/lib/utils';
import { MixedShowsResult, MovieResult, TvShowResult } from '@/services/tmdb/types';
import Show from '@/types/Show';

function isMovieResult(show: MixedShowsResult): show is MovieResult {
  return 'title' in show;
}

function isTvShowResult(show: MixedShowsResult): show is TvShowResult {
  return 'name' in show;
}

export default function transformShowsResults(results: MixedShowsResult[]) {
  if (!results.length) return [];
  return results.map((result) => {
    const { backdrop_path, id, poster_path, vote_average, vote_count } = result;

    const sharedProps: Omit<Show, 'showType' | 'title' | 'releaseDate'> = {
      backdropPath: backdrop_path,
      id,
      posterPath: poster_path,
      rating: vote_average,
      ratingsCount: vote_count,
    };

    const uniqueProps: Partial<Pick<Show, 'showType' | 'title' | 'releaseDate'>> = {};

    if (isMovieResult(result)) {
      const { title, release_date } = result;
      uniqueProps.showType = 'movie';
      uniqueProps.title = title;
      uniqueProps.releaseDate = formatDate(release_date) || 'N/A';
    } else if (isTvShowResult(result)) {
      const { name, first_air_date } = result;
      uniqueProps.showType = 'tv';
      uniqueProps.title = name;
      uniqueProps.releaseDate = first_air_date ? formatDate(first_air_date) : 'N/A';
    }

    const transformedResult = { ...sharedProps, ...uniqueProps } as Show;

    return transformedResult;
  });
}
