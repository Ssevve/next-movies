interface TMDBReleaseDate {
  certification: string;
}

interface TMDBReleaseDatesResult {
  iso_3166_1: string;
  release_dates: TMDBReleaseDate[];
}

export default interface TMDBReleaseDates {
  results: TMDBReleaseDatesResult[];
}
