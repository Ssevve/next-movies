import { NavItem } from '@/types/NavItem';

export const navItems: NavItem[] = [
  {
    label: 'Movies',
    links: [
      {
        href: '/',
        name: 'Popular',
      },
      {
        href: '/now-playing',
        name: 'Now Playing',
      },
      {
        href: '/upcoming',
        name: 'Upcoming',
      },
      {
        href: '/top-rated',
        name: 'Top Rated',
      },
    ],
    path: '/movies',
  },
  {
    label: 'TV Shows',
    links: [
      {
        href: '/',
        name: 'Popular',
      },
      {
        href: '/airing-today',
        name: 'Airing Today',
      },
      {
        href: '/on-tv',
        name: 'On TV',
      },
      {
        href: '/top-rated',
        name: 'Top Rated',
      },
    ],
    path: '/shows',
  },
  {
    label: 'People',
    links: [
      {
        href: '/',
        name: 'Popular people',
      },
    ],
    path: '/people',
  },
];
