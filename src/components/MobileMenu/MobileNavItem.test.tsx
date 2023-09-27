import { render, screen } from '@testing-library/react';

import MobileNavItem from '@/components/MobileMenu/MobileNavItem';
import { navItems } from '@/lib/constants';

describe('MobileNavItem', () => {
  it('should render an item with correct heading', () => {
    const expectedItem = navItems[0];
    render(
      <MobileNavItem
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
        label={expectedItem.label}
        links={expectedItem.links}
        path={expectedItem.path}
      />
    );
    expect(screen.getAllByRole('link')).toHaveLength(expectedItem.links.length);
  });

  it('should render all links width correct "href" attribute', async () => {
    const expectedItem = navItems[0];
    render(
      <MobileNavItem
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
});
