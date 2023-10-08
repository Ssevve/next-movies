import CastScroller from '@/components/CastScroller/CastScroller';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import CastPerson from '@/types/CastPerson';

interface ShowCastProps {
  cast: CastPerson[];
}

export default function ShowCast({ cast }: ShowCastProps) {
  return (
    <section className="overflow-hidden">
      <SectionHeading className="mb-4">Cast</SectionHeading>
      <CastScroller cast={cast} />
    </section>
  );
}
