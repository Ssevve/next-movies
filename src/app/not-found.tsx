import Link from 'next/link';

import { buttonVariants } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-4">
      <h2 className="text-center text-3xl font-bold">Not Found!</h2>
      <p>Could not find requested resource</p>
      <Link className={buttonVariants({ variant: 'default' })} href="/">
        Return Home
      </Link>
    </div>
  );
}
