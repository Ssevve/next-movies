import { render, screen } from '@testing-library/react';

import mockDetailedMovie from '@/__mocks__/data/mockDetailedMovie';
import MovieMetadata from '@/app/movie/[id]/_components/MovieMetadata/MovieMetadata';
import formatRuntime from '@/app/movie/[id]/_components/MovieMetadata/utils/formatRuntime/formatRuntime';

describe('MovieMetadata', () => {
  it('should render correctly formatted runtime', () => {
    const expectedShow = mockDetailedMovie;
    const expectedRuntime = formatRuntime(expectedShow.runtime);
    render(
      <MovieMetadata
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
