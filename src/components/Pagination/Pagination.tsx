'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPagination from 'rc-pagination';

import { Button } from '@/components/ui/Button';
import { ITEMS_PER_PAGE, PAGINATED_ITEMS_COUNT_LIMIT } from '@/services/TMDB/config';

interface PaginationProps {
  totalItemCount: number;
}

export default function Pagination({ totalItemCount }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page) params.set('page', page.toString());
    else params.delete('page');
    replace(`${pathname}?${params.toString()}`);
  };

  const itemLimitExceeded = totalItemCount > PAGINATED_ITEMS_COUNT_LIMIT;

  return (
    <ReactPagination
      onChange={(page) => goToPage(page)}
      current={Number(searchParams.get('page')) || 1}
      total={itemLimitExceeded ? PAGINATED_ITEMS_COUNT_LIMIT : totalItemCount}
      defaultPageSize={ITEMS_PER_PAGE}
      hideOnSinglePage
      showTitle={false}
      simple
      prevIcon={
        <Button variant="outline" size="icon" aria-label="Previous page">
          <ChevronLeft size={16} aria-hidden="true" />
        </Button>
      }
      nextIcon={
        <Button variant="outline" size="icon" aria-label="Next page">
          <ChevronRight size={16} aria-hidden="true" />
        </Button>
      }
    />
  );
}
