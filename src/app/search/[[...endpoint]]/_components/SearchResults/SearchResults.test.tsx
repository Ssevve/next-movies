import { render, screen, waitFor } from '@testing-library/react';

import mockTMDBSearchResults from '@/__mocks__/data/mockTMDBSearchResults';
import SearchResults, {
  SearchResultsProps,
} from '@/app/search/[[...endpoint]]/_components/SearchResults/SearchResults';

const renderSearchResults = async (props?: Partial<SearchResultsProps>) => {
  return render(await SearchResults({ endpoint: 'movie', query: 'Br', ...props }));
};

describe('SearchResults', () => {
  it('should render <ShowSearchResultCard /> for movies', async () => {
    const expectedMovie = mockTMDBSearchResults.movie[0];
    renderSearchResults({ endpoint: 'movie' });
    await waitFor(() => {
      screen.getByText(expectedMovie.title);
    });
  });

  it('should render <ShowSearchResultCard /> for TV shows', async () => {
    const expectedTvShow = mockTMDBSearchResults.tv[0];
    renderSearchResults({ endpoint: 'tv' });
    await waitFor(() => {
      screen.getByText(expectedTvShow.name);
    });
  });

  it('should render <PersonSearchResultCard /> for people', async () => {
    const expectedPerson = mockTMDBSearchResults.person[0];
    renderSearchResults({ endpoint: 'person' });
    await waitFor(() => {
      screen.getByText(expectedPerson.name);
    });
  });

  it('should render correct message if there are no results', async () => {
    renderSearchResults({ endpoint: 'person', query: '' });
    await waitFor(() => {
      screen.getByText('There are no results that matched your query.');
    });
  });
});
