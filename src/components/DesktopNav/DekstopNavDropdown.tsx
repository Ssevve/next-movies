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
import { NavOptionLink } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface DesktopNavDropdownProps {
  label: string;
  path: string;
  links: NavOptionLink[];
}

export default function DesktopNavDropdown({ label, path, links }: DesktopNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div data-testid="desktop-nav-dropdown">
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
        <div data-testid="desktop-nav-dropdown-menu">
          <DropdownMenuContent hideWhenDetached align="end">
            {links.map(({ href, name }) => (
              <DropdownMenuItem key={href}>
                <Link href={`${path}${href}`} className="text-sm">
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
