import { render, screen } from '@testing-library/react';

import ShowSearchResultCard from '@/app/search/[[...endpoint]]/_components/ShowSearchResultCard/ShowSearchResultCard';
import ShowSearchResult from '@/types/ShowSearchResult';

const searchResult: ShowSearchResult = {
  id: 1,
  overview: 'Test overview',
  poster: {
    height: 220,
    path: '/testPosterPath',
    width: 300,
  },
  releaseDate: '05 Jan, 2024',
  showType: 'movie',
  title: 'Test title',
  userScore: 5,
};

const renderShowSearchResultCard = (props?: Partial<ShowSearchResult>) => {
  return render(<ShowSearchResultCard {...searchResult} {...props} />);
};

describe('ShowSearchResultCard', () => {
  it('should render show poster', () => {
    renderShowSearchResultCard();
    screen.getByAltText(searchResult.title);
  });

  it('should render <NoImage /> component if poster has no path specified', () => {
    renderShowSearchResultCard({ poster: { height: 300, path: '', width: 200 } });
    screen.getByTestId('no-image');
  });

  it('should render show user score', () => {
    renderShowSearchResultCard();
    screen.getByText(searchResult.userScore);
  });

  it('should render title', () => {
    renderShowSearchResultCard();
    screen.getByText(searchResult.title);
  });

  it('should render releaseDate', () => {
    renderShowSearchResultCard();
    screen.getByText(searchResult.releaseDate);
  });

  it('should render overview', () => {
    renderShowSearchResultCard();
    screen.getByText(searchResult.overview);
  });

  it('should render link to the detailed show page', () => {
    renderShowSearchResultCard();
    const linkElements = screen.getAllByRole('link');
    linkElements.some((link) => {
      expect(link).toHaveAttribute('href', `/${searchResult.showType}/${searchResult.id}`);
    });
  });
});
