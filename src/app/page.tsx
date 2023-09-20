import Hero from '@/components/Hero/Hero';
import UpcomingMovies from '@/components/UpcomingMovies';
import WhatsPopular from '@/components/WhatsPopular';
import YoutubeIframeModal from '@/components/YoutubeIframeModal';

import TrendingShows from '@/components/TrendingShows';

interface HomeProps {
  searchParams: Record<string, string> | undefined | null;
}

export default function Home({ searchParams }: HomeProps) {
  const youtubeModalVideoKey = searchParams?.play;
  return (
    <section className="grid w-full gap-12">
      {youtubeModalVideoKey && (
        <YoutubeIframeModal videoKey={youtubeModalVideoKey} />
      )}
      <Hero />
      <TrendingShows />
      <UpcomingMovies />
      <WhatsPopular />
    </section>
  );
}
