import { render, screen } from '@testing-library/react';

import mockDetailedMovie from '@/__mocks__/data/mockDetailedMovie';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import findTrailer from '@/utils/findTrailer/findTrailer';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';
import joinCreators from '@/utils/joinCreators/joinCreators';

describe('ShowPageHeader', () => {
  it('should render poster', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
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
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
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

  it('should render <ShowMetadata /> component', () => {
    const expectedShow = mockDetailedMovie;
    const expectedYear = getReleaseYear(expectedShow.releaseDate);
    render(
      <ShowPageHeader
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
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

  it('should render tagline if provided', () => {
    const expectedShow = mockDetailedMovie;
    render(
      <ShowPageHeader
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
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
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
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
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
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

  it('should render <Creators /> component', () => {
    const expectedShow = mockDetailedMovie;
    const expectedVideo = findTrailer(expectedShow.videos);
    const expectedCreators = joinCreators(expectedShow.createdBy);
    render(
      <ShowPageHeader
        facebookHandle={expectedShow.socialHandles.facebook}
        twitterHandle={expectedShow.socialHandles.twitter}
        instagramHandle={expectedShow.socialHandles.instagram}
        homepage={expectedShow.homepage}
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
    expect(screen.getByText(expectedCreators)).toBeInTheDocument();
  });
});
