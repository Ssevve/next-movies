import { TMDBImageSizes } from '@/services/TMDB/config';
import TMDBMovie from '@/services/TMDB/types/TMDBMovie';
import TMDBTvShow from '@/services/TMDB/types/TMDBTvShow';
import TMDBUnknownShow from '@/services/TMDB/types/TMDBUnknownShow';
import formatDate from '@/services/TMDB/utils/formatDate/formatDate';
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
  });
}
