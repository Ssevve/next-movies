import Image from 'next/image';

import formatUSDString from '@/components/ShowFacts/utils/formatUSDString/formatUSDString';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import Network from '@/types/Network';

interface MovieFacts {
  budget: number;
  revenue: number;
  type?: never;
  networks?: never;
}

interface TvShowFacts {
  type: string;
  networks: Network[];
  budget?: never;
  revenue?: never;
}

type ShowFactsProps = { status: string; originalLanguage: string } & (MovieFacts | TvShowFacts);

export default function ShowFacts({
  status,
  budget,
  revenue,
  originalLanguage,
  type,
  networks,
}: ShowFactsProps) {
  const hasBudget = budget !== undefined;
  const hasRevenue = revenue !== undefined;

  return (
    <div className="flex w-full max-w-xl flex-col justify-between gap-8 sm:flex-row">
      <div>
        <h3 className="font-semibold">Status</h3>
        <span className="text-sm">{status}</span>
      </div>
      <div>
        <h3 className="font-semibold">Original Language</h3>
        <span className="text-sm">{originalLanguage || '-'}</span>
      </div>
      {hasBudget && (
        <div>
          <h3 className="font-semibold">Budget</h3>
          <span className="text-sm">{formatUSDString(budget)}</span>
        </div>
      )}
      {hasRevenue && (
        <div>
          <h3 className="font-semibold">Revenue</h3>
          <span className="text-sm">{formatUSDString(revenue)}</span>
        </div>
      )}
      {type && (
        <div>
          <h3 className="font-semibold">Type</h3>
          <span className="text-sm">{type}</span>
        </div>
      )}
      {networks && (
        <div>
          <h3 className="font-semibold">Networks</h3>
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
      )}
    </div>
  );
}
