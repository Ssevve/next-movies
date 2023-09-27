import { render, screen } from '@testing-library/react';

import DesktopNav from '@/components/DesktopNav/DesktopNav';
import { navItems } from '@/lib/constants';

describe('DesktopNav', () => {
  it('should render correct amount of dropdown menus', () => {
    render(<DesktopNav />);
    expect(screen.getAllByTestId('desktop-nav-item')).toHaveLength(navItems.length);
  });
});
