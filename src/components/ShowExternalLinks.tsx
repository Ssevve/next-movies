import { Facebook, Instagram, Link, Twitter } from 'lucide-react';

import LinkWithTooltip from '@/components/LinkWithTooltip/LinkWithTooltip';
import cn from '@/lib/cn';

interface ShowExternalLinksProps {
  twitterHandle: string;
  facebookHandle: string;
  instagramHandle: string;
  homepage: string;
  className: string;
}

export default function ShowExternalLinks({
  twitterHandle,
  facebookHandle,
  instagramHandle,
  homepage,
  className,
}: ShowExternalLinksProps) {
  return (
    <section
      className={cn(
        'flex items-center justify-center divide-x justify-self-start sm:justify-start',
        className
      )}
    >
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
      {homepage && (
        <div className="pl-2">
          <LinkWithTooltip tooltipText="Visit Homepage" href={homepage}>
            <Link aria-hidden="true" />
          </LinkWithTooltip>
        </div>
      )}
    </section>
  );
}
