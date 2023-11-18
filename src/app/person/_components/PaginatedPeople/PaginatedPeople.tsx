import Pagination from '@/components/Pagination/Pagination';
import PersonCard from '@/components/PersonCard/PersonCard';
import { Person } from '@/types/Person';

interface PaginatedPeopleProps {
  peoplePerPage?: number;
  people: Person[];
  totalPeople: number;
}

export default function PaginatedPeople({
  peoplePerPage,
  people,
  totalPeople,
}: PaginatedPeopleProps) {
  const peopleToRender = peoplePerPage ? people.slice(0, peoplePerPage) : people;
  return (
    <>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-8">
        {peopleToRender.map(({ id, department, imagePath, name, shows }) => (
          <li key={id} className="shrink-1 basis-1/3 sm:basis-1/4 md:basis-1/6">
            <PersonCard
              id={id}
              department={department}
              imagePath={imagePath}
              name={name}
              shows={shows}
            />
          </li>
        ))}
      </ul>
      <Pagination totalItemCount={totalPeople} itemsPerPage={peoplePerPage} />
    </>
  );
}
