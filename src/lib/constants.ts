import NavItemLink from '@/types/NavItemLink';

interface NavItem {
  label: string;
  path: string;
  links: NavItemLink[];
}

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
    path: '/movie',
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
    path: '/tv',
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

export const searchEndpoints = ['movie', 'tv', 'person'] as const;
