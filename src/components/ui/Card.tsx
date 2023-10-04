import cn from '@/utils/cn';

export interface CardProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-md transition-transform duration-100 hover:scale-105',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
