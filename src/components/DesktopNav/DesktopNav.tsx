import { navOptions } from '@/lib/constants';

import DesktopNavDropdown from './DekstopNavDropdown';

export default function DesktopNav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {navOptions.map(({ label, path, links }) => (
          <li key={path}>
            <DesktopNavDropdown label={label} path={path} links={links} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
