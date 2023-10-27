'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import cn from '@/lib/cn';
import SearchCategory from '@/types/SearchCategory';
import SearchEndpoint from '@/types/SearchEndpoint';

interface SearchCategoriesProps {
  categories: SearchCategory[];
  activeEndpoint: SearchEndpoint;
  query?: string;
}

export default function SearchCategories({
  categories,
  activeEndpoint,
  query,
}: SearchCategoriesProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const endpointIndex = categories.findIndex(
        (category) => category.endpoint === activeEndpoint
      );
      listRef.current.children.item(endpointIndex)?.scrollIntoView({ block: 'center' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeEndpoint]);

  const generateHref = (endpoint: string) => `/search/${endpoint}?query=${query}`;

  const getLinkClassName = (linkEndpoint: SearchEndpoint) =>
    cn(
      'p-4 flex gap-4 min-w-max items-center justify-between w-full hover:bg-slate-50 dark:hover:bg-slate-900',
      linkEndpoint === activeEndpoint &&
        'bg-slate-100 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
    );

  return (
    <div className="h-max rounded-md border border-slate-100 dark:border-slate-700">
      <ScrollArea>
        <ul
          ref={listRef}
          className="flex h-max justify-between divide-x divide-slate-100 dark:divide-slate-700 sm:flex-col sm:divide-x-0 sm:divide-y md:w-64"
        >
          {categories.map(({ endpoint, label, total }) => (
            <li key={endpoint} className="flex-1">
              <Link
                data-testid={`${endpoint}-link`}
                className={getLinkClassName(endpoint)}
                href={generateHref(endpoint)}
              >
                <span>{label}</span>
                <span className="min-w-[45px] rounded-full bg-slate-200 px-2 py-1 text-center text-sm dark:bg-slate-800 dark:text-foreground">
                  {total}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
