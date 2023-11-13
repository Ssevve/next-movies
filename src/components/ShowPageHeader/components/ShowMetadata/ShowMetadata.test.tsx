import { render, screen } from '@testing-library/react';

import mockDetailedMovie from '@/__mocks__/data/mockDetailedMovie';
import ShowMetadata from '@/components/ShowPageHeader/components/ShowMetadata/ShowMetadata';
import joinGenres from '@/components/ShowPageHeader/components/ShowMetadata/utils/joinGenres/joinGenres';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

describe('ShowMetadata', () => {
  it('should render a title with release year', () => {
    const expectedShow = mockDetailedMovie;
    const expectedYear = getReleaseYear(expectedShow.releaseDate);
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        rating={expectedShow.rating}
      />
    );
    expect(
      screen.getByRole('heading', { level: 1, name: `${expectedShow.title} (${expectedYear})` })
    ).toBeInTheDocument();
  });

  it('should render rating if available', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedShow.rating!)).toBeInTheDocument();
  });

  it('should render release date', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedShow.releaseDate)).toBeInTheDocument();
  });

  it('should render correctly formatted genres', () => {
    const expectedShow = mockDetailedMovie;
    const expectedGenres = joinGenres(expectedShow.genres);
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedGenres)).toBeInTheDocument();
  });

  it('should render children', () => {
    const expectedShow = mockDetailedMovie;
    const expectedChildText = 'Test child';
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        rating={expectedShow.rating}
      >
        <p>{expectedChildText}</p>
      </ShowMetadata>
    );
    expect(screen.getByText(expectedChildText)).toBeInTheDocument();
  });
});
