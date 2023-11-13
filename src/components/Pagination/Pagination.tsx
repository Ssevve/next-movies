'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPagination from 'rc-pagination';

import { Button } from '@/components/ui/Button';

interface PaginationProps {
  totalItemCount: number;
  itemsPerPage: number;
}

export default function Pagination({ totalItemCount, itemsPerPage }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page) params.set('page', page.toString());
    else params.delete('page');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ReactPagination
      onChange={(page) => goToPage(page)}
      current={Number(searchParams.get('page')) || 1}
      total={totalItemCount}
      defaultPageSize={itemsPerPage}
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
