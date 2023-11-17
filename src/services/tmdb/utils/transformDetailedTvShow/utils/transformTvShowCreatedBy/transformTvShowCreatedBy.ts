import { Creator } from '@/types/DetailedShow';

export default function transformTvShowCreatedBy(createdBy: Creator[]): Creator[] {
  if (!createdBy || !createdBy.length || !Array.isArray(createdBy)) return [];
  return createdBy.map(({ id, name }) => ({ id, name }));
}
