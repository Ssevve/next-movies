export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const TMDB_SHOW_CARD_POSTER_HEIGHT = 330;
export const TMDB_SHOW_CARD_POSTER_WIDTH = 220;

export const TMDB_VIDEO_CARD_THUMBNAIL_HEIGHT = 200;
export const TMDB_VIDEO_CARD_THUMBNAIL_WIDTH = 355;

export const TMDB_SCROLLER_BACKGROUND_HEIGHT = 427;
export const TMDB_SCROLLER_BACKGROUND_WIDTH = 1920;

export const TMDB_SHOW_PAGE_POSTER_HEIGHT = 3000;
export const TMDB_SHOW_PAGE_POSTER_WIDTH = 2000;

export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p';
export const TMDB_SHOW_CARD_POSTER_PATH = `/w${TMDB_SHOW_CARD_POSTER_WIDTH}_and_h${TMDB_SHOW_CARD_POSTER_HEIGHT}_face`;
export const TMDB_VIDEO_CARD_THUMBNAIL_PATH = `/w${TMDB_VIDEO_CARD_THUMBNAIL_WIDTH}_and_h${TMDB_VIDEO_CARD_THUMBNAIL_HEIGHT}_face`;
export const TMDB_SCROLLER_BACKGROUND_PATH = `/w${TMDB_SCROLLER_BACKGROUND_WIDTH}_and_h${TMDB_SCROLLER_BACKGROUND_HEIGHT}_multi_faces`;
export const TMDB_SHOW_PAGE_POSTER_PATH = `/original`;

export const genderMap = {
  0: 'N/A',
  1: 'Female',
  2: 'Male',
  3: 'Non-binary',
} as const;
