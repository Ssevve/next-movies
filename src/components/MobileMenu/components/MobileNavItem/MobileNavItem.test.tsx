import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MobileNavItem from '@/components/MobileMenu/components/MobileNavItem/MobileNavItem';
import { navItems } from '@/lib/constants';

describe('MobileNavItem', () => {
  it('should render an item with correct heading', () => {
    const expectedItem = navItems[0];
    render(
      <MobileNavItem
        closeMenu={() => {}}
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );
    expect(screen.getByRole('heading', { level: 2, name: expectedItem.label })).toBeInTheDocument();
  });

  it('should render all links', () => {
    const expectedItem = navItems[0];
    render(
      <MobileNavItem
        closeMenu={() => {}}
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );
    expect(screen.getAllByRole('link')).toHaveLength(expectedItem.links.length);
  });

  it('should render all links width correct "href" attribute', () => {
    const expectedItem = navItems[0];
    render(
      <MobileNavItem
        closeMenu={() => {}}
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );

    expectedItem.links.forEach(({ name, href }) => {
      expect(screen.getByRole('link', { name })).toHaveAttribute(
        'href',
        href === '/' ? expectedItem.path : `${expectedItem.path}${href}`
      );
    });
  });

  it('should call "closeMenu" on link click', async () => {
    const user = userEvent.setup();
    const expectedItem = navItems[0];
    const expectedLink = navItems[0].links[0];
    const mockCloseMenu = jest.fn();
    render(
      <MobileNavItem
        closeMenu={mockCloseMenu}
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );

    await user.click(screen.getByRole('link', { name: expectedLink.name }));
    expect(mockCloseMenu).toHaveBeenCalledTimes(1);
  });
});
