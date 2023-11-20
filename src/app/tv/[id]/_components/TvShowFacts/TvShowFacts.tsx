import Image from 'next/image';

import ShowFacts, { ShowFactsProps } from '@/components/ShowFacts/ShowFacts';
import { TMDBTvShowType } from '@/services/TMDB/types/TMDBDetailedTvShow';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import { Network } from '@/types/DetailedTvShow';

interface TvShowFacts extends ShowFactsProps {
  networks: Network[];
  type: TMDBTvShowType;
}

export default function TvShowFacts({ status, networks, type, originalLanguage }: TvShowFacts) {
  const hasMultipleNetworks = networks.length > 1;
  return (
    <div className="flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:gap-16">
      <ShowFacts status={status} originalLanguage={originalLanguage} />
      <div>
        <h3 className="font-semibold">Type</h3>
        <span className="text-sm">{type}</span>
      </div>
      <div>
        <h3 className="font-semibold">{hasMultipleNetworks ? 'Networks' : 'Network'}</h3>
        {networks.length ? (
          <ul className="mt-1 flex flex-col gap-2 md:flex-row md:items-center">
            {networks.map(({ name, id, logoPath }) => (
              <li key={id}>
                <Image src={getTMDBImagePath(logoPath)} alt={name} width={75} height={37.5} />
              </li>
            ))}
          </ul>
        ) : (
          <span>-</span>
        )}
      </div>
    </div>
  );
}
