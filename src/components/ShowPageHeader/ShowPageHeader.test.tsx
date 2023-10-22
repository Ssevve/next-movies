import { render, screen } from '@testing-library/react';

import mockDetailedMovie from '@/__mocks__/data/mockDetailedMovie';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import joinCreators from '@/components/ShowPageHeader/utils/joinCreators/joinCreators';
import findTrailer from '@/utils/findTrailer/findTrailer';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

describe('ShowPageHeader', () => {
  it('should render poster if poster path exists', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        runtime={expectedShow.runtime}
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedShow.poster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        rating={expectedShow.rating}
        previewVideo={findTrailer(expectedShow.videos)}
        overview={expectedShow.overview}
      />
    );
    expect(screen.getByRole('img', { name: expectedShow.title })).toBeInTheDocument();
  });

  it('should render poster with correct "src" attribute if poster path exists', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        runtime={expectedShow.runtime}
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedShow.poster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        rating={expectedShow.rating}
        previewVideo={findTrailer(expectedShow.videos)}
        overview={expectedShow.overview}
      />
    );

    const poster: HTMLImageElement = screen.getByRole('img', { name: expectedShow.title });

    const expectedImageName = expectedShow.poster.path.split('/').slice(-1)[0];

    expect(poster.src).toContain(expectedImageName);
  });

  it('should not render an image if poster path does not exist', () => {
    const expectedShow = mockDetailedMovie;
    const expectedPoster = { ...mockDetailedMovie.poster, path: '' };
    render(
      <ShowPageHeader
        runtime={expectedShow.runtime}
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedPoster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        rating={expectedShow.rating}
        previewVideo={findTrailer(expectedShow.videos)}
        overview={expectedShow.overview}
      />
    );

    expect(screen.queryByRole('img', { name: expectedShow.title })).not.toBeInTheDocument();
  });

  it('should render <NoImage /> component if poster path does not exist', () => {
    const expectedShow = mockDetailedMovie;
    const expectedPoster = { ...mockDetailedMovie.poster, path: '' };
    render(
      <ShowPageHeader
        runtime={expectedShow.runtime}
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedPoster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        rating={expectedShow.rating}
        previewVideo={findTrailer(expectedShow.videos)}
        overview={expectedShow.overview}
      />
    );

    expect(screen.getByTestId('no-image')).toBeInTheDocument();
  });

  it('should render <ShowMetadata /> component fot TV shows', () => {
    const expectedShow = mockDetailedMovie;
    const expectedYear = getReleaseYear(expectedShow.releaseDate);
    render(
      <ShowPageHeader
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedShow.poster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="tv"
        previewVideo={findTrailer(expectedShow.videos)}
        overview={expectedShow.overview}
        rating={expectedShow.rating}
      />
    );
    expect(
      screen.getByRole('heading', { level: 1, name: `${expectedShow.title} (${expectedYear})` })
    ).toBeInTheDocument();
  });

  it('should render <MovieMetadata /> component for movies', () => {
    const expectedShow = mockDetailedMovie;
    const expectedYear = getReleaseYear(expectedShow.releaseDate);
    render(
      <ShowPageHeader
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedShow.poster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        overview={expectedShow.overview}
        rating={expectedShow.rating}
        runtime={mockDetailedMovie.runtime}
      />
    );
    expect(
      screen.getByRole('heading', { level: 1, name: `${expectedShow.title} (${expectedYear})` })
    ).toBeInTheDocument();
  });

  it('should render tagline if provided', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        tagline={expectedShow.tagline}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedShow.poster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        overview={expectedShow.overview}
        rating={expectedShow.rating}
        runtime={expectedShow.runtime}
      />
    );
    expect(screen.getByText(expectedShow.tagline!)).toBeInTheDocument();
  });

  it('should render <UserScore /> component', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        runtime={expectedShow.runtime}
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        tagline={expectedShow.tagline}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedShow.poster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        previewVideo={findTrailer(expectedShow.videos)}
        overview={expectedShow.overview}
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
        runtime={expectedShow.runtime}
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        tagline={expectedShow.tagline}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedShow.poster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        previewVideo={expectedVideo}
        overview={expectedShow.overview}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByRole('link', { name: `watch ${expectedVideo!.title}` })).toBeInTheDocument();
  });

  it('should render <Creators /> component', () => {
    const expectedShow = mockDetailedMovie;
    const expectedVideo = findTrailer(expectedShow.videos);
    const expectedCreators = joinCreators(expectedShow.createdBy);
    render(
      <ShowPageHeader
        runtime={expectedShow.runtime}
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
        tagline={expectedShow.tagline}
        backdrop={expectedShow.backdrop}
        createdBy={expectedShow.createdBy}
        genres={expectedShow.genres}
        poster={expectedShow.poster}
        releaseDate={expectedShow.releaseDate}
        title={expectedShow.title}
        userScore={expectedShow.userScore}
        userScoreCount={expectedShow.userScoreCount}
        showType="movie"
        previewVideo={expectedVideo}
        overview={expectedShow.overview}
        rating={expectedShow.rating}
      />
    );
    expect(screen.getByText(expectedCreators)).toBeInTheDocument();
  });
});
