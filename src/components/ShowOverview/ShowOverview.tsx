import SectionHeading from '@/components/SectionHeading/SectionHeading';

interface ShowOverviewProps {
  overview: string;
}

export default function ShowOverview({ overview }: ShowOverviewProps) {
  return (
    <section>
      <SectionHeading>Overview</SectionHeading>
      <p className="mt-2 max-w-4xl font-normal">{overview}</p>
    </section>
  );
}
