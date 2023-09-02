import NavOption from '@/types/NavOption';

export const navOptions: NavOption[] = [
  {
    children: [
      {
        href: '/',
        text: 'Popular',
      },
      {
        href: '/now-playing',
        text: 'Now Playing',
      },
      {
        href: '/upcoming',
        text: 'Upcoming',
      },
      {
        href: '/top-rated',
        text: 'Top Rated',
      },
    ],
    label: 'Movies',
    path: '/movies',
  },
  {
    children: [
      {
        href: '/',
        text: 'Popular',
      },
      {
        href: '/airing-today',
        text: 'Airing Today',
      },
      {
        href: '/on-tv',
        text: 'On TV',
      },
      {
        href: '/top-rated',
        text: 'Top Rated',
      },
    ],
    label: 'TV Shows',
    path: '/shows',
  },
  {
    children: [
      {
        href: '/',
        text: 'Popular people',
      },
    ],
    label: 'People',
    path: '/people',
  },
];
