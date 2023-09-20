import Hero from '@/components/Hero/Hero';

import { screen, render } from '@testing-library/react';

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

  it('should render a text input', () => {
    render(<Hero />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render a submit button', () => {
    render(<Hero />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
