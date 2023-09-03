import { navOptions } from '@/lib/constants';

import DesktopNavDropdown from './DesktopNavDropdown';

export default function DesktopNavigation() {
  return (
    <nav>
      <ul className="flex gap-2">
        {navOptions.map((option) => (
          <li key={option.path}>
            <DesktopNavDropdown option={option} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
