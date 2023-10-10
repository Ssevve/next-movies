import { TMDB_SHOW_POSTER_HEIGHT, TMDB_SHOW_POSTER_WIDTH } from '@/services/tmdb/constants';
import TMDBMovie from '@/services/tmdb/types/TMDBMovie';
import TMDBTvShow from '@/services/tmdb/types/TMDBTvShow';
import TMDBUnknownShow from '@/services/tmdb/types/TMDBUnknownShow';
import formatDate from '@/services/tmdb/utils/formatDate/formatDate';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import Show from '@/types/Show';

function isTMDBMovie(show: TMDBUnknownShow): show is TMDBMovie {
  return 'title' in show;
}

function isTMDBTvShow(show: TMDBUnknownShow): show is TMDBTvShow {
  return 'name' in show;
}

type UniqueShowTypeProps = 'title' | 'showType' | 'releaseDate';

export default function transformShows(shows: TMDBUnknownShow[]) {
  return shows.map((show): Show => {
    const { id, poster_path, vote_average } = show;

    const posterPath = getTMDBImagePath({
      height: TMDB_SHOW_POSTER_HEIGHT,
      image: poster_path,
      width: TMDB_SHOW_POSTER_WIDTH,
    });

    const transformedShow: Omit<Show, UniqueShowTypeProps> = {
      id,
      poster: {
        height: TMDB_SHOW_POSTER_HEIGHT,
        path: posterPath,
        width: TMDB_SHOW_POSTER_WIDTH,
      },
      userScore: vote_average,
    };

    if (isTMDBMovie(show)) {
      const { title, release_date } = show;
      const movieProps: Pick<Show, UniqueShowTypeProps> = {
        releaseDate: release_date ? formatDate(release_date) : 'N/A',
        showType: 'movie',
        title,
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
      throw Error('Could not transform show: incorrect data.');
    }
  });
}
