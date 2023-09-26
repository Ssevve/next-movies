import { render, screen } from '@testing-library/react';

import DesktopNavigation from '@/components/DesktopNav/DesktopNav';
import { navOptions } from '@/lib/constants';

describe('DesktopNav', () => {
  it('should render correct amount of dropdown menus', () => {
    render(<DesktopNavigation />);
    expect(screen.getAllByTestId('desktop-nav-dropdown')).toHaveLength(navOptions.length);
  });
});
