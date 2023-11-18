import Link from 'next/link';

import { PersonShow } from '@/types/Person';

export default function PersonShows({ shows }: { shows: PersonShow[] }) {
  return shows.map(({ id, showType, title }, index) => (
    <Link key={id} href={`/${showType}/${id}`} className="mr-1 leading-none hover:underline">
      <span className="text-xs italic">{`${title}${index < shows.length - 1 ? ',' : ''}`}</span>
    </Link>
  ));
}
