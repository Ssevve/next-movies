import { Metadata } from 'next';

import PaginatedPeople from '@/app/person/_components/PaginatedPeople/PaginatedPeople';
import getPopularPeople from '@/services/TMDB/api/getPopularPeople/getPopularPeople';

interface PeoplePageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: 'People | Next Movies',
};

export default async function PeoplePage({ searchParams }: PeoplePageProps) {
  const { page } = searchParams;
  const people = await getPopularPeople(Number(page) || 1);
  return (
    <section className="container grid gap-12 px-4 pb-4 pt-12">
      <PaginatedPeople people={people.results} totalPeople={people.totalResults} />
    </section>
  );
}
