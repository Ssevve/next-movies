import TMDBMovieCastPerson from '@/services/TMDB/types/TMDBMovieCastPerson';
import transformMovieCast from '@/services/TMDB/utils/transformDetailedMovie/utils/transformMovieCast/transformMovieCast';
import MovieCastPerson from '@/types/MovieCastPerson';

describe('transformMovieCast', () => {
  it('should return correctly transformed data for single person', () => {
    const mockCast: TMDBMovieCastPerson[] = [
      {
        character: 'John Wick',
        id: 1,
        name: 'John Doe',
        profile_path: '/testProfilePath',
      },
    ];

    const expectedCast: MovieCastPerson[] = [
      {
        character: mockCast[0].character,
        id: mockCast[0].id,
        imagePath: mockCast[0].profile_path!,
        name: mockCast[0].name,
      },
    ];

    expect(transformMovieCast(mockCast)).toEqual(expectedCast);
  });

  it('should return correctly transformed data for multiple people', () => {
    const mockCast: TMDBMovieCastPerson[] = [
      {
        character: 'John Wick',
        id: 1,
        name: 'John Doe',
        profile_path: '/testProfilePath',
      },
      {
        character: 'Tokyo',
        id: 2,
        name: 'Jane Doe',
        profile_path: '/testProfilePath2',
      },
    ];

    const expectedCast: MovieCastPerson[] = mockCast.map(
      ({ character, id, name, profile_path }) => ({
        character,
        id,
        imagePath: profile_path!,
        name,
      })
    );

    expect(transformMovieCast(mockCast)).toEqual(expectedCast);
  });

  it('should return correctly transformed data for if profile_path is not defined', () => {
    const mockCast: TMDBMovieCastPerson[] = [
      {
        character: 'John Wick',
        id: 1,
        name: 'John Doe',
        profile_path: '',
      },
    ];

    const expectedCast: MovieCastPerson[] = [
      {
        character: mockCast[0].character,
        id: mockCast[0].id,
        imagePath: '',
        name: mockCast[0].name,
      },
    ];

    expect(transformMovieCast(mockCast)).toEqual(expectedCast);
  });

  it('should return empty array if cast array is empty', () => {
    expect(transformMovieCast([])).toEqual([]);
  });

  it('should return empty array if cast array is undefined', () => {
    expect(transformMovieCast(undefined as unknown as TMDBMovieCastPerson[])).toEqual([]);
  });

  it('should return empty array if cast is not an array', () => {
    expect(transformMovieCast('notarray' as unknown as TMDBMovieCastPerson[])).toEqual([]);
  });
});
