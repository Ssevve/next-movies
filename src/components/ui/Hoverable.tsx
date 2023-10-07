import cn from '@/lib/cn';

export interface HoverableProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export default function Hoverable({ children, className, ...props }: HoverableProps) {
  return (
    <div
      className={cn(
        'cursor-pointer overflow-hidden rounded-md transition-transform duration-100 hover:scale-105',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
