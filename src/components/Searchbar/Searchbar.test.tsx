import { render, screen } from '@testing-library/react';

import Searchbar from '@/components/Searchbar/Searchbar';

describe('Searchbar', () => {
  it('should render form', () => {
    render(<Searchbar />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should render text input', () => {
    render(<Searchbar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render a submit button', () => {
    render(<Searchbar />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
