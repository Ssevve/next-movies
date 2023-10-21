export interface ShowFactsProps {
  status: string;
  originalLanguage: string;
}

export default function ShowFacts({ status, originalLanguage }: ShowFactsProps) {
  return (
    // <div className="flex w-full max-w-xl flex-col justify-between gap-8 sm:flex-row">
    <>
      <div>
        <h3 className="font-semibold">Status</h3>
        <span className="text-sm">{status}</span>
      </div>
      <div>
        <h3 className="font-semibold">Original Language</h3>
        <span className="text-sm">{originalLanguage || '-'}</span>
      </div>
      {/* {type && (
        <div>
          <h3 className="font-semibold">Type</h3>
          <span className="text-sm">{type}</span>
        </div>
      )} */}
      {/* {networks && (
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
      )} */}
    </>
    // </div>
  );
}
