import { Facebook, Instagram, Link, Twitter } from 'lucide-react';

import LinkWithTooltip from '@/components/LinkWithTooltip/LinkWithTooltip';
import cn from '@/lib/cn';
import { SocialHandle } from '@/types/SocialHandles';

interface ShowExternalLinksProps {
  twitterHandle: SocialHandle;
  facebookHandle: SocialHandle;
  instagramHandle: SocialHandle;
  homepage: string;
  className?: string;
}

export default function ShowExternalLinks({
  twitterHandle,
  facebookHandle,
  instagramHandle,
  homepage,
  className,
}: ShowExternalLinksProps) {
  const hasSocialHandle = twitterHandle || facebookHandle || instagramHandle;
  return (
    <section className={cn('flex items-center', className)}>
      {hasSocialHandle && (
        <ul className="flex gap-2 pr-2">
          {twitterHandle && (
            <li>
              <LinkWithTooltip
                href={`https://www.twitter.com/${twitterHandle}`}
                tooltipText="Visit Twitter"
              >
                <Twitter aria-hidden="true" />
              </LinkWithTooltip>
            </li>
          )}
          {facebookHandle && (
            <li>
              <LinkWithTooltip
                href={`https://www.facebook.com/${facebookHandle}`}
                tooltipText="Visit Facebook"
              >
                <Facebook aria-hidden="true" />
              </LinkWithTooltip>
            </li>
          )}
          {instagramHandle && (
            <li>
              <LinkWithTooltip
                href={`https://www.instagram.com/${instagramHandle}`}
                tooltipText="Visit Instagram"
              >
                <Instagram aria-hidden="true" />
              </LinkWithTooltip>
            </li>
          )}
        </ul>
      )}
      {homepage && (
        <div className={hasSocialHandle ? 'border-l pl-2' : ''}>
          <LinkWithTooltip tooltipText="Visit Homepage" href={homepage}>
            <Link aria-hidden="true" />
          </LinkWithTooltip>
        </div>
      )}
    </section>
  );
}
