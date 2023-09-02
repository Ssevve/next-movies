import { Menu } from 'lucide-react';
import Link from 'next/link';

import { navOptions } from '@/lib/constants';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/Accordion';
import { Button } from './ui/Button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/Sheet';

const navOptionsRender = navOptions.map((option) => (
  <Accordion type="single" key={option.path} collapsible>
    <AccordionItem value={option.label}>
      <AccordionTrigger>{option.label}</AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-2">
          {option.children.map((child) => (
            <li key={child.href}>
              <Link
                className="hover:underline"
                key={child.text}
                href={`${option.path}/${child.href}`}
              >
                {child.text}
              </Link>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
));

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-8" side="left">
        <SheetHeader className="sm:text-center">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <section>{navOptionsRender}</section>
      </SheetContent>
    </Sheet>
  );
}
