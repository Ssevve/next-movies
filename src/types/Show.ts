import ShowType from './ShowType';

export default interface Show {
  id: number;
  posterPath: string;
  title: string;
  rating: number;
  ratingsCount: number;
  showType: ShowType;
  releaseDate: string;
}
