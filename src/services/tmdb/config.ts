export const TMDBUrls = {
  base: 'https://api.themoviedb.org/3',
  image: 'https://image.tmdb.org/t/p',
} as const;

export const PAGINATED_ITEMS_COUNT_LIMIT = 10000 as const;
export const ITEMS_PER_PAGE = 20 as const;

export const TMDBImageSizes = {
  backdrops: {
    video: {
      height: 427,
      width: 1920,
    },
  },
  person: {
    height: 330,
    width: 220,
  },
  posters: {
    detailedShow: {
      height: 450,
      width: 300,
    },
    season: {
      height: 330,
      width: 220,
    },
    show: {
      height: 330,
      width: 220,
    },
  },
  thumbnails: {
    backdrop: {
      height: 200,
      width: 355,
    },
    video: {
      height: 200,
      width: 355,
    },
  },
} as const;
