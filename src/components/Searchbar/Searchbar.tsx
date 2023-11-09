'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { Button } from '@/components/ui/Button';

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const goToSearch = (e: FormEvent) => {
    e.preventDefault();

    if (query) router.push(`/search?query=${query}`);
    else router.push(`/search`);
  };

  return (
    <form
      onSubmit={goToSearch}
      className="flex w-full max-w-lg flex-col items-center gap-2 xs:flex-row xs:gap-0"
      aria-label="Search"
    >
      <input
        value={query}
        type="text"
        onChange={(e) => setQuery(e.currentTarget.value)}
        placeholder="Search for shows and people"
        className="h-10 w-full rounded-md border p-4 placeholder:text-sm placeholder:leading-none dark:border-foreground dark:bg-foreground dark:text-background xs:rounded-r-none"
      />
      <Button
        type="submit"
        className="flex h-10 w-full gap-2 border border-primary dark:text-foreground xs:w-max xs:rounded-l-none"
      >
        <Search size={20} aria-hidden="true" />
        <span>Search</span>
      </Button>
    </form>
  );
}
