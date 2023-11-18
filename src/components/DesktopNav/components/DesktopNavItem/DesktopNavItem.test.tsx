import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DesktopNavItem from '@/components/DesktopNav/components/DesktopNavItem/DesktopNavItem';
import { navItems } from '@/lib/constants';

describe('DesktopNavItem', () => {
  it('should render a trigger button with correct label', () => {
    const expectedItem = navItems[0];
    render(
      <DesktopNavItem
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );
    expect(screen.getByRole('button', { name: expectedItem.label })).toBeInTheDocument();
  });

  it('should render menu on trigger button click', async () => {
    const user = userEvent.setup();
    const expectedItem = navItems[0];
    render(
      <DesktopNavItem
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );

    await user.click(screen.getByRole('button', { name: expectedItem.label }));

    expect(screen.getByTestId('desktop-nav-item-menu')).toBeInTheDocument();
  });

  it('should render menu with all links', async () => {
    const user = userEvent.setup();
    const expectedItem = navItems[0];
    render(
      <DesktopNavItem
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );

    await user.click(screen.getByRole('button', { name: expectedItem.label }));

    expect(screen.getAllByRole('menuitem')).toHaveLength(expectedItem.links.length);
  });

  it('should render all links width correct "href" attribute', async () => {
    const user = userEvent.setup();
    const expectedItem = navItems[0];
    render(
      <DesktopNavItem
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );

    await user.click(screen.getByRole('button', { name: expectedItem.label }));

    expectedItem.links.forEach(({ name, href }) => {
      expect(screen.getByRole('menuitem', { name })).toHaveAttribute(
        'href',
        href === '/' ? expectedItem.path : `${expectedItem.path}${href}`
      );
    });
  });
});
