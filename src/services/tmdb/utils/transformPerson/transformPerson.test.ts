import mockTMDBPerson from '@/__mocks__/data/mockTMDBPerson';
import transformPerson from '@/services/TMDB/utils/transformPerson/transformPerson';
import transformPersonShows from '@/services/TMDB/utils/transformPersonShows/transformPersonShows';
import { Person } from '@/types/Person';

describe('transformPerson', () => {
  it('should return correctly transformed data', async () => {
    const testPerson = mockTMDBPerson[0];
    const expectedResult: Person = {
      department: testPerson.known_for_department,
      id: testPerson.id,
      imagePath: testPerson.profile_path,
      name: testPerson.name,
      shows: transformPersonShows(testPerson.known_for),
    };

    const transformedResults = transformPerson(testPerson);
    expect(transformedResults).toEqual(expectedResult);
  });
});
