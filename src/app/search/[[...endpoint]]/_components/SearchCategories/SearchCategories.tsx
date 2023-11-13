'use client';

import Link from 'next/link';

import useSearchCategories from '@/app/search/[[...endpoint]]/_components/SearchCategories/useSearchCategories';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import SearchCategory from '@/types/SearchCategory';
import SearchEndpoint from '@/types/SearchEndpoint';

export interface SearchCategoriesProps {
  categories: SearchCategory[];
  activeEndpoint: SearchEndpoint;
  query?: string;
}

export default function SearchCategories({
  categories,
  activeEndpoint,
  query,
}: SearchCategoriesProps) {
  const { generateHref, getLinkClassName, listRef } = useSearchCategories({
    activeEndpoint,
    categories,
    query,
  });

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
