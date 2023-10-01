import ShowType from '@/types/ShowType';

export default interface Show {
  id: number;
  posterPath: string;
  title: string;
  userScore: number;
  userScoreCount: number;
  showType: ShowType;
  releaseDate: string;
  backdropPath: string;
}
