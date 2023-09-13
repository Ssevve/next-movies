import Hero from '@/components/Hero';
import TrendingShows from '@/components/TrendingShows';
import WhatsPopular from '@/components/WhatsPopular';
import { getUpcomingMoviesTrailers } from '@/services/tmdb/api';

export default async function Home() {
  const test = await getUpcomingMoviesTrailers();
  console.log(test);
  return (
    <section className="grid w-full gap-8">
      <Hero />
      <TrendingShows />
      <WhatsPopular />
    </section>
  );
}
