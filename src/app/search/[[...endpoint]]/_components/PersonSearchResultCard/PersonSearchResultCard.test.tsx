import { render, screen } from '@testing-library/react';

import PersonSearchResultCard from '@/app/search/[[...endpoint]]/_components/PersonSearchResultCard/PersonSearchResultCard';
import PersonSearchResult from '@/types/PersonSearchResult';

const searchResult: PersonSearchResult = {
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

const renderPersonSearchResultCard = (props?: Partial<PersonSearchResult>) => {
  return render(<PersonSearchResultCard {...searchResult} {...props} />);
};

describe('ShowSearchResultCard', () => {
  it('should render image if imagePath is specified', () => {
    renderPersonSearchResultCard();
    screen.getByAltText(searchResult.name);
  });

  it('should render <NoImage /> component if imagePath is not specified', () => {
    renderPersonSearchResultCard({ imagePath: '' });
    screen.getByTestId('no-image');
  });

  it('should render name', () => {
    renderPersonSearchResultCard();
    screen.getByText(searchResult.name);
  });

  it('should render department', () => {
    renderPersonSearchResultCard();
    screen.getByText(searchResult.department);
  });

  it('should render all show titles', () => {
    render(<PersonSearchResultCard {...searchResult} />);

    searchResult.shows.forEach(({ title }) => {
      screen.getByText(new RegExp(title));
    });
  });
});
