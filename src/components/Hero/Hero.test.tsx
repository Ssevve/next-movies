import { render, screen } from '@testing-library/react';

import Hero from '@/components/Hero/Hero';

describe('Hero', () => {
  it('should render a correct heading', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Unlimited movies, TV shows, and more',
      })
    ).toBeInTheDocument();
  });

  it('should render a correct paragraph', () => {
    render(<Hero />);
    expect(
      screen.getByText('Find the latest and greatest movies and TV shows.')
    ).toBeInTheDocument();
  });

  it('should render <Searchbar /> component', () => {
    render(<Hero />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
