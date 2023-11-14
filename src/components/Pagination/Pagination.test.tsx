import { render, screen } from '@testing-library/react';

import Pagination from '@/components/Pagination/Pagination';

describe('Pagination', () => {
  it('should render correct amount of total pages', () => {
    render(<Pagination totalItemCount={100} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should render previous page jumper', () => {
    render(<Pagination totalItemCount={100} />);
    expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument();
  });

  it('should render page input', () => {
    render(<Pagination totalItemCount={100} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render next page jumper', () => {
    render(<Pagination totalItemCount={100} />);
    expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument();
  });
});
