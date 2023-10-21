import ShowFacts, { ShowFactsProps } from '@/components/ShowFacts/ShowFacts';
import formatUSDString from '@/components/ShowFacts/utils/formatUSDString/formatUSDString';

interface MovieFactsProps extends ShowFactsProps {
  budget: number;
  revenue: number;
}

export default function MovieFacts({ status, budget, revenue, originalLanguage }: MovieFactsProps) {
  return (
    <div className="flex w-full max-w-xl flex-col justify-between gap-8 sm:flex-row">
      <ShowFacts status={status} originalLanguage={originalLanguage} />
      <div>
        <h3 className="font-semibold">Budget</h3>
        <span className="text-sm">{budget ? formatUSDString(budget) : '-'}</span>
      </div>
      <div>
        <h3 className="font-semibold">Revenue</h3>
        <span className="text-sm">{revenue ? formatUSDString(revenue) : '-'}</span>
      </div>
    </div>
  );
}
