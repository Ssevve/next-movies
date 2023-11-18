import { TMDBPerson } from '@/services/TMDB/types/TMDBPerson';

const mockTMDBPerson: TMDBPerson[] = [
  {
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
  },
];

export default mockTMDBPerson;
