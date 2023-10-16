import { render, screen } from '@testing-library/react';

import PersonCard from '@/components/PersonCard/PersonCard';
import MovieCastPerson from '@/types/MovieCastPerson';

const testImagePath = '/testImage.jpg';

describe('PersonCard', () => {
  it("should render person's image", () => {
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

  it("should render person's image with correct 'src' attribute if imagePath is provided", () => {
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

    const image: HTMLImageElement = screen.getByRole('img', { name: expectedPerson.name });
    expect(image.src).toContain(testImagePath.slice(1));
  });

  it('should not render image if imagePath is not provided', () => {
    const expectedPerson: MovieCastPerson = {
      character: 'Test character',
      id: 1,
      imagePath: '',
      name: 'Test name',
    };

    render(
      <PersonCard imagePath={expectedPerson.imagePath} name={expectedPerson.name}>
        {expectedPerson.character}
      </PersonCard>
    );

    expect(screen.queryByRole('img', { name: expectedPerson.name })).not.toBeInTheDocument();
  });

  it('should render <NoImage /> component if imagePath is not provided', () => {
    const expectedPerson: MovieCastPerson = {
      character: 'Test character',
      id: 1,
      imagePath: '',
      name: 'Test name',
    };

    render(
      <PersonCard imagePath={expectedPerson.imagePath} name={expectedPerson.name}>
        {expectedPerson.character}
      </PersonCard>
    );

    expect(screen.getByTestId('no-image')).toBeInTheDocument();
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
