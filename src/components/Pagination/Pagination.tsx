'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPagination from 'rc-pagination';

import { Button } from '@/components/ui/Button';

interface PaginationProps {
  totalItemCount: number;
  itemsPerPage: number;
  currentPage: number;
}

export default function Pagination({ totalItemCount, itemsPerPage, currentPage }: PaginationProps) {
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
      current={currentPage}
      total={totalItemCount}
      defaultPageSize={itemsPerPage}
      className=""
      hideOnSinglePage
      showTitle={false}
      prevIcon={
        <Button variant="outline" size="icon">
          <ChevronLeft size={16} />
        </Button>
      }
      nextIcon={
        <Button variant="outline" size="icon">
          <ChevronRight size={16} />
        </Button>
      }
      simple
    />
  );
}
