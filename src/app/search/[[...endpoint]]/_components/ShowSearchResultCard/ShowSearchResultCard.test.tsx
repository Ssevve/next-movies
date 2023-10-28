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

describe('ShowSearchResultCard', () => {
  it('should render show poster', () => {
    render(<ShowSearchResultCard {...searchResult} />);
    screen.getByAltText(searchResult.title);
  });

  it('should render show user score', () => {
    render(<ShowSearchResultCard {...searchResult} />);
    screen.getByText(searchResult.userScore);
  });

  it('should render title', () => {
    render(<ShowSearchResultCard {...searchResult} />);
    screen.getByText(searchResult.title);
  });

  it('should render releaseDate', () => {
    render(<ShowSearchResultCard {...searchResult} />);
    screen.getByText(searchResult.releaseDate);
  });

  it('should render overview', () => {
    render(<ShowSearchResultCard {...searchResult} />);
    screen.getByText(searchResult.overview);
  });

  it('should render link to the detailed show page', () => {
    render(<ShowSearchResultCard {...searchResult} />);
    const linkElements = screen.getAllByRole('link');
    linkElements.some((link) => {
      expect(link).toHaveAttribute('href', `/${searchResult.showType}/${searchResult.id}`);
    });
  });
});
