import { formatDate } from '@/lib/utils';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBTvShow from '@/services/tmdb/types/TMDBTvShow';
import TMDBUnknownShow from '@/services/tmdb/types/TMDBUnknownShow';
import Show from '@/types/Show';

function isTMDBMovie(show: TMDBUnknownShow): show is TMDBMovie {
  return 'title' in show;
}

function isTMDBTvShow(show: TMDBUnknownShow): show is TMDBTvShow {
  return 'name' in show;
}

type UniqueShowTypeProps = 'title' | 'showType' | 'releaseDate';

export default function transformShows(shows: TMDBUnknownShow[]) {
  return shows.map((show) => {
    const { backdrop_path, id, poster_path, vote_average, vote_count } = show;

    const transformedShow: Omit<Show, UniqueShowTypeProps> = {
      backdropPath: backdrop_path,
      id,
      posterPath: poster_path,
      userScore: vote_average,
      userScoreCount: vote_count,
    };

    if (isTMDBMovie(show)) {
      const { title, release_date } = show;
      const movieProps: Pick<Show, UniqueShowTypeProps> = {
        releaseDate: formatDate(release_date) || 'N/A',
        showType: 'movie',
        title: title,
      };
      return { ...transformedShow, ...movieProps };
    } else if (isTMDBTvShow(show)) {
      const { name, first_air_date } = show;
      const tvShowProps: Pick<Show, UniqueShowTypeProps> = {
        releaseDate: first_air_date ? formatDate(first_air_date) : 'N/A',
        showType: 'tv',
        title: name,
      };
      return { ...transformedShow, ...tvShowProps };
    } else {
      throw Error('Incorrect data.');
    }
  });
}
