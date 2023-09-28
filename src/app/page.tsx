import Hero from '@/components/Hero/Hero';
import TrendingShows from '@/components/TrendingShows/TrendingShows';
import UpcomingMovies from '@/components/UpcomingMovies';
import WhatsPopular from '@/components/WhatsPopular/WhatsPopular';
import YoutubeIframeModal from '@/components/YoutubeIframeModal/YoutubeIframeModal';

interface HomeProps {
  searchParams: Record<string, string> | undefined | null;
}

export default function Home({ searchParams }: HomeProps) {
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
