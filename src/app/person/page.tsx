import { Metadata } from 'next';

import Pagination from '@/components/Pagination/Pagination';
import PersonCard from '@/components/PersonCard/PersonCard';
import getPopularPeople from '@/services/TMDB/api/getPopularPeople/getPopularPeople';

interface PeoplePageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'People | Next Movies',
};

// TODO: test
export default async function PeoplePage({ searchParams }: PeoplePageProps) {
  const { page } = searchParams;
  const people = await getPopularPeople(Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-8">
        {people.results.map(({ id, department, imagePath, name, shows }) => (
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
      <Pagination totalItemCount={people.totalResults} itemsPerPage={20} />
    </section>
  );
}
