import cn from '@/lib/cn';
import CastPerson from '@/types/CastPerson';

import CastScroller from '../CastScroller/CastScroller';
import SectionHeading from '../SectionHeading/SectionHeading';

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
