import TMDBNetwork from '@/services/TMDB/types/TMDBNetwork';
import Network from '@/types/Network';

export default function transformTvShowNetworks(networks: TMDBNetwork[]): Network[] {
  if (!networks || !networks.length || !Array.isArray(networks)) return [];
  return networks.map(({ id, logo_path, name }) => ({ id, logoPath: logo_path, name }));
}
