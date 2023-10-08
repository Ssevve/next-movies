import formatUSDString from '@/utils/formatUSDString/formatUSDString';

interface MovieFactsProps {
  status: string;
  budget: number;
  revenue: number;
}

export default function MovieFacts({ status, budget, revenue }: MovieFactsProps) {
  return (
    <div className="flex w-full max-w-lg justify-between gap-8 lg:w-max lg:flex-col lg:justify-center">
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
