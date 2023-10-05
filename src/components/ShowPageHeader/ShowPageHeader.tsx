import { Play } from 'lucide-react';
import Image from 'next/image';

import formatRuntime from '@/components/ShowPageHeader/utils/formatRuntime/formatRuntime';
import getReleaseYear from '@/components/ShowPageHeader/utils/getReleaseYear';
import joinCreators from '@/components/ShowPageHeader/utils/joinCreators';
import joinGenres from '@/components/ShowPageHeader/utils/joinGenres';
import UserScore from '@/components/UserScore/UserScore';
import VideoLink from '@/components/VideoLink/VideoLink';
import {
  TMDB_IMAGE_URL,
  TMDB_SHOW_PAGE_POSTER_HEIGHT,
  TMDB_SHOW_PAGE_POSTER_PATH,
  TMDB_SHOW_PAGE_POSTER_WIDTH,
} from '@/services/tmdb/constants';
import DetailedShow from '@/types/DetailedShow';
import Video from '@/types/Video';

type SharedProps = Pick<
  DetailedShow,
  | 'genres'
  | 'title'
  | 'tagline'
  | 'rating'
  | 'createdBy'
  | 'posterPath'
  | 'userScore'
  | 'releaseDate'
  | 'backdropPath'
  | 'showType'
> & { previewVideo?: Video };

interface TvShowProps extends SharedProps {
  showType: 'tv';
  runtime?: never;
}

interface MovieProps extends SharedProps {
  showType: 'movie';
  runtime: number;
}

type ShowPageHeaderProps = TvShowProps | MovieProps;

export default function ShowPageHeader({
  backdropPath,
  title,
  posterPath,
  releaseDate,
  rating,
  userScore,
  genres,
  createdBy,
  tagline,
  showType,
  previewVideo,
  runtime,
}: ShowPageHeaderProps) {
  const isMovie = showType === 'movie';
  const hasRuntime = isMovie && runtime;
  return (
    <section className="relative w-screen">
      <Image
        src={`${TMDB_IMAGE_URL}${TMDB_SHOW_PAGE_POSTER_PATH}${backdropPath}`}
        alt=""
        fill
        priority
        className="-z-50 object-cover object-top opacity-20"
      />
      <section className="container relative flex flex-col gap-8 px-4 py-8 sm:flex-row sm:items-center">
        <Image
          src={`${TMDB_IMAGE_URL}${TMDB_SHOW_PAGE_POSTER_PATH}${posterPath}`}
          alt={title}
          width={TMDB_SHOW_PAGE_POSTER_WIDTH}
          height={TMDB_SHOW_PAGE_POSTER_HEIGHT}
          priority
          className="mx-auto h-auto w-1/4 min-w-[150px] rounded-md shadow sm:mx-0"
        />
        <section className="flex flex-col flex-wrap gap-8 font-semibold sm:mt-8">
          <div className="space-y-2">
            <h1 className="text-center text-2xl font-bold sm:text-left sm:text-3xl md:text-4xl lg:text-5xl">
              {title} ({getReleaseYear(releaseDate)})
            </h1>
            <div className="flex w-full flex-col flex-nowrap items-center justify-center gap-2 leading-none sm:flex-row sm:justify-start">
              <div className="flex items-center gap-2">
                {rating && (
                  <span className=" my-auto rounded-md border border-foreground px-1 py-0.5 text-xs">
                    {rating}
                  </span>
                )}
                <span className="text-center text-sm">{releaseDate}</span>
              </div>
              <span className="my-auto hidden h-max sm:block">&#x2022;</span>
              <span className="text-center text-sm">{joinGenres(genres)}</span>
              {hasRuntime && (
                <>
                  <span className="my-auto hidden h-max sm:block">&#x2022;</span>
                  <span className="text-center text-sm">{formatRuntime(runtime)}</span>
                </>
              )}
            </div>
          </div>
          <span className="mx-auto text-center italic sm:mx-0 sm:text-left">{tagline}</span>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:justify-start">
            <div className="flex items-center gap-2">
              <UserScore size={70} textSize="lg" strokeWidth={4} userScore={userScore} />
              <span className="break-keep font-semibold">User Score</span>
            </div>
            {previewVideo && (
              <VideoLink
                youtubeKey={previewVideo.youtubeKey}
                title={previewVideo.title}
                className="flex cursor-pointer items-center gap-2 rounded-md border-2 border-foreground p-2 hover:scale-105"
              >
                <Play />
                <span className="break-keep font-semibold">Play {previewVideo.type}</span>
              </VideoLink>
            )}
          </div>
          <div className="mx-auto text-center sm:mx-0 sm:text-left">
            <span>{isMovie ? 'Directed' : 'Created'} by:</span>
            <span className="ml-2 font-normal">{joinCreators(createdBy)}</span>
          </div>
        </section>
      </section>
    </section>
  );
}
