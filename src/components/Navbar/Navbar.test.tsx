import { render, screen } from '@testing-library/react';

import Navbar from '@/components/Navbar/Navbar';

describe('Navbar', () => {
  it('should render <Logo /> component', () => {
    render(<Navbar />);
    expect(screen.getByAltText('Next Movies Logo')).toBeInTheDocument();
  });

  it('should render <Logo /> component', () => {
    render(<Navbar />);
    expect(screen.getByAltText('Next Movies Logo')).toBeInTheDocument();
  });

  it('should render <ThemeToggler /> component', () => {
    render(<Navbar />);
    expect(screen.getByTestId('theme-toggler')).toBeInTheDocument();
  });
});
