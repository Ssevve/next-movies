import mockTMDBMovieCast from '@/__mocks__/data/mockTMDBMovieCast';
import {
  genderMap,
  TMDB_PERSON_IMAGE_HEIGHT,
  TMDB_PERSON_IMAGE_WIDTH,
} from '@/services/tmdb/constants';
import transformMovieCast from '@/services/tmdb/utils/transformMovieCast/transformMovieCast';
import CastPerson from '@/types/CastPerson';

import getTMDBImagePath from '../getTMDBImagePath/getTMDBImagePath';

describe('transformVideos', () => {
  it('should return correctly transformed data for single person', async () => {
    const testCastPerson = mockTMDBMovieCast[0];
    const expectedCastPerson: CastPerson[] = [
      {
        character: testCastPerson.character,
        gender: genderMap[testCastPerson.gender],
        id: testCastPerson.id,
        imagePath: getTMDBImagePath({
          height: TMDB_PERSON_IMAGE_HEIGHT,
          image: testCastPerson.profile_path,
          width: TMDB_PERSON_IMAGE_WIDTH,
        }),
        name: testCastPerson.name,
      },
    ];

    const transformedCastPerson = transformMovieCast([testCastPerson]);
    expect(transformedCastPerson).toEqual(expectedCastPerson);
  });

  it('should return correctly transformed data for multiple people', async () => {
    const expectedCast: CastPerson[] = mockTMDBMovieCast.map((person) => ({
      character: person.character,
      gender: genderMap[person.gender],
      id: person.id,
      imagePath: getTMDBImagePath({
        height: TMDB_PERSON_IMAGE_HEIGHT,
        image: person.profile_path,
        width: TMDB_PERSON_IMAGE_WIDTH,
      }),
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
