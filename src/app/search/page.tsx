import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import RecentSeason from '@/app/tv/[id]/_components/RecentSeason/RecentSeason';
import TvShowFacts from '@/app/tv/[id]/_components/TvShowFacts/TvShowFacts';
import Recommendations from '@/components/Recommendations/Recommendations';
import ShowCast from '@/components/ShowCast/ShowCast';
import ShowMedia from '@/components/ShowMedia/ShowMedia';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import getDetailedTvShow from '@/services/TMDB/api/getDetailedTvShow/getDetailedTvShow';
import findTrailer from '@/utils/findTrailer/findTrailer';

const YoutubeIframeModal = dynamic(
  () => import('@/components/YoutubeIframeModal/YoutubeIframeModal')
);

interface TvShowPageProps {
  searchParams: {
    play?: string;
  };
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TvShowPageProps): Promise<Metadata> {
  const tvShowId = params.id;

  const { title, overview } = await getDetailedTvShow(Number(tvShowId));

  return {
    description: overview,
    title: `${title} | Next Movies`,
  };
}

export default async function SearchPage({ searchParams, params }: TvShowPageProps) {
  return <section className="flex w-full flex-col gap-12"></section>;
}
