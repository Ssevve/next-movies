import TMDBExternalIds from '@/services/TMDB/types/TMDBExternalIds';
import SocialHandles from '@/types/SocialHandles';

// TODO: tests
export default function transformExternalIds(externalIds: TMDBExternalIds): SocialHandles {
  return {
    facebook: externalIds['facebook_id'],
    instagram: externalIds['instagram_id'],
    twitter: externalIds['twitter_id'],
  };
}
