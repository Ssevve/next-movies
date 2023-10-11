import React from 'react';

import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import cn from '@/lib/cn';

interface ScrollerProps {
  emptyMessage: string;
  wrapperClassName?: string;
  listClassName?: string;
  children: React.ReactNode;
}

export default function Scroller({
  emptyMessage,
  wrapperClassName,
  listClassName,
  children,
}: ScrollerProps) {
  const hasChildren = React.Children.count(children) > 0;
  return hasChildren ? (
    <ScrollArea type="always" className={wrapperClassName}>
      <ul className={listClassName}>
        {React.Children.map(children, (child, i) => (
          <li>{child}</li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ) : (
    <p>{emptyMessage}</p>
  );
}
