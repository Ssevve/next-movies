import Creator from '@/types/Creator';

export default function joinCreators(creators: Creator[]) {
  return creators.map(({ name }) => name).join(', ');
}
