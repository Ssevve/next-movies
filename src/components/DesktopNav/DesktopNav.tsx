import DesktopNavItem from '@/components/DesktopNav/DesktopNavItem';
import { navItems } from '@/lib/constants';

export default function DesktopNav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {navItems.map(({ label, path, links }) => (
          <li key={path}>
            <DesktopNavItem label={label} path={path} links={links} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
