import TMDBContentRatings from '@/services/TMDB/types/TMDBContentRatings';

// TODO: tests
export default function getUSTvShowRating(contentRatings: TMDBContentRatings) {
  const UScontentRating = contentRatings.results.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
  return UScontentRating ? UScontentRating.rating : null;
}
