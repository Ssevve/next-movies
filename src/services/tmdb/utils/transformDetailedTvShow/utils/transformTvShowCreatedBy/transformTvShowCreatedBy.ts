import Creator from '@/types/Creator';

interface TMDBTvShowCreatedBy {
  id: number;
  name: string;
}

// TODO: tests
export default function transformTvShowCreatedBy(createdBy: TMDBTvShowCreatedBy[]): Creator[] {
  return createdBy.map(({ id, name }) => ({ id, name }));
}
