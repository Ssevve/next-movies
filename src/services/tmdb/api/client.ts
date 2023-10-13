import { env } from '@/config/env';
import { TMDBUrls } from '@/services/TMDB/config';

function mergeOptions(options?: RequestInit) {
  const mergedOptions = { ...options };
  mergedOptions.headers = {
    ...mergedOptions.headers,
    accept: 'application/json',
    authorization: `Bearer ${env.TMDB_ACCESS_TOKEN}`,
  };
  return mergedOptions;
}

export default function TMDBApi(url: string, options?: RequestInit) {
  if (url.startsWith('/')) url = url.slice(1);
  return fetch(`${TMDBUrls.base}/${url}`, mergeOptions(options));
}
