import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DesktopNavDropdown from '@/components/DesktopNav/DekstopNavDropdown';
import { navOptions } from '@/lib/constants';

describe('DesktopNavDropdown', () => {
  it('should render a trigger button with correct label', () => {
    const expectedOption = navOptions[0];
    render(
      <DesktopNavDropdown
        label={expectedOption.label}
        links={expectedOption.links}
        path={expectedOption.path}
      />
    );
    expect(screen.getByRole('button', { name: expectedOption.label })).toBeInTheDocument();
  });

  it('should render menu on trigger button click', async () => {
    const user = userEvent.setup();
    const expectedOption = navOptions[0];
    render(
      <DesktopNavDropdown
        label={expectedOption.label}
        links={expectedOption.links}
        path={expectedOption.path}
      />
    );

    await user.click(screen.getByRole('button', { name: expectedOption.label }));

    expect(screen.getByTestId('desktop-nav-dropdown-menu')).toBeInTheDocument();
  });

  it('should render menu with all links', async () => {
    const user = userEvent.setup();
    const expectedOption = navOptions[0];
    render(
      <DesktopNavDropdown
        label={expectedOption.label}
        links={expectedOption.links}
        path={expectedOption.path}
      />
    );

    await user.click(screen.getByRole('button', { name: expectedOption.label }));

    expect(screen.getAllByRole('link')).toHaveLength(expectedOption.links.length);
  });

  it('should render all links width correct "href" attribute', async () => {
    const user = userEvent.setup();
    const expectedOption = navOptions[0];
    render(
      <DesktopNavDropdown
        label={expectedOption.label}
        links={expectedOption.links}
        path={expectedOption.path}
      />
    );

    await user.click(screen.getByRole('button', { name: expectedOption.label }));

    expectedOption.links.forEach(({ name, href }) => {
      expect(screen.getByRole('link', { name })).toHaveAttribute(
        'href',
        href === '/' ? expectedOption.path : `${expectedOption.path}${href}`
      );
    });
  });
});
