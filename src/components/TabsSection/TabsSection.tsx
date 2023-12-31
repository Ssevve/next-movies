import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '@/components/ErrorFallback';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ShowScrollerSkeleton from '@/components/skeletons/ShowScrollerSkeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import Tab from '@/types/Tab';

interface TabsSectionProps {
  title: string;
  tabs: Tab[];
}

export default function TabsSection({ title, tabs }: TabsSectionProps) {
  return (
    <section className="w-full overflow-hidden">
      <Tabs defaultValue={tabs[0].label} className="w-full space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <SectionHeading>{title}</SectionHeading>
          <TabsList className="flex w-full max-w-xs">
            {tabs.map(({ label }) => (
              <TabsTrigger key={label} className="flex-1" value={label}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {tabs.map(({ label, content }) => (
          <Suspense key={label} fallback={<ShowScrollerSkeleton />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <TabsContent className="flex-1" value={label}>
                {content}
              </TabsContent>
            </ErrorBoundary>
          </Suspense>
        ))}
      </Tabs>
    </section>
  );
}
