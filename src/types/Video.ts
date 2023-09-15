import ShowType from './ShowType';

export default interface Video {
  movieTitle: string;
  showType: ShowType;
  showId: number;
  name: string;
  id: string;
  youtubeKey: string;
  thumbnailPath: string;
}
