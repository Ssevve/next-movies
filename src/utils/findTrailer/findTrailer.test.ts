import Video from '@/types/Video';
import findTrailer from '@/utils/findTrailer/findTrailer';

describe('findTrailer', () => {
  it('should return trailer if it is available', () => {
    const testVideos: Video[] = [
      {
        id: '6438230e1d538600b6ce01f4',
        showId: 635910,
        showTitle: 'The Last Voyage of the Demeter',
        showType: 'movie',
        thumbnailPath: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg',
        title: 'Official Teaser',
        type: 'Teaser',
        youtubeKey: '6FgUUO9Ztd0',
      },
      {
        id: '63c9c55903f0b600843d128e',
        showId: 939338,
        showTitle: 'Epic Tails',
        showType: 'movie',
        thumbnailPath: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg',
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
        id: '6438230e1d538600b6ce01f4',
        showId: 635910,
        showTitle: 'The Last Voyage of the Demeter',
        showType: 'movie',
        thumbnailPath: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg',
        title: 'Official Featurette',
        type: 'Featurette',
        youtubeKey: '6FgUUO9Ztd0',
      },
      {
        id: '63c9c55903f0b600843d128e',
        showId: 939338,
        showTitle: 'Epic Tails',
        showType: 'movie',
        thumbnailPath: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg',
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
        id: '6438230e1d538600b6ce01f4',
        showId: 635910,
        showTitle: 'The Last Voyage of the Demeter',
        showType: 'movie',
        thumbnailPath: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg',
        title: 'Official Featurette',
        type: 'Featurette',
        youtubeKey: '6FgUUO9Ztd0',
      },
      {
        id: '63c9c55903f0b600843d128e',
        showId: 939338,
        showTitle: 'Epic Tails',
        showType: 'movie',
        thumbnailPath: '/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg',
        title: 'ARGONUTS - Official Australian Trailer',
        type: 'Featurette',
        youtubeKey: 'LiVyhdxLYFc',
      },
    ];

    expect(findTrailer(testVideos)).toEqual(null);
  });
});