import { render, screen } from '@testing-library/react';

import mockTMDBPerson from '@/__mocks__/data/mockTMDBPerson';
import PersonSearchResultCard from '@/app/search/[[...endpoint]]/_components/PersonSearchResultCard/PersonSearchResultCard';
import transformPerson from '@/services/TMDB/utils/transformPerson/transformPerson';
import { Person } from '@/types/Person';

const testPerson = transformPerson(mockTMDBPerson[0]);
const renderPersonSearchResultCard = (props?: Partial<Person>) => {
  return render(<PersonSearchResultCard {...testPerson} {...props} />);
};

describe('ShowSearchResultCard', () => {
  it('should render general person information', () => {
    renderPersonSearchResultCard();
    screen.getByText(testPerson.name);
    screen.getByText(testPerson.department);
  });

  it('should render <PersonImage /> component  if imagePath is specified', () => {
    renderPersonSearchResultCard();
    screen.getByAltText(testPerson.name);
  });

  it('should render <NoImage /> component if imagePath is not specified', () => {
    renderPersonSearchResultCard({ imagePath: '' });
    screen.getByTestId('no-image');
  });

  it('should render <PersonShows /> component if shows are available', () => {
    renderPersonSearchResultCard({ shows: testPerson.shows });
    screen.getByText(testPerson.shows[0].title, { exact: false });
  });

  it('should render "N/A" if shows are not available', () => {
    renderPersonSearchResultCard({ shows: [] });
    screen.getByText('N/A');
  });
});
