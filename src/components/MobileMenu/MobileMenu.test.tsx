import { render, screen } from '@testing-library/react';

import MobileMenu from '@/components/MobileMenu/MobileMenu';
import { navItems } from '@/lib/constants';

describe('MobileMenu', () => {
  it('should render correct amount of items', () => {
    render(<MobileMenu close={() => {}} />);
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(navItems.length);
  });
});
