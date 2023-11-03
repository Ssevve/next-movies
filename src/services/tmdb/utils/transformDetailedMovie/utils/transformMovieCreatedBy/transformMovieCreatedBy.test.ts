import TMDBMovieCrewPerson from '@/services/TMDB/types/TMDBMovieCrewPerson';
import transformMovieCreatedBy from '@/services/TMDB/utils/transformDetailedMovie/utils/transformMovieCreatedBy/transformMovieCreatedBy';
import Creator from '@/types/Creator';

describe('transformMovieCreatedBy', () => {
  it('should return correctly transformed data for single director', () => {
    const mockCrew: TMDBMovieCrewPerson[] = [
      {
        id: 1,
        job: 'Director',
        name: 'John Doe',
      },
      {
        id: 2,
        job: 'Sound Design',
        name: 'Jane Doe',
      },
    ];

    const expectedCreators: Creator[] = [
      {
        id: mockCrew[0].id,
        name: mockCrew[0].name,
      },
    ];

    expect(transformMovieCreatedBy(mockCrew)).toEqual(expectedCreators);
  });

  it('should return correctly transformed data for multiple people', () => {
    const mockCrew: TMDBMovieCrewPerson[] = [
      {
        id: 1,
        job: 'Director',
        name: 'John Doe',
      },
      {
        id: 2,
        job: 'Director',
        name: 'Jane Doe',
      },
    ];

    const expectedCreators: Creator[] = mockCrew.map(({ id, name }) => ({
      id,
      name,
    }));

    expect(transformMovieCreatedBy(mockCrew)).toEqual(expectedCreators);
  });

  it('should return empty array if crew array is empty', () => {
    expect(transformMovieCreatedBy([])).toEqual([]);
  });

  it('should return empty array if crew array is undefined', () => {
    expect(transformMovieCreatedBy(undefined as unknown as TMDBMovieCrewPerson[])).toEqual([]);
  });

  it('should return empty array if crew is not an array', () => {
    expect(transformMovieCreatedBy('notarray' as unknown as TMDBMovieCrewPerson[])).toEqual([]);
  });
});
