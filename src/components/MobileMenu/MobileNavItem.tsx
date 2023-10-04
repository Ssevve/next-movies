import Link from 'next/link';

import { buttonVariants } from '@/components/ui/Button';
import { NavItemLink } from '@/types/NavItem';
import cn from '@/utils/cn';

interface MobileNavItemProps {
  path: string;
  label: string;
  links: NavItemLink[];
}

export default function MobileNavItem({ path, label, links }: MobileNavItemProps) {
  return (
    <div>
      <h2 className="mb-2 ml-4 text-lg font-semibold tracking-tight text-primary">{label}</h2>
      <ul className="mb-8 grid">
        {links.map(({ href, name }) => (
          <li key={href}>
            <Link
              className={cn(buttonVariants({ variant: 'ghost' }), 'w-full justify-start')}
              href={`${path}${href}`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
