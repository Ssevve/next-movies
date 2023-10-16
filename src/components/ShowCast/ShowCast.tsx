import CastScroller from '@/components/CastScroller/CastScroller';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import MovieCastPerson from '@/types/MovieCastPerson';

interface ShowCastProps {
  cast: MovieCastPerson[];
}

export default function ShowCast({ cast }: ShowCastProps) {
  return (
    <section className="overflow-hidden">
      <SectionHeading className="mb-4">Cast</SectionHeading>
      <CastScroller cast={cast} limit={9} />
    </section>
  );
}
