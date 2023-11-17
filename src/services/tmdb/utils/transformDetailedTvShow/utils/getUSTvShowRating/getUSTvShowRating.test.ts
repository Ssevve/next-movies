import { TMDBContentRatings } from '@/services/TMDB/types/TMDBDetailedTvShow';
import getUSTvShowRating from '@/services/TMDB/utils/transformDetailedTvShow/utils/getUSTvShowRating/getUSTvShowRating';

describe('getUSTvShowRating', () => {
  it('should return correct rating if US rating is present', () => {
    const testContentRatings: TMDBContentRatings = {
      results: [
        {
          descriptors: ['test'],
          iso_3166_1: 'US',
          rating: 'PG-13',
        },
      ],
    };

    const expectedRating = testContentRatings.results[0].rating;
    expect(getUSTvShowRating(testContentRatings)).toBe(expectedRating);
  });

  it('should return null if US rating is not present', () => {
    const testContentRatings: TMDBContentRatings = {
      results: [
        {
          descriptors: ['test'],
          iso_3166_1: 'DE',
          rating: 'PG-13',
        },
      ],
    };

    expect(getUSTvShowRating(testContentRatings)).toBe(null);
  });

  it('should return null if results array is empty', () => {
    const testContentRatings: TMDBContentRatings = {
      results: [],
    };

    expect(getUSTvShowRating(testContentRatings)).toBe(null);
  });
});
