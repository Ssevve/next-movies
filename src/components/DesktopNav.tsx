import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

import { navOptions } from '@/lib/constants';

import { Button } from './ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';

export default function DesktopNavigation() {
  return (
    <nav>
      <ul className="flex gap-2">
        {navOptions.map((option) => (
          <li key={option.path}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <span className="mr-1">{option.label}</span>
                  <ChevronDown size={15} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {option.children.map((child) => (
                  <DropdownMenuItem key={child.href}>
                    <Link
                      href={`${option.path}/${child.href}`}
                      className="text-sm"
                    >
                      {child.text}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        ))}
      </ul>
    </nav>
  );
}
