import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return <h2 className={cn('text-2xl font-bold', className)}>{children}</h2>;
}
