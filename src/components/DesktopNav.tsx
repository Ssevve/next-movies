'use client';

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
import { NavOption } from '@/lib/constants';
import { navOptions } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface DesktopNavDropdownProps {
  option: NavOption;
}

function DesktopNavDropdown({ option }: DesktopNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu modal={false} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span className="mr-1">{option.label}</span>
          <ChevronDown
            className={cn(
              'rotate-0 transition-transform duration-100',
              isOpen && 'rotate-180'
            )}
            size={15}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent hideWhenDetached align="end">
        {option.children.map((child) => (
          <DropdownMenuItem key={child.href}>
            <Link href={`${option.path}/${child.href}`} className="text-sm">
              {child.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function DesktopNavigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {navOptions.map((option) => (
          <li key={option.path}>
            <DesktopNavDropdown option={option} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
