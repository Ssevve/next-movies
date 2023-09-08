export type ShowType = 'movie' | 'tv';

export interface Show {
  id: number;
  posterPath: string;
  title: string;
  rating: number;
  ratingsCount: number;
  showType: ShowType;
  releaseDate: string;
}
