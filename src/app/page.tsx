import dynamic from 'next/dynamic';

import TrendingShows from '@/app/_components/TrendingShows/TrendingShows';
import UpcomingMovies from '@/app/_components/UpcomingMovies/UpcomingMovies';
import WhatsPopular from '@/app/_components/WhatsPopular/WhatsPopular';
import Hero from '@/components/Hero/Hero';

const YoutubeIframeModal = dynamic(
  () => import('@/components/YoutubeIframeModal/YoutubeIframeModal')
);

interface HomePageProps {
  searchParams: Record<string, string> | undefined | null;
}

export default function HomePage({ searchParams }: HomePageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  return (
    <section className="container grid w-full gap-12 p-4">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <Hero />
      <TrendingShows />
      <UpcomingMovies />
      <WhatsPopular />
    </section>
  );
}
