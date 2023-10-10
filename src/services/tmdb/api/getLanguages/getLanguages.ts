import 'server-only';

import tmdbAPI from '@/services/tmdb/api/client';
import TMDBLanguage from '@/services/tmdb/types/TMDBLanguage';

export default async function getLanguages(): Promise<Record<string, string>> {
  const languagesMap: Record<string, string> = {};

  const res = await tmdbAPI(`/configuration/languages`);
  if (!res.ok) throw Error('Failed to fetch languages.');
  const tmdbLanguages: TMDBLanguage[] = await res.json();

  tmdbLanguages.forEach(({ iso_639_1, english_name }) => {
    languagesMap[iso_639_1] = english_name;
  });

  return languagesMap;
}
