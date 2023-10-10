import { TMDB_VIDEO_THUMBNAIL_HEIGHT, TMDB_VIDEO_THUMBNAIL_WIDTH } from '@/services/tmdb/constants';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import Video from '@/types/Video';

const mockVideos: Video[] = [
  {
    backdrop: { path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg' },
    id: '6438230e1d538600b6ce01f4',
    showId: 635910,
    showTitle: 'The Last Voyage of the Demeter',
    showType: 'movie',
    thumbnail: {
      height: 200,
      path: getTMDBImagePath({
        height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
        image: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg',
        width: TMDB_VIDEO_THUMBNAIL_WIDTH,
      }),
      width: 355,
    },
    title: 'Official Trailer',
    type: 'Trailer',
    youtubeKey: '6FgUUO9Ztd0',
  },
  {
    backdrop: { path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg' },
    id: '63c9c55903f0b600843d128e',
    showId: 939338,
    showTitle: 'Epic Tails',
    showType: 'movie',
    thumbnail: {
      height: 100,
      path: getTMDBImagePath({
        height: TMDB_VIDEO_THUMBNAIL_HEIGHT,
        image: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg',
        width: TMDB_VIDEO_THUMBNAIL_WIDTH,
      }),
      width: 200,
    },
    title: 'ARGONUTS - Official Australian Trailer',
    type: 'Trailer',
    youtubeKey: 'LiVyhdxLYFc',
  },
];

export default mockVideos;
