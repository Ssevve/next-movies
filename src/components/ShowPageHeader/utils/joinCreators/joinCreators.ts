import { Creator } from '@/types/DetailedShow';

export default function joinCreators(creators: Creator[]) {
  return creators.map(({ name }) => name).join(', ');
}
