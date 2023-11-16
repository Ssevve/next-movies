import Show from '@/types/Show';

export default interface UpcomingMovie extends Show {
  id: number;
  thumbnailPath: string;
  releaseDate: string;
  title: string;
  showType: 'movie';
}
