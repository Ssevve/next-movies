import { render, screen } from '@testing-library/react';

import mockDetailedMovie from '@/__mocks__/data/mockDetailedMovie';
import ShowMetadata from '@/components/ShowMetadata/ShowMetadata';
import formatRuntime from '@/components/ShowMetadata/utils/formatRuntime/formatRuntime';
import joinGenres from '@/components/ShowMetadata/utils/joinGenres/joinGenres';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

describe('ShowMetadata', () => {
  it('should render a title with release year', () => {
    const expectedShow = mockDetailedMovie;
    const expectedYear = getReleaseYear(expectedShow.releaseDate);
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        rating={expectedShow.rating}
      />
    );
    expect(
      screen.getByRole('heading', { level: 1, name: `${expectedShow.title} (${expectedYear})` })
    ).toBeInTheDocument();
  });

  it('should render rating', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedShow.rating)).toBeInTheDocument();
  });

  it('should render release date', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
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
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedGenres)).toBeInTheDocument();
  });

  it('should render correctly formatted runtime for a movie if provided', () => {
    const expectedShow = mockDetailedMovie;
    const expectedRuntime = formatRuntime(expectedShow.runtime);
    render(
      <ShowMetadata
        genres={expectedShow.genres}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedRuntime)).toBeInTheDocument();
  });
});
