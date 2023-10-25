import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
import isTMDBMovie from '@/services/TMDB/utils/isTMDBMovie';
import isTMDBTvShow from '@/services/TMDB/utils/isTMDBTvShow';
import Show from '@/types/Show';

type UniqueShowTypeProps = 'title' | 'showType' | 'releaseDate';

// TODO: tests
export default function transformShow(show: TMDBUnknownShow) {
  const { id, poster_path, vote_average } = show;

  const transformedShow: Omit<Show, UniqueShowTypeProps> = {
    id,
    poster: {
      height: TMDBImageSizes.posters.show.height,
      path: poster_path,
      width: TMDBImageSizes.posters.show.width,
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
}
