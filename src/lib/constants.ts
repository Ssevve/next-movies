interface NavOptionChild {
  href: string;
  label: string;
}

export interface NavOption {
  label: string;
  path: string;
  children: NavOptionChild[];
}

export const navOptions: NavOption[] = [
  {
    children: [
      {
        href: '/',
        label: 'Popular',
      },
      {
        href: '/now-playing',
        label: 'Now Playing',
      },
      {
        href: '/upcoming',
        label: 'Upcoming',
      },
      {
        href: '/top-rated',
        label: 'Top Rated',
      },
    ],
    label: 'Movies',
    path: '/movies',
  },
  {
    children: [
      {
        href: '/',
        label: 'Popular',
      },
      {
        href: '/airing-today',
        label: 'Airing Today',
      },
      {
        href: '/on-tv',
        label: 'On TV',
      },
      {
        href: '/top-rated',
        label: 'Top Rated',
      },
    ],
    label: 'TV Shows',
    path: '/shows',
  },
  {
    children: [
      {
        href: '/',
        label: 'Popular people',
      },
    ],
    label: 'People',
    path: '/people',
  },
];

export const ALLOWED_TRAILER_VIDEO_TYPES = ['Trailer', 'Teaser'];
