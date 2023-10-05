import { render, screen } from '@testing-library/react';

import mockDetailedMovie from '@/__mocks__/data/mockDetailedMovie';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import formatRuntime from '@/components/ShowPageHeader/utils/formatRuntime/formatRuntime';
import getReleaseYear from '@/components/ShowPageHeader/utils/getReleaseYear/getReleaseYear';
import joinGenres from '@/components/ShowPageHeader/utils/joinGenres';
import { findTrailer } from '@/services/tmdb/api/getTrailer/getTrailer';

describe('ShowPageHeader', () => {
  it('should render title with release year', () => {
    const expectedShow = mockDetailedMovie;
    const expectedYear = getReleaseYear(expectedShow.releaseDate);
    render(
      <ShowPageHeader
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        rating={expectedShow.rating}
      />
    );
    expect(
      screen.getByRole('heading', { level: 1, name: `${expectedShow.title} (${expectedYear})` })
    ).toBeInTheDocument();
  });

  it('should render poster', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        rating={expectedShow.rating}
        previewVideo={findTrailer(expectedShow.videos)}
      />
    );
    expect(screen.getByRole('img', { name: expectedShow.title })).toBeInTheDocument();
  });

  it('should render poster with correct "src" attribute', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        rating={expectedShow.rating}
        previewVideo={findTrailer(expectedShow.videos)}
      />
    );

    const poster: HTMLImageElement = screen.getByRole('img', { name: expectedShow.title });

    expect(poster.src).toContain(expectedShow.posterPath.slice(1));
  });

  it('should render rating', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedShow.rating)).toBeInTheDocument();
  });

  it('should render release date', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedShow.releaseDate)).toBeInTheDocument();
  });

  it('should render correctly formatted genres', () => {
    const expectedShow = mockDetailedMovie;
    const expectedGenres = joinGenres(expectedShow.genres);
    render(
      <ShowPageHeader
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedGenres)).toBeInTheDocument();
  });

  it('should render correctly formatted runtime for a movie if provided', () => {
    const expectedShow = mockDetailedMovie;
    const expectedRuntime = formatRuntime(expectedShow.runtime);
    render(
      <ShowPageHeader
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedRuntime)).toBeInTheDocument();
  });

  it('should render show tagline if provided', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        tagline={expectedShow.tagline}
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedShow.tagline!)).toBeInTheDocument();
  });

  it('should render <UserScore /> component', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        tagline={expectedShow.tagline}
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByTestId('user-score-wrapper')).toBeInTheDocument();
  });

  it('should render <VideoLink /> component', () => {
    const expectedShow = mockDetailedMovie;
    const expectedVideo = findTrailer(expectedShow.videos);
    render(
      <ShowPageHeader
        tagline={expectedShow.tagline}
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={expectedVideo}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByRole('link', { name: `watch ${expectedVideo!.title}` })).toBeInTheDocument();
  });

  it('should render "Directed by" for movies', () => {
    const expectedShow = mockDetailedMovie;
    const expectedVideo = findTrailer(expectedShow.videos);
    render(
      <ShowPageHeader
        tagline={expectedShow.tagline}
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={expectedVideo}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText('Directed by:')).toBeInTheDocument();
  });

  it('should not render "Created by" for movies', () => {
    const expectedShow = mockDetailedMovie;
    const expectedVideo = findTrailer(expectedShow.videos);
    render(
      <ShowPageHeader
        tagline={expectedShow.tagline}
        backdropPath={expectedShow.backdropPath}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        posterPath={expectedShow.posterPath}
        releaseDate={expectedShow.releaseDate}
        runtime={expectedShow.runtime}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        showType="movie"
        previewVideo={expectedVideo}
        rating={expectedShow.rating}
      />
    );
    expect(screen.queryByText('Created by:')).not.toBeInTheDocument();
  });

  // it('should render "Created by" for TV shows', () => {
  //   const expectedShow = mockShows[0];
  //   render(
  //     <ShowPageHeader
  //       id={expectedShow.id}
  //       posterPath={expectedShow.posterPath}
  //       userScore={expectedShow.userScore}
  //       releaseDate={expectedShow.releaseDate}
  //       showType={expectedShow.showType}
  //       title={expectedShow.title}
  //     />
  //   );
  //   expect(screen.getByRole('link')).toBeInTheDocument();
  // });
});
