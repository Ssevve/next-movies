'use client';

import { MoveRight } from 'lucide-react';
import React, { useMemo, useState } from 'react';

import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import cn from '@/lib/cn';

export interface ScrollerProps {
  emptyMessage: string;
  wrapperClassName?: string;
  listClassName?: string;
  children: React.ReactNode;
  limit?: number;
}

export default function Scroller({
  emptyMessage,
  wrapperClassName,
  listClassName,
  children,
  limit = 0,
}: ScrollerProps) {
  const childrenCount = React.Children.count(children);
  const [visibleChildren, setVisibleChildren] = useState(limit ? limit : childrenCount);
  const hasMoreChildrenToShow = childrenCount > visibleChildren;

  const childrenToRender = useMemo(
    () => React.Children.toArray(children).slice(0, visibleChildren),
    [visibleChildren, children]
  );

  return childrenCount ? (
    <ScrollArea type="always" className={wrapperClassName}>
      <div className="flex">
        <ul className={cn('h-full', listClassName)}>
          {childrenToRender.map((child, i) => (
            <li key={i}>{child}</li>
          ))}
        </ul>
        {hasMoreChildrenToShow && (
          <button
            aria-label="Show More"
            className="my-auto flex w-max items-center gap-2 px-2 transition-all hover:gap-3"
            onClick={() => setVisibleChildren((prev) => prev + limit)}
          >
            <span className="w-max">Show more</span>
            <MoveRight aria-hidden="true" />
          </button>
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ) : (
    <p>{emptyMessage}</p>
  );
}
