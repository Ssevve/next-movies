import { render, screen } from '@testing-library/react';

import Footer from '@/components/Footer/Footer';

describe('Footer', () => {
  it('should render logo', () => {
    render(<Footer />);
    expect(screen.getByAltText('Next Movies Logo')).toBeInTheDocument();
  });

  it('should render link to TMDB docs', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'TMDB link' })).toBeInTheDocument();
  });

  it('should render link to TMDB docs with correct "href" attribute', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'TMDB link' })).toHaveAttribute(
      'href',
      'https://developer.themoviedb.org/docs'
    );
  });

  it('should render TMDB logo', () => {
    render(<Footer />);
    expect(screen.getByRole('img', { name: 'TMDB logo' })).toBeInTheDocument();
  });

  it('should render link to the home page', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Next Movies' })).toBeInTheDocument();
  });

  it('should render link to the home page with correct "href" attribute', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Next Movies' })).toHaveAttribute('href', '/');
  });

  it('should render TMDB disclaimer', () => {
    render(<Footer />);

    expect(screen.getByTestId('TMDB-disclaimer')).toHaveTextContent(
      'This product uses the TMDB API but is not endorsed or certified by TMDB.'
    );
  });

  it('should correctly render copyright text', () => {
    render(<Footer />);

    expect(screen.getByTestId('copyright-text')).toHaveTextContent(
      '© 2023 Next Movies. All Rights Reserved.'
    );
  });
});
