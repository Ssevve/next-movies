import TMDBNetwork from '@/services/TMDB/types/TMDBNetwork';
import Network from '@/types/Network';

// TODO: tests
export default function transformTvShowNetworks(networks: TMDBNetwork[]): Network[] {
  return networks.map(({ id, logo_path, name }) => ({ id, logoPath: logo_path, name }));
}
