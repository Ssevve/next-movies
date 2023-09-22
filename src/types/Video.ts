import ShowType from './ShowType';

export default interface Video {
  showTitle: string;
  showType: ShowType;
  showId: number;
  name: string;
  id: string;
  youtubeKey: string;
  thumbnailPath: string;
}
