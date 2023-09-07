import Link from 'next/link';

import useLockedBody from '@/hooks/useLockedBody';
import { navOptions } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function MobileMenu() {
  useLockedBody();

  return (
    <div className="fixed inset-0 top-[72px] z-50 flex h-full w-full">
      <div className="fixed h-full w-screen bg-background opacity-50 duration-300 animate-in fade-in md:hidden" />
      <div
        className={cn(
          'z-10 w-[90%] max-w-[320px] border-r border-t bg-background p-4 shadow duration-200 animate-in slide-in-from-left md:hidden'
        )}
      >
        {navOptions.map((option) => (
          <>
            <h2 className="mb-2 mt-8 text-lg font-semibold tracking-tight text-primary first:mt-0">
              {option.label}
            </h2>
            <ul>
              <li className="space-y-1">
                {option.children.map((child) => (
                  <Link
                    key={child.href}
                    href={`${option.path}/${child.href}`}
                    className="block w-full justify-start hover:underline"
                  >
                    {child.label}
                  </Link>
                ))}
              </li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
}
