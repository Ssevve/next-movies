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
    <form onSubmit={goToSearch} className="flex max-w-sm items-center" aria-label="Search">
      <input
        value={query}
        type="text"
        onChange={(e) => setQuery(e.currentTarget.value)}
        placeholder="Search for shows and people"
        className="h-full rounded-md rounded-r-none border p-2 placeholder:text-sm placeholder:leading-none dark:border-foreground dark:bg-foreground dark:text-background"
      />
      <Button
        type="submit"
        className="flex h-full gap-2 rounded-l-none border border-primary dark:text-foreground"
      >
        <Search size={20} />
        <span>Search</span>
      </Button>
    </form>
  );
}
