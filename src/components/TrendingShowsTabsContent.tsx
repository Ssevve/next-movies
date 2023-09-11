'use client';

import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import useSWR from 'swr';

import { TrendingResponse } from '@/services/tmdb/api';
import { Show } from '@/types/Show';

import { ErrorFallback } from './ErrorFallback';
import ShowScroller from './ShowScroller';
import ShowScrollerSkeleton from './skeletons/ShowScrollerSkeleton';
import { Button } from './ui/Button';
import { TabsContent } from './ui/Tabs';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TrendingShowsTabsContent() {
  const [timeWindow, setTimeWindow] = useState('day');
  const { data: shows, error } = useSWR<TrendingResponse>(
    `/api/tmdb/trending/all/${timeWindow}`,
    fetcher,
    { suspense: true }
  );

  return (
    <>
      <Button onClick={() => setTimeWindow('day')}>Today</Button>
      <Button onClick={() => setTimeWindow('week')}>This Week</Button>
      <ShowScroller shows={shows} />
    </>
  );
}
