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
import { cn } from '@/lib/utils';
import NavOption from '@/types/NavOption';

interface DesktopNavDropdownProps {
  option: NavOption;
}

export default function DesktopNavDropdown({
  option,
}: DesktopNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={() => setIsOpen((prev) => !prev)}>
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
      <DropdownMenuContent align="end">
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
