import TMDBReleaseDates from '@/services/TMDB/types/TMDBReleaseDates';
import getUSMovieRating from '@/services/TMDB/utils/transformDetailedMovie/utils/getUSMovieRating/getUSMovieRating';

describe('getUSMovieRating', () => {
  it('should return correct rating if US rating is present', () => {
    const testReleaseDates: TMDBReleaseDates = {
      results: [
        {
          iso_3166_1: 'US',
          release_dates: [
            {
              certification: 'PG-13',
            },
          ],
        },
      ],
    };

    const expectedRating = testReleaseDates.results[0].release_dates[0].certification;
    expect(getUSMovieRating(testReleaseDates)).toBe(expectedRating);
  });

  it('should return null if US rating is not present', () => {
    const testReleaseDates: TMDBReleaseDates = {
      results: [
        {
          iso_3166_1: 'DE',
          release_dates: [
            {
              certification: 'PG-13',
            },
          ],
        },
      ],
    };

    expect(getUSMovieRating(testReleaseDates)).toBe(null);
  });

  it('should return null if results array is empty', () => {
    const testReleaseDates: TMDBReleaseDates = {
      results: [],
    };

    expect(getUSMovieRating(testReleaseDates)).toBe(null);
  });
});
