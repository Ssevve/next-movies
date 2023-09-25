import { render, screen } from '@testing-library/react';

import Logo from '@/components/Logo/Logo';

describe('Logo', () => {
  it('should render logo image', () => {
    render(<Logo />);
    expect(screen.getByAltText('Next Movies Logo')).toBeInTheDocument();
  });

  it('should render logo image with correct "src" attribute', () => {
    render(<Logo />);

    expect(screen.getByAltText('Next Movies Logo')).toHaveAttribute(
      'src',
      '/images/logo-image.svg'
    );
  });

  it('should render correct logo text', () => {
    render(<Logo />);
    expect(screen.getByText('Next Movies')).toBeInTheDocument();
  });
});
