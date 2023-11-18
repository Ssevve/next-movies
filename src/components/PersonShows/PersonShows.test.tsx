import { render, screen } from '@testing-library/react';

import PersonShows from '@/components/PersonShows/PersonShows';
import { PersonShow } from '@/types/Person';

const testShows: PersonShow[] = [
  {
    id: 1,
    showType: 'tv',
    title: 'Test TV Show',
  },
  {
    id: 2,
    showType: 'movie',
    title: 'Test Movie',
  },
];

describe('PersonShows', () => {
  it('should render all shows', () => {
    render(<PersonShows shows={testShows} />);
    testShows.forEach(({ title }) => {
      screen.getByText(title, { exact: false });
    });
  });

  it('should render shows separated by a commas', () => {
    const expectedTitle = `${testShows[0].title},`;
    render(<PersonShows shows={testShows} />);
    screen.getByText(expectedTitle);
  });

  it('should render last show title without a comma', () => {
    const expectedTitle = testShows[1].title;
    render(<PersonShows shows={testShows} />);
    screen.getByText(expectedTitle);
  });
});
