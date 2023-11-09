import {
  TMDBMovieSearchResult,
  TMDBPersonSearchResult,
  TMDBTvShowSearchResult,
} from '@/services/TMDB/types/TMDBSearchResult';

interface MockTMDBSearchResults {
  movie: TMDBMovieSearchResult[];
  tv: TMDBTvShowSearchResult[];
  person: TMDBPersonSearchResult[];
}

const mockTMDBSearchResults: MockTMDBSearchResults = {
  movie: [
    {
      backdrop_path: null,
      id: 910402,
      overview:
        'During one of her wild nights, Bobbie hurts her foot. She will have to slow down for a while. After much resistance and with the help of her loyal girlfriends, she is forced to confront herself and her destructive online behaviour.',
      poster_path: null,
      release_date: '',
      title: 'Brak',
      vote_average: 0.0,
      vote_count: 0,
    },
  ],
  person: [
    {
      id: 3901,
      known_for: [
        {
          id: 272,
          media_type: 'movie',
          title: 'Batman Begins',
        },
        {
          id: 76338,
          media_type: 'movie',

          title: 'Thor: The Dark World',
        },
      ],
      known_for_department: 'Acting',
      name: 'Richard Brake',
      profile_path: '/JwsiErANShzPSdYsNoiNYdrSg1.jpg',
    },
  ],
  tv: [
    {
      backdrop_path: '/w7hYO6RYRCUoT5FfBEUsS7Cm0e5.jpg',
      first_air_date: '2000-12-21',
      id: 481,
      name: 'The Brak Show',
      overview:
        'The Brak Show is an animated television series that aired on Cartoon Network\'s late night programming block, Adult Swim. The Brak Show is a spin-off of the animated television series, Space Ghost Coast to Coast, and featured recurring characters from Space Ghost Coast to Coast and Cartoon Planet. Both programs used stock footage from the Hanna-Barbera cartoon Space Ghost. The protagonist is Brak, voiced by Andy Merrill, who developed a quirky persona for the character.\n\nAn earlier version of the pilot episode, "Mr. Bawk Ba Gawk", originally aired prior to the official launch of Adult Swim on Cartoon Network on December 21, 2000, as part of a preview of upcoming Adult Swim shows. The series made its official debut during the night Adult Swim officially launched on September 2, 2001, and ended on December 31, 2003, with a total of 28 episodes. On May 24, 2007 a webisode for the series was released on Adult Swim Video, ending the series.',
      poster_path: '/tq2ccfaLIMWnar3TTrArbSbXscN.jpg',
      vote_average: 7.333,
      vote_count: 30,
    },
  ],
};

export default mockTMDBSearchResults;
