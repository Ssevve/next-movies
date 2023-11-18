import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import cn from '@/lib/cn';
import { NavItemLink } from '@/types/NavItem';

interface DesktopNavDropdownProps {
  label: string;
  path: string;
  links: NavItemLink[];
}

export default function DesktopNavItem({ label, path, links }: DesktopNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div data-testid="desktop-nav-item">
      <DropdownMenu modal={false} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <span className="mr-1">{label}</span>
            <ChevronDown
              aria-hidden="true"
              className={cn('rotate-0 transition-transform duration-100', isOpen && 'rotate-180')}
              size={15}
            />
          </Button>
        </DropdownMenuTrigger>
        <div data-testid="desktop-nav-item-menu">
          <DropdownMenuContent hideWhenDetached align="end">
            {links.map(({ href, name }) => (
              <DropdownMenuItem key={href} asChild>
                <Link href={`${path}${href}`} className="h-full w-full text-sm">
                  {name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
}
