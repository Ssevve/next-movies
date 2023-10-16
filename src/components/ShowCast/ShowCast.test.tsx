import { render, screen } from '@testing-library/react';

import mockCast from '@/__mocks__/data/mockCast';
import ShowCast from '@/components/ShowCast/ShowCast';

describe('ShowCast', () => {
  it('should render correct heading', () => {
    render(<ShowCast cast={mockCast} />);
    expect(screen.getByRole('heading', { name: 'Cast' })).toBeInTheDocument();
  });

  it('should render <CastScroller /> component', () => {
    render(<ShowCast cast={mockCast} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
