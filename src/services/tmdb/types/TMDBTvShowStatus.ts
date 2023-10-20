import TMDBShowStatus from '@/services/TMDB/types/TMDBShowStatus';

type TMDBTvShowStatus = TMDBShowStatus | 'Pilot' | 'Returning Series' | 'Ended';

export default TMDBTvShowStatus;
