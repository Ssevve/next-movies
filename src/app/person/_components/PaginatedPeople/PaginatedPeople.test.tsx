import { render, screen } from '@testing-library/react';

import mockTMDBPerson from '@/__mocks__/data/mockTMDBPerson';
import PaginatedPeople from '@/app/person/_components/PaginatedPeople/PaginatedPeople';
import transformPerson from '@/services/TMDB/utils/transformPerson/transformPerson';

const testPerson = transformPerson(mockTMDBPerson[0]);

describe('PaginatedPeople', () => {
  it('should render correct amount per page with "peoplePerPage" provided', () => {
    const testPeople = new Array(3).fill(testPerson);
    const expectedCount = 2;
    render(
      <PaginatedPeople
        peoplePerPage={expectedCount}
        people={testPeople}
        totalPeople={testPeople.length}
      />
    );
    expect(screen.getAllByTestId('person-card')).toHaveLength(expectedCount);
  });

  it('should render all of shows if "totalPeople" is less than peoplePerPage', () => {
    const testPeople = [testPerson];
    render(
      <PaginatedPeople people={testPeople} totalPeople={testPeople.length} peoplePerPage={20} />
    );
    expect(screen.getAllByTestId('person-card')).toHaveLength(testPeople.length);
  });

  it('should not render <Pagination /> component if "totalPeople" is less than "peoplePerPage"', () => {
    const testPeople = [testPerson];
    render(
      <PaginatedPeople peoplePerPage={20} people={testPeople} totalPeople={testPeople.length} />
    );
    expect(screen.queryByRole('button', { name: /previous page/i })).not.toBeInTheDocument();
  });

  it('should render <Pagination /> component if "totalPeople" length is greater than "peoplePerPage"', () => {
    const testPeople = new Array(3).fill(testPerson);
    render(
      <PaginatedPeople peoplePerPage={1} people={testPeople} totalPeople={testPeople.length} />
    );
    expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument();
  });
});
