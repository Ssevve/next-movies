import { Genre } from '@/types/DetailedShow';

export default function joinGenres(genres: Genre[]) {
  return genres.map(({ name }) => name).join(', ');
}
