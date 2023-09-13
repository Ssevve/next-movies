import Hero from '@/components/Hero';
import TrendingShows from '@/components/TrendingShows';
import WhatsPopular from '@/components/WhatsPopular';

export default function Home() {
  return (
    <section className="grid w-full gap-8">
      <Hero />
      <TrendingShows />
      <WhatsPopular />
    </section>
  );
}
