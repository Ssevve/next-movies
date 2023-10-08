import MobileNavItem from '@/components/MobileMenu/components/MobileNavItem/MobileNavItem';
import useLockedBody from '@/hooks/useLockedBody';
import cn from '@/lib/cn';
import { navItems } from '@/lib/constants';

export default function MobileMenu() {
  useLockedBody(true);

  return (
    <div className="fixed inset-0 top-[72px] z-50 flex h-full w-full">
      <div className="fixed h-full w-screen bg-background opacity-50 duration-300 animate-in fade-in md:hidden" />
      <nav className="z-50 h-full w-full">
        <ul
          className={cn(
            'h-full w-[90%] max-w-[320px] border-r border-t bg-background p-4 shadow duration-200 animate-in slide-in-from-left md:hidden'
          )}
        >
          {navItems.map(({ label, path, links }) => (
            <li key={path}>
              <MobileNavItem label={label} links={links} path={path} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
