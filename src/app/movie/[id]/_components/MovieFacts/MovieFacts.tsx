import formatUSDString from '@/app/movie/[id]/_components/MovieFacts/utils/formatUSDString/formatUSDString';

interface MovieFactsProps {
  status: string;
  budget: number;
  revenue: number;
}

export default function MovieFacts({ status, budget, revenue }: MovieFactsProps) {
  return (
    <div className="flex w-full max-w-lg flex-col justify-between gap-8 sm:flex-row">
      <div>
        <h3 className="font-semibold">Status</h3>
        <span>{status}</span>
      </div>
      <div>
        <h3 className="font-semibold">Budget</h3>
        <span>{formatUSDString(budget)}</span>
      </div>
      <div>
        <h3 className="font-semibold">Revenue</h3>
        <span>{formatUSDString(revenue)}</span>
      </div>
    </div>
  );
}
