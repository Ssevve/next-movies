import Hero from '@/components/Hero';
import TrendingShows from '@/components/TrendingShows';
import UpcomingMovies from '@/components/UpcomingMovies';
import WhatsPopular from '@/components/WhatsPopular';

export default async function Home() {
  return (
    <section className="grid w-full gap-12">
      <Hero />
      <TrendingShows />
      <UpcomingMovies />
      <WhatsPopular />
    </section>
  );
}
