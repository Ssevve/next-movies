import { render, screen } from '@testing-library/react';

import mockTMDBPerson from '@/__mocks__/data/mockTMDBPerson';
import PersonSearchResultCard from '@/app/search/[[...endpoint]]/_components/PersonSearchResultCard/PersonSearchResultCard';
import PersonCard from '@/components/PersonCard/PersonCard';
import transformPerson from '@/services/TMDB/utils/transformPerson/transformPerson';
import { Person } from '@/types/Person';

const testPerson = transformPerson(mockTMDBPerson[0]);

const renderPersonCard = (props?: Partial<Person>) => {
  return render(<PersonCard {...testPerson} {...props} />);
};

describe('PersonCard', () => {
  it('should render general person information', () => {
    renderPersonCard();
    screen.getByText(testPerson.name);
    screen.getByText(testPerson.department);
  });

  it('should render image if imagePath is specified', () => {
    renderPersonCard();
    screen.getByAltText(testPerson.name);
  });

  it('should render <NoImage /> component if imagePath is not specified', () => {
    renderPersonCard({ imagePath: '' });
    screen.getByTestId('no-image');
  });

  it('should render <PersonShows /> component if shows are available', () => {
    renderPersonCard({ shows: testPerson.shows });
    screen.getByText(testPerson.shows[0].title, { exact: false });
  });

  it('should render "N/A" if shows are not available', () => {
    renderPersonCard({ shows: [] });
    screen.getByText('N/A');
  });
});
