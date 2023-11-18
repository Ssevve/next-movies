import { render, screen } from '@testing-library/react';

import PersonSearchResultCard from '@/app/search/[[...endpoint]]/_components/PersonSearchResultCard/PersonSearchResultCard';
import { Person } from '@/types/Person';

const searchResult: Person = {
  department: 'Acting',
  id: 1,
  imagePath: '/testPath',
  name: 'John Doe',
  shows: [
    {
      id: 33,
      showType: 'tv',
      title: 'testTvShow',
    },
    {
      id: 331,
      showType: 'movie',
      title: 'testMovie',
    },
  ],
};

const renderPersonSearchResultCard = (props?: Partial<Person>) => {
  return render(<PersonSearchResultCard {...searchResult} {...props} />);
};

describe('ShowSearchResultCard', () => {
  it('should render general person information', () => {
    renderPersonSearchResultCard();
    screen.getByText(searchResult.name);
    screen.getByText(searchResult.department);
  });

  it('should render image if imagePath is specified', () => {
    renderPersonSearchResultCard();
    screen.getByAltText(searchResult.name);
  });

  it('should render <NoImage /> component if imagePath is not specified', () => {
    renderPersonSearchResultCard({ imagePath: '' });
    screen.getByTestId('no-image');
  });

  it('should render <PersonShows /> component', () => {
    render(<PersonSearchResultCard {...searchResult} />);
    screen.getByText(searchResult.shows[0].title, { exact: false });
  });
});
