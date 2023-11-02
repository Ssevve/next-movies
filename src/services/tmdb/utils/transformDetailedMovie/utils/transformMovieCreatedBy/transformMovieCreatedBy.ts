import Creator from '@/types/Creator';

interface TMDBMovieCrewPerson {
  id: number;
  name: string;
  job: string;
}

// TODO: test
export default function transformMovieCreatedBy(crew: TMDBMovieCrewPerson[]): Creator[] {
  return crew.filter((person) => person.job === 'Director').map(({ name, id }) => ({ id, name }));
}
