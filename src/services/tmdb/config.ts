export const urls = {
  base: 'https://api.themoviedb.org/3',
  image: 'https://image.tmdb.org/t/p',
} as const;

export const genders = {
  0: 'N/A',
  1: 'Female',
  2: 'Male',
  3: 'Non-binary',
} as const;

export const imageSizes = {
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
