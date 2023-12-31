import { render, screen } from '@testing-library/react';

import mockShows from '@/__mocks__/data/mockShows';
import Recommendations from '@/components//Recommendations/Recommendations';

describe('Recommendations', () => {
  it('should render <ShowScroller /> component', async () => {
    render(<Recommendations shows={mockShows} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render correct heading', async () => {
    render(<Recommendations shows={mockShows} />);
    expect(screen.getByRole('heading', { name: 'Recommendations' })).toBeInTheDocument();
  });

  it('should render all shows', async () => {
    render(<Recommendations shows={mockShows} />);
    mockShows.forEach(({ title }) => screen.getByText(title));
  });
});
