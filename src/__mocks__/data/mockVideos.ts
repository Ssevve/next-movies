import { TMDB_IMAGE_URL, TMDB_VIDEO_CARD_THUMBNAIL_PATH } from '@/services/tmdb/constants';
import Video from '@/types/Video';

const mockVideos: Video[] = [
  {
    id: '6438230e1d538600b6ce01f4',
    showId: 635910,
    showTitle: 'The Last Voyage of the Demeter',
    showType: 'movie',
    thumbnail: {
      height: 100,
      path: `${TMDB_IMAGE_URL}${TMDB_VIDEO_CARD_THUMBNAIL_PATH}/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg`,
      width: 200,
    },
    title: 'Official Trailer',
    type: 'Trailer',
    youtubeKey: '6FgUUO9Ztd0',
  },
  {
    id: '63c9c55903f0b600843d128e',
    showId: 939338,
    showTitle: 'Epic Tails',
    showType: 'movie',
    thumbnail: {
      height: 100,
      path: `${TMDB_IMAGE_URL}${TMDB_VIDEO_CARD_THUMBNAIL_PATH}/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg`,
      width: 200,
    },
    title: 'ARGONUTS - Official Australian Trailer',
    type: 'Trailer',
    youtubeKey: 'LiVyhdxLYFc',
  },
];

export default mockVideos;
