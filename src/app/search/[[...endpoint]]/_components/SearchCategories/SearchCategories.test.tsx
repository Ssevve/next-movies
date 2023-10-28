import { render, screen } from '@testing-library/react';

import SearchCategories from '@/app/search/[[...endpoint]]/_components/SearchCategories/SearchCategories';
import SearchCategory from '@/types/SearchCategory';

const searchCategories: SearchCategory[] = [
  {
    endpoint: 'movie',
    label: 'Movies',
    total: 222,
  },
  {
    endpoint: 'tv',
    label: 'TV Shows',
    total: 345,
  },
  {
    endpoint: 'person',
    label: 'People',
    total: 22,
  },
];

window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('SearchCategories', () => {
  it('should render all category labels', () => {
    render(<SearchCategories activeEndpoint="movie" categories={searchCategories} />);

    searchCategories.forEach(({ label }) => {
      screen.getByText(label);
    });
  });

  it('should render all category totals', () => {
    render(<SearchCategories activeEndpoint="movie" categories={searchCategories} />);

    searchCategories.forEach(({ total }) => {
      screen.getByText(total);
    });
  });

  it('should render correct links for all categories', () => {
    const expectedQuery = 'testQuery';
    render(
      <SearchCategories
        query={expectedQuery}
        activeEndpoint="movie"
        categories={searchCategories}
      />
    );
    searchCategories.forEach(({ endpoint }) => {
      expect(screen.getByTestId(`${endpoint}-link`)).toHaveAttribute(
        'href',
        `/search/${endpoint}?query=${expectedQuery}`
      );
    });
  });
});
