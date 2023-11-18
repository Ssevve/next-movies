import { Person } from '@/types/Person';

import PersonImage from '../PersonImage/PersonImage';
import PersonShows from '../PersonShows/PersonShows';

export default function PersonCard({ name, imagePath, department, shows }: Person) {
  return (
    <div className="flex flex-col gap-4">
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
            {shows.length ? <PersonShows shows={shows} /> : 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
}
