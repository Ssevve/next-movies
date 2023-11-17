export interface TMDBShow {
  id: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
  backdrop_path: string | null;
}

export interface TMDBMovie extends TMDBShow {
  title: string;
  release_date?: string;
}

export interface TMDBTvShow extends TMDBShow {
  name: string;
  first_air_date?: string;
}

export type TMDBUnknownShow = TMDBMovie | TMDBTvShow;
