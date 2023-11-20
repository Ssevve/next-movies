export interface ShowFactsProps {
  status: string;
  originalLanguage: string;
}

export default function ShowFacts({ status, originalLanguage }: ShowFactsProps) {
  return (
    <>
      <div>
        <h3 className="font-semibold">Status</h3>
        <span className="text-sm">{status}</span>
      </div>
      <div>
        <h3 className="font-semibold">Original Language</h3>
        <span className="text-sm">{originalLanguage || '-'}</span>
      </div>
    </>
  );
}
