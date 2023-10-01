import mockTMDBMovieCast from '@/__mocks__/data/mockTMDBMovieCast';
import transformMovieCast from '@/services/tmdb/helpers/transformMovieCast/transformMovieCast';
import CastPerson from '@/types/CastPerson';

describe('transformVideos', () => {
  it('should return correctly transformed data for single person', async () => {
    const testCastPerson = mockTMDBMovieCast[0];
    const expectedCastPerson: CastPerson[] = [
      {
        character: testCastPerson.character,
        id: testCastPerson.id,
        imagePath: testCastPerson.profile_path,
        name: testCastPerson.name,
      },
    ];

    const transformedCastPerson = transformMovieCast([testCastPerson]);
    expect(transformedCastPerson).toEqual(expectedCastPerson);
  });

  it('should return correctly transformed data for multiple people', async () => {
    const expectedCast: CastPerson[] = mockTMDBMovieCast.map((person) => ({
      character: person.character,
      id: person.id,
      imagePath: person.profile_path,
      name: person.name,
    }));

    const transformedCast = transformMovieCast(mockTMDBMovieCast);
    expect(transformedCast).toEqual(expectedCast);
  });

  it('should return an empty array for no cast', async () => {
    const transformedCast = transformMovieCast([]);
    expect(transformedCast).toEqual([]);
  });
});
