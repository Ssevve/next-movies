import { env } from '@/config/env';
import { urls } from '@/services/tmdb/config';

function mergeOptions(options?: RequestInit) {
  const mergedOptions = { ...options };
  mergedOptions.headers = {
    ...mergedOptions.headers,
    accept: 'application/json',
    authorization: `Bearer ${env.TMDB_ACCESS_TOKEN}`,
  };
  return mergedOptions;
}

export default function tmdbAPI(url: string, options?: RequestInit) {
  if (url.startsWith('/')) url = url.slice(1);
  return fetch(`${urls.base}/${url}`, mergeOptions(options));
}
