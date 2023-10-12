import { imageSizes } from '@/services/tmdb/config';
import Video from '@/types/Video';
import findTrailer from '@/utils/findTrailer/findTrailer';

describe('findTrailer', () => {
  it('should return trailer if it is available', () => {
    const testVideos: Video[] = [
      {
        backdrop: { path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg' },
        id: '6438230e1d538600b6ce01f4',
        showId: 635910,
        showTitle: 'The Last Voyage of the Demeter',
        showType: 'movie',
        thumbnail: {
          height: imageSizes.thumbnails.video.height,
          path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg',
          width: imageSizes.thumbnails.video.width,
        },
        title: 'Official Teaser',
        type: 'Teaser',
        youtubeKey: '6FgUUO9Ztd0',
      },
      {
        backdrop: { path: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg' },
        id: '63c9c55903f0b600843d128e',
        showId: 939338,
        showTitle: 'Epic Tails',
        showType: 'movie',
        thumbnail: {
          height: imageSizes.thumbnails.video.height,
          path: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg',
          width: imageSizes.thumbnails.video.width,
        },
        title: 'ARGONUTS - Official Australian Trailer',
        type: 'Trailer',
        youtubeKey: 'LiVyhdxLYFc',
      },
    ];
    expect(findTrailer(testVideos)).toEqual(testVideos[1]);
  });

  it('should return teaser if trailer is not available if it is available', () => {
    const testVideos: Video[] = [
      {
        backdrop: { path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg' },
        id: '6438230e1d538600b6ce01f4',
        showId: 635910,
        showTitle: 'The Last Voyage of the Demeter',
        showType: 'movie',
        thumbnail: {
          height: imageSizes.thumbnails.video.height,
          path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg',
          width: imageSizes.thumbnails.video.width,
        },
        title: 'Official Featurette',
        type: 'Featurette',
        youtubeKey: '6FgUUO9Ztd0',
      },
      {
        backdrop: { path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg' },
        id: '63c9c55903f0b600843d128e',
        showId: 939338,
        showTitle: 'Epic Tails',
        showType: 'movie',
        thumbnail: {
          height: imageSizes.thumbnails.video.height,
          path: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg',
          width: imageSizes.thumbnails.video.width,
        },
        title: 'ARGONUTS - Official Australian Trailer',
        type: 'Teaser',
        youtubeKey: 'LiVyhdxLYFc',
      },
    ];

    expect(findTrailer(testVideos)).toEqual(testVideos[1]);
  });

  it('should return null if neither trailer or teaser is available', () => {
    const testVideos: Video[] = [
      {
        backdrop: { path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg' },
        id: '6438230e1d538600b6ce01f4',
        showId: 635910,
        showTitle: 'The Last Voyage of the Demeter',
        showType: 'movie',
        thumbnail: {
          height: imageSizes.thumbnails.video.height,
          path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg',
          width: imageSizes.thumbnails.video.width,
        },
        title: 'Official Featurette',
        type: 'Featurette',
        youtubeKey: '6FgUUO9Ztd0',
      },
      {
        backdrop: { path: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg' },
        id: '63c9c55903f0b600843d128e',
        showId: 939338,
        showTitle: 'Epic Tails',
        showType: 'movie',
        thumbnail: {
          height: imageSizes.thumbnails.video.height,
          path: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg',
          width: imageSizes.thumbnails.video.width,
        },
        title: 'ARGONUTS - Official Australian Trailer',
        type: 'Featurette',
        youtubeKey: 'LiVyhdxLYFc',
      },
    ];

    expect(findTrailer(testVideos)).toEqual(null);
  });
});
