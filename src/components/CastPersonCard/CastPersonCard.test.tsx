import { render, screen } from '@testing-library/react';

import PersonCard from '@/components/CastPersonCard/CastPersonCard';
import { MovieCastPerson } from '@/types/DetailedMovie';

const testImagePath = '/testImage.jpg';

describe('PersonCard', () => {
  it('should render <PersonImage /> component', () => {
    const expectedPerson: MovieCastPerson = {
      character: 'Test character',
      id: 1,
      imagePath: testImagePath,
      name: 'Test name',
    };

    render(
      <PersonCard imagePath={expectedPerson.imagePath} name={expectedPerson.name}>
        {expectedPerson.character}
      </PersonCard>
    );

    expect(screen.getByRole('img', { name: expectedPerson.name })).toBeInTheDocument();
  });

  it('should render name', () => {
    const expectedPerson: MovieCastPerson = {
      character: 'Test character',
      id: 1,
      imagePath: testImagePath,
      name: 'Test name',
    };

    render(
      <PersonCard imagePath={expectedPerson.imagePath} name={expectedPerson.name}>
        {expectedPerson.character}
      </PersonCard>
    );

    expect(screen.getByRole('heading', { name: expectedPerson.name })).toBeInTheDocument();
  });

  it('should render children', () => {
    const expectedPerson: MovieCastPerson = {
      character: 'Test character',
      id: 1,
      imagePath: testImagePath,
      name: 'Test name',
    };

    render(
      <PersonCard imagePath={expectedPerson.imagePath} name={expectedPerson.name}>
        {expectedPerson.character}
      </PersonCard>
    );

    expect(screen.getByText(expectedPerson.character)).toBeInTheDocument();
  });
});
