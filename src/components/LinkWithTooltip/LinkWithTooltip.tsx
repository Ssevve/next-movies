import Link from 'next/link';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip';
import cn from '@/lib/cn';

interface LinkWithTooltipProps extends React.PropsWithChildren<React.ComponentProps<typeof Link>> {
  tooltipText: string;
}

export default function LinkWithTooltip({
  tooltipText,
  href,
  children,
  className,
  ...props
}: LinkWithTooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger className={cn(className)}>
          <Link href={href} {...props} aria-label={tooltipText} target="_blank">
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <span>{tooltipText}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
