import { render, screen } from '@testing-library/react';

import Creators from '@/components/Creators/Creators';
import Creator from '@/types/Creator';

describe('Creators', () => {
  it('should render correctly creators', () => {
    const expectedCreators: Creator[] = [
      {
        id: 1,
        name: 'Test Creator 1',
      },
      {
        id: 2,
        name: 'Test Creator 2',
      },
    ];
    render(<Creators creators={expectedCreators} showType="movie" />);
    expect(screen.getByText('Test Creator 1, Test Creator 2')).toBeInTheDocument();
  });

  it('should render "Directed by" for movies', () => {
    const expectedCreators: Creator[] = [
      {
        id: 1,
        name: 'Test Creator 1',
      },
      {
        id: 2,
        name: 'Test Creator 2',
      },
    ];
    render(<Creators creators={expectedCreators} showType="movie" />);
    expect(screen.getByText('Directed by:')).toBeInTheDocument();
  });

  it('should render "Created by" for TV shows', () => {
    const expectedCreators: Creator[] = [
      {
        id: 1,
        name: 'Test Creator 1',
      },
      {
        id: 2,
        name: 'Test Creator 2',
      },
    ];
    render(<Creators creators={expectedCreators} showType="tv" />);
    expect(screen.getByText('Created by:')).toBeInTheDocument();
  });
});
