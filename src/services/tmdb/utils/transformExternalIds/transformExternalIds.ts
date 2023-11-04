import TMDBExternalIds from '@/services/TMDB/types/TMDBExternalIds';
import SocialHandles from '@/types/SocialHandles';

export default function transformExternalIds(externalIds: TMDBExternalIds): SocialHandles {
  return {
    facebook: externalIds['facebook_id'] || null,
    instagram: externalIds['instagram_id'] || null,
    twitter: externalIds['twitter_id'] || null,
  };
}
