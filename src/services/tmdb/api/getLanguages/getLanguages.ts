import 'server-only';

import TMDBApi from '@/services/TMDB/api/client';
import TMDBLanguage from '@/services/TMDB/types/TMDBLanguage';

export default async function getLanguages(): Promise<Record<string, string>> {
  const languagesMap: Record<string, string> = {};

  const res = await TMDBApi(`/configuration/languages`);
  if (!res.ok) throw Error('Failed to fetch languages.');
  const tmdbLanguages: TMDBLanguage[] = await res.json();

  tmdbLanguages.forEach(({ iso_639_1, english_name }) => {
    languagesMap[iso_639_1] = english_name;
  });

  return languagesMap;
}
