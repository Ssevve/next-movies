export interface TMDBPersonTvShow {
  id: number;
  media_type: 'tv';
  name: string;
}

export interface TMDBPersonMovie {
  id: number;
  title: string;
  media_type: 'movie';
}

export type TMDBPersonShow = TMDBPersonTvShow | TMDBPersonMovie;

export interface TMDBPerson {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  known_for: TMDBPersonShow[];
}
