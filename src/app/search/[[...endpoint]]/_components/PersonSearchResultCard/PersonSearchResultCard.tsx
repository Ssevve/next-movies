import Link from 'next/link';

import PersonImage from '@/components/PersonImage/PersonImage';
import { PersonSearchResult } from '@/types/SearchResult';

export default function PersonSearchResultCard({
  name,
  imagePath,
  department,
  shows,
}: PersonSearchResult) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      <div className="shrink-0">
        <PersonImage imagePath={imagePath} alt={name} />
      </div>
      <div className="flex flex-col items-center gap-2 sm:items-start">
        <div>
          <h3 className="font-bold">{name}</h3>
          <span className="block w-full text-center text-sm text-slate-400 sm:text-left">
            {department}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="mr-1 text-sm font-semibold">Known for:</span>
          <div className="flex flex-col flex-wrap text-center sm:flex-row sm:text-left">
            {shows.map(({ id, showType, title }, index) => (
              <Link
                key={id}
                href={`/${showType}/${id}`}
                className="mr-1 leading-none hover:underline"
              >
                <span className="text-xs italic">{`${title}${
                  index < shows.length - 1 ? ',' : ''
                }`}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
