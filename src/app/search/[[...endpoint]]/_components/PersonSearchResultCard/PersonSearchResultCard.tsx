import PersonImage from '@/components/PersonImage/PersonImage';
import PersonShows from '@/components/PersonShows/PersonShows';
import { PersonShow } from '@/types/Person';

interface PersonSearchResultCardProps {
  name: string;
  imagePath: string;
  department: string;
  shows: PersonShow[];
}

export default function PersonSearchResultCard({
  name,
  imagePath,
  department,
  shows,
}: PersonSearchResultCardProps) {
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
            {shows.length ? <PersonShows shows={shows} /> : 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
}
