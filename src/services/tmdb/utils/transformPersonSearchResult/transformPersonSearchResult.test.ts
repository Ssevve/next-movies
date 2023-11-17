import { TMDBPersonSearchResult } from '@/services/TMDB/types/TMDBSearchResult';
import transformPersonSearchResult from '@/services/TMDB/utils/transformPersonSearchResult/transformPersonSearchResult';
import transformPersonSearchResultShows from '@/services/TMDB/utils/transformPersonSearchResultShows/transformPersonSearchResultShows';
import { PersonSearchResult } from '@/types/SearchResult';

describe('transformPersonSearchResult', () => {
  it('should return correctly transformed data', async () => {
    const testPerson: TMDBPersonSearchResult = {
      id: 1,
      known_for: [
        {
          id: 1,
          media_type: 'movie',
          title: 'Test title',
        },
      ],
      known_for_department: 'Acting',
      name: 'John Doe',
      profile_path: '/testProfilePath',
    };

    const expectedResult: PersonSearchResult = {
      department: testPerson.known_for_department,
      id: testPerson.id,
      imagePath: testPerson.profile_path,
      name: testPerson.name,
      shows: transformPersonSearchResultShows(testPerson.known_for),
    };

    const transformedResults = transformPersonSearchResult(testPerson);
    expect(transformedResults).toEqual(expectedResult);
  });
});
