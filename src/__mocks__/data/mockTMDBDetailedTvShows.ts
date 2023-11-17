import TMDBDetailedTvShow from '@/services/TMDB/types/TMDBDetailedTvShow';

const tvShowBase: Omit<TMDBDetailedTvShow, 'original_language' | 'id'> = {
  aggregate_credits: {
    cast: [
      {
        id: 17419,
        name: 'Bryan Cranston',
        profile_path: '/aGSvZg7uITJveQtGHDcPNI6map1.jpg',
        roles: [
          {
            character: 'Walter White',
          },
        ],
        total_episode_count: 62,
      },
      {
        id: 84497,
        name: 'Aaron Paul',
        profile_path: '/8Ac9uuoYwZoYVAIJfRLzzLsGGJn.jpg',
        roles: [
          {
            character: 'Jesse Pinkman',
          },
        ],
        total_episode_count: 62,
      },
    ],
  },
  backdrop_path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
  content_ratings: {
    results: [
      {
        descriptors: [],
        iso_3166_1: 'DE',
        rating: '16',
      },
      {
        descriptors: [],
        iso_3166_1: 'US',
        rating: 'TV-MA',
      },
    ],
  },
  created_by: [
    {
      id: 66633,
      name: 'Vince Gilligan',
    },
  ],
  external_ids: {
    facebook_id: 'BreakingBad',
    instagram_id: 'breakingbad',
    twitter_id: 'BreakingBad',
  },
  first_air_date: '2008-01-20',
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 80,
      name: 'Crime',
    },
  ],
  homepage: 'http://www.amc.com/shows/breaking-bad',
  images: {
    backdrops: [
      {
        file_path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
        height: 1688,
        width: 3000,
      },
      {
        file_path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
        height: 1080,
        width: 1920,
      },
    ],
    posters: [
      {
        file_path: '/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg',
        height: 1500,
        width: 1000,
      },
      {
        file_path: '/zKnBah5dWlFoY0yIKcSIYb4f7kC.jpg',
        height: 1500,
        width: 1000,
      },
    ],
  },
  keywords: {
    results: [
      {
        id: 2231,
        name: 'drug dealer',
      },
      {
        id: 6259,
        name: 'psychopath',
      },
    ],
  },
  last_episode_to_air: {
    air_date: '2013-09-29',
    episode_number: 16,
    episode_type: 'finale',
    id: 62161,
    name: 'Felina',
    season_number: 5,
    show_id: 1396,
  },
  name: 'Breaking Bad',
  networks: [
    {
      id: 174,
      logo_path: '/alqLicR1ZMHMaZGP3xRQxn9sq7p.png',
      name: 'AMC',
    },
  ],
  next_episode_to_air: null,
  overview:
    "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
  poster_path: '/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg',
  recommendations: {
    page: 1,
    results: [
      {
        backdrop_path: '/testBackdropPath.jpg',
        first_air_date: '2015-02-08',
        id: 60059,
        name: 'Better Call Saul',
        poster_path: '/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg',
        vote_average: 8.644,
        vote_count: 4347,
      },
      {
        backdrop_path: '/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg',
        first_air_date: '2011-04-17',
        id: 1399,
        name: 'Game of Thrones',
        poster_path: '/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
        vote_average: 8.441,
        vote_count: 21837,
      },
    ],
    total_pages: 1,
    total_results: 2,
  },
  seasons: [
    {
      air_date: '2009-02-17',
      episode_count: 11,
      id: 3577,
      name: 'Specials',
      overview: '',
      poster_path: '/40dT79mDEZwXkQiZNBgSaydQFDP.jpg',
      season_number: 0,
      vote_average: 0.0,
    },
    {
      air_date: '2008-01-20',
      episode_count: 7,
      id: 3572,
      name: 'Season 1',
      overview:
        'High school chemistry teacher Walter White\'s life is suddenly transformed by a dire medical diagnosis. Street-savvy former student Jesse Pinkman "teaches" Walter a new trade.',
      poster_path: '/1BP4xYv9ZG4ZVHkL7ocOziBbSYH.jpg',
      season_number: 1,
      vote_average: 8.2,
    },
  ],
  status: 'Ended',
  tagline: 'Change the equation.',
  type: 'Scripted',
  videos: {
    results: [
      {
        id: '64c3fca091745b010120964b',
        key: 'VFLkMDEO-Xc',
        name: 'Breaking Bad | Trailer',
        site: 'YouTube',
        type: 'Trailer',
      },
      {
        id: '5759db2fc3a3683e7c003df7',
        key: 'XZ8daibM3AE',
        name: 'Series Trailer',
        site: 'YouTube',
        type: 'Trailer',
      },
    ],
  },
  vote_average: 8.89,
  vote_count: 12378,
};

type TvShowMockType = 'withOriginalLanguage' | 'withoutOriginalLanguage';

const mockTMDBDetailedTvShows: Record<TvShowMockType, TMDBDetailedTvShow> = {
  withOriginalLanguage: { ...tvShowBase, id: 1, original_language: 'en' },
  withoutOriginalLanguage: { ...tvShowBase, id: 2, original_language: '' },
};

export default mockTMDBDetailedTvShows;
