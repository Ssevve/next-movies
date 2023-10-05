import Genre from '@/types/Genre';

export default function joinGenres(genres: Genre[]) {
  return genres.map(({ name }) => name).join(', ');
}
