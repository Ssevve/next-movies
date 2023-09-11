import { NextResponse } from 'next/server';

import { getTrendingShows, TimeWindow } from '@/services/tmdb/api';
import { ShowType } from '@/types/Show';

export async function GET(
  request: Request,
  { params }: { params: { showType: string; timeWindow: string } }
) {
  const showType = params.showType as ShowType;
  const timeWindow = params.timeWindow as TimeWindow;

  const data = await getTrendingShows({
    showType,
    timeWindow,
  });

  return NextResponse.json(data);
}
