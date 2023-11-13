import { render, screen } from '@testing-library/react';

import mockShows from '@/__mocks__/data/mockShows';
import ShowCard from '@/components/ShowCard/ShowCard';

describe('ShowCard', () => {
  it('should render link to the show page', () => {
    const expectedShow = mockShows[0];
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedShow.poster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should render link to the show page with correct "href" attribute', () => {
    const expectedShow = mockShows[0];
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedShow.poster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/${expectedShow.showType}/${expectedShow.id}`
    );
  });

  it('should render show poster if poster path exists', () => {
    const expectedShow = mockShows[0];
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedShow.poster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render show poster with correct "src" attribute if poster path exists', () => {
    const expectedShow = mockShows[0];
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedShow.poster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );

    const showPoster: HTMLImageElement = screen.getByRole('img');
    const expectedImageName = expectedShow.poster.path.split('/').slice(-1)[0];

    expect(showPoster.src).toContain(expectedImageName);
  });

  it('should not render an image if poster path does not exist', () => {
    const expectedShow = mockShows[0];
    const expectedPoster = { ...expectedShow.poster, path: '' };
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedPoster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('should render <NoImage /> component if poster path does not exist', () => {
    const expectedShow = mockShows[0];
    const expectedPoster = { ...expectedShow.poster, path: '' };
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedPoster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );

    expect(screen.getByTestId('no-image')).toBeInTheDocument();
  });

  it('should render <UserScore /> component', () => {
    const expectedShow = mockShows[0];
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedShow.poster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );
    expect(screen.getByTestId('user-score-wrapper')).toBeInTheDocument();
  });

  it('should render <UserScore /> component with correct userScore', () => {
    const expectedShow = mockShows[0];
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedShow.poster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );
    expect(screen.getByTestId('user-score-wrapper')).toHaveTextContent(
      expectedShow.userScore.toString()
    );
  });

  it('should render show title', () => {
    const expectedShow = mockShows[0];
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedShow.poster}
        userScore={expectedShow.userScore}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );
    expect(screen.getByRole('heading', { name: expectedShow.title })).toBeInTheDocument();
  });

  it('should render release date if provided', () => {
    const expectedShow = mockShows[0];
    render(
      <ShowCard
        id={expectedShow.id}
        poster={expectedShow.poster}
        userScore={expectedShow.userScore}
        releaseDate={expectedShow.releaseDate}
        showType={expectedShow.showType}
        title={expectedShow.title}
      />
    );
    expect(screen.getByText(expectedShow.releaseDate)).toBeInTheDocument();
  });
});
