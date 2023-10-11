import { render, screen } from '@testing-library/react';

import PersonCard from '@/components/PersonCard/PersonCard';
import CastPerson from '@/types/CastPerson';

const testImagePath = '/testImage.jpg';

describe('PersonCard', () => {
  it("should render person's image", () => {
    const expectedPerson: CastPerson = {
      character: 'Test character',
      gender: 'Male',
      id: 1,
      imagePath: testImagePath,
      name: 'Test name',
    };

    render(
      <PersonCard
        gender={expectedPerson.gender}
        imagePath={expectedPerson.imagePath}
        name={expectedPerson.name}
      >
        {expectedPerson.character}
      </PersonCard>
    );

    expect(screen.getByRole('img', { name: expectedPerson.name })).toBeInTheDocument();
  });

  it("should render person's image with correct 'src' attribute", () => {
    const expectedPerson: CastPerson = {
      character: 'Test character',
      gender: 'Male',
      id: 1,
      imagePath: testImagePath,
      name: 'Test name',
    };

    render(
      <PersonCard
        gender={expectedPerson.gender}
        imagePath={expectedPerson.imagePath}
        name={expectedPerson.name}
      >
        {expectedPerson.character}
      </PersonCard>
    );

    const image: HTMLImageElement = screen.getByRole('img', { name: expectedPerson.name });
    expect(image.src).toContain(testImagePath.slice(1));
  });

  it('should render correct placeholder for male if imagePath is not present', () => {
    const expectedImageName = 'male-placeholder.svg';
    const expectedPerson: CastPerson = {
      character: 'Test character',
      gender: 'Male',
      id: 1,
      imagePath: '',
      name: 'Test name',
    };

    render(
      <PersonCard
        gender={expectedPerson.gender}
        imagePath={expectedPerson.imagePath}
        name={expectedPerson.name}
      >
        {expectedPerson.character}
      </PersonCard>
    );

    const image: HTMLImageElement = screen.getByRole('img', { name: expectedPerson.name });
    expect(image.src).toContain(expectedImageName);
  });

  it('should render correct placeholder for female if imagePath is not present', () => {
    const expectedImageName = 'female-placeholder.svg';
    const expectedPerson: CastPerson = {
      character: 'Test character',
      gender: 'Female',
      id: 1,
      imagePath: '',
      name: 'Test name',
    };

    render(
      <PersonCard
        gender={expectedPerson.gender}
        imagePath={expectedPerson.imagePath}
        name={expectedPerson.name}
      >
        {expectedPerson.character}
      </PersonCard>
    );

    const image: HTMLImageElement = screen.getByRole('img', { name: expectedPerson.name });
    expect(image.src).toContain(expectedImageName);
  });

  it('should render correct placeholder for non-binary if imagePath is not present', () => {
    const expectedImageName = 'male-placeholder.svg';
    const expectedPerson: CastPerson = {
      character: 'Test character',
      gender: 'Non-binary',
      id: 1,
      imagePath: '',
      name: 'Test name',
    };

    render(
      <PersonCard
        gender={expectedPerson.gender}
        imagePath={expectedPerson.imagePath}
        name={expectedPerson.name}
      >
        {expectedPerson.character}
      </PersonCard>
    );

    const image: HTMLImageElement = screen.getByRole('img', { name: expectedPerson.name });
    expect(image.src).toContain(expectedImageName);
  });

  it('should render correct placeholder for not specified gender if imagePath is not present', () => {
    const expectedImageName = 'male-placeholder.svg';
    const expectedPerson: CastPerson = {
      character: 'Test character',
      gender: 'N/A',
      id: 1,
      imagePath: '',
      name: 'Test name',
    };

    render(
      <PersonCard
        gender={expectedPerson.gender}
        imagePath={expectedPerson.imagePath}
        name={expectedPerson.name}
      >
        {expectedPerson.character}
      </PersonCard>
    );

    const image: HTMLImageElement = screen.getByRole('img', { name: expectedPerson.name });
    expect(image.src).toContain(expectedImageName);
  });

  it('should render name', () => {
    const expectedPerson: CastPerson = {
      character: 'Test character',
      gender: 'Male',
      id: 1,
      imagePath: testImagePath,
      name: 'Test name',
    };

    render(
      <PersonCard
        gender={expectedPerson.gender}
        imagePath={expectedPerson.imagePath}
        name={expectedPerson.name}
      >
        {expectedPerson.character}
      </PersonCard>
    );

    expect(screen.getByRole('heading', { name: expectedPerson.name })).toBeInTheDocument();
  });

  it('should render children', () => {
    const expectedPerson: CastPerson = {
      character: 'Test character',
      gender: 'Male',
      id: 1,
      imagePath: testImagePath,
      name: 'Test name',
    };

    render(
      <PersonCard
        gender={expectedPerson.gender}
        imagePath={expectedPerson.imagePath}
        name={expectedPerson.name}
      >
        {expectedPerson.character}
      </PersonCard>
    );

    expect(screen.getByText(expectedPerson.character)).toBeInTheDocument();
  });
});
