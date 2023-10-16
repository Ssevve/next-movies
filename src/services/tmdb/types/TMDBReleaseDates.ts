interface TMDBReleaseDatesResult {
  iso_3166_1: string;
  release_dates: {
    certification: string;
  }[];
}

export default interface TMDBReleaseDates {
  results: TMDBReleaseDatesResult[];
}
