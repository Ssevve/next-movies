export type TMDBVideoType =
  | 'Trailer'
  | 'Teaser'
  | 'Featurette'
  | 'Behind the Scenes'
  | 'Clip'
  | 'Bloopers'
  | 'Opening Credits';

export interface TMDBVideo {
  type: TMDBVideoType;
  key: string;
  name: string;
  id: string;
  site: string;
}
