import { render, screen } from '@testing-library/react';

import mockMovieCast from '@/__mocks__/data/mockMovieCast';
import ShowCast from '@/components/ShowCast/ShowCast';

describe('ShowCast', () => {
  it('should render correct heading', () => {
    render(<ShowCast cast={mockMovieCast} />);
    expect(screen.getByRole('heading', { name: 'Cast' })).toBeInTheDocument();
  });

  it('should render <CastScroller /> component', () => {
    render(<ShowCast cast={mockMovieCast} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
