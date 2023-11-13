import { useEffect, useRef } from 'react';

import { SearchCategoriesProps } from '@/app/search/[[...endpoint]]/_components/SearchCategories/SearchCategories';
import cn from '@/lib/cn';
import SearchEndpoint from '@/types/SearchEndpoint';

export default function useSearchCategories({
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

  return { generateHref, getLinkClassName, listRef };
}
