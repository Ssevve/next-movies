import dynamic from 'next/dynamic';

import Hero from '@/components/Hero/Hero';
import TrendingShows from '@/components/TrendingShows/TrendingShows';
import UpcomingMovies from '@/components/UpcomingMovies/UpcomingMovies';
import WhatsPopular from '@/components/WhatsPopular/WhatsPopular';

const YoutubeIframeModal = dynamic(
  () => import('@/components/YoutubeIframeModal/YoutubeIframeModal')
);

interface HomePageProps {
  searchParams: Record<string, string> | undefined | null;
}

export default function HomePage({ searchParams }: HomePageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  return (
    <section className="grid w-full gap-12">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <Hero />
      <TrendingShows />
      <UpcomingMovies />
      <WhatsPopular />
    </section>
  );
}
