import TMDBShowStatus from '@/services/TMDB/types/TMDBShowStatus';

type TMDBMovieStatus = TMDBShowStatus | 'Post Production' | 'Released';

export default TMDBMovieStatus;
