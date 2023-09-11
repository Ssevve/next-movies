import useSWR from 'swr';

import { TimeWindow } from '@/services/tmdb/api';
import { ShowType } from '@/types/Show';

function useTrending({
  showType,
  timeWindow,
}: {
  showType: ShowType;
  timeWindow: TimeWindow;
}) {
  const { data, error, isLoading } = useSWR(
    `/api/tmdb/trending/${showType}/${timeWindow}`,
    fetcher
  );

  return {
    isError: error,
    isLoading,
    user: data,
  };
}
