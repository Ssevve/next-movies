import { Loader2, LucideProps } from 'lucide-react';

interface SpinnerProps {
  size?: LucideProps['size'];
}

export default function Spinner({ size = 28 }: SpinnerProps) {
  return (
    <div>
      <Loader2 size={size} className="animate-spin text-primary" />
    </div>
  );
}
