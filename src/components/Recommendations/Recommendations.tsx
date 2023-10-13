import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ShowScroller from '@/components/ShowScroller/ShowScroller';
import Show from '@/types/Show';

interface RecommendationsProps {
  shows: Show[];
}

export default function Recommendations({ shows }: RecommendationsProps) {
  return (
    <section className="w-full space-y-4 overflow-hidden">
      <SectionHeading>Recommendations</SectionHeading>
      <ShowScroller shows={shows} />
    </section>
  );
}
