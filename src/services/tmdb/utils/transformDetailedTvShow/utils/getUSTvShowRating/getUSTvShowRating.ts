import { TMDBContentRatings } from '@/services/TMDB/types/TMDBDetailedTvShow';

export default function getUSTvShowRating(contentRatings: TMDBContentRatings) {
  const UScontentRating = contentRatings.results.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
  return UScontentRating ? UScontentRating.rating : null;
}
