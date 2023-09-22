import Link from 'next/link';

import useLockedBody from '@/hooks/useLockedBody';
import { NavOption, navOptions } from '@/lib/constants';
import { cn } from '@/lib/utils';

import { buttonVariants } from './ui/Button';

interface NavOptionProps {
  option: NavOption;
}

function NavOption({ option }: NavOptionProps) {
  return (
    <div>
      <h2 className="mb-2 ml-4 text-lg font-semibold tracking-tight text-primary">
        {option.label}
      </h2>
      <ul className="mb-8 grid">
        {option.children.map((child) => (
          <li key={child.href}>
            <Link
              className={cn(buttonVariants({ variant: 'ghost' }), 'w-full justify-start')}
              href={`${option.path}/${child.href}`}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MobileMenu() {
  useLockedBody(true);

  return (
    <div className="fixed inset-0 top-[72px] z-50 flex h-full w-full">
      <div className="fixed h-full w-screen bg-background opacity-50 duration-300 animate-in fade-in md:hidden" />
      <div
        className={cn(
          'z-10 w-[90%] max-w-[320px] border-r border-t bg-background p-4 shadow duration-200 animate-in slide-in-from-left md:hidden'
        )}
      >
        {navOptions.map((option) => (
          <NavOption key={option.path} option={option} />
        ))}
      </div>
    </div>
  );
}
