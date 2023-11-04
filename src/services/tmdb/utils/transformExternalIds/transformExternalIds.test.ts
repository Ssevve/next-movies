import TMDBExternalIds from '@/services/TMDB/types/TMDBExternalIds';
import transformExternalIds from '@/services/TMDB/utils/transformExternalIds/transformExternalIds';
import SocialHandles from '@/types/SocialHandles';

describe('transformExternalIds', () => {
  it('should return correctly transformed data for defined ids', () => {
    const testIds: TMDBExternalIds = {
      facebook_id: 'test-facebook-id',
      instagram_id: 'test-instagram-id',
      twitter_id: 'test-twitter-id',
    };

    const expectedData: SocialHandles = {
      facebook: testIds.facebook_id,
      instagram: testIds.instagram_id,
      twitter: testIds.twitter_id,
    };

    expect(transformExternalIds(testIds)).toEqual(expectedData);
  });

  it('should return correctly transformed data for not defined ids', () => {
    const testIds: TMDBExternalIds = {
      facebook_id: '',
      instagram_id: '',
      twitter_id: '',
    };

    const expectedData: SocialHandles = {
      facebook: null,
      instagram: null,
      twitter: null,
    };

    expect(transformExternalIds(testIds)).toEqual(expectedData);
  });
});
