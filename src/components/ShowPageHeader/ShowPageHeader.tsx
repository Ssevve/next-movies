import { Play } from 'lucide-react';
import Image from 'next/image';

import Creators from '@/components/ShowPageHeader/components/Creators/Creators';
import ShowExternalLinks from '@/components/ShowPageHeader/components/ShowExternalLinks/ShowExternalLinks';
import ShowMetadata from '@/components/ShowPageHeader/components/ShowMetadata/ShowMetadata';
import ShowOverview from '@/components/ShowPageHeader/components/ShowOverview/ShowOverview';
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
  | 'userScoreCount'
  | 'releaseDate'
  | 'backdropPath'
  | 'overview'
> & {
  previewVideo?: Video | null;
  instagramHandle: string;
  facebookHandle: string;
  twitterHandle: string;
  homepage: string;
};

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
  facebookHandle,
  twitterHandle,
  instagramHandle,
  homepage,
  userScoreCount,
  overview,
}: ShowPageHeaderProps) {
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
          className="mx-auto h-auto w-1/3 min-w-[150px] rounded-md shadow sm:mx-0"
        />
        <section className="flex flex-col flex-wrap gap-8 font-semibold sm:mt-8">
          <section className="space-y-2">
            <ShowExternalLinks
              className="sm:mb-4"
              facebookHandle={facebookHandle}
              homepage={homepage}
              instagramHandle={instagramHandle}
              twitterHandle={twitterHandle}
            />
            <ShowMetadata
              genres={genres}
              rating={rating}
              releaseDate={releaseDate}
              runtime={runtime}
              title={title}
            />
          </section>
          <span className="mx-auto italic sm:mx-0">{tagline}</span>
          <section className="flex flex-wrap items-center justify-center gap-12 sm:justify-start">
            <div className="flex items-center gap-2">
              <UserScore
                withTooltip
                size={70}
                textSize="lg"
                strokeWidth={4}
                userScore={userScore}
                userScoreCount={userScoreCount}
              />
              <span className="break-keep font-semibold">User Score</span>
            </div>
            {previewVideo && (
              <VideoLink
                youtubeKey={previewVideo.youtubeKey}
                title={previewVideo.title}
                className="flex items-center gap-2 rounded-md border border-foreground p-2"
              >
                <Play />
                <span className="break-keep font-semibold">Play {previewVideo.type}</span>
              </VideoLink>
            )}
          </section>
          <ShowOverview overview={overview} />
          <Creators creators={createdBy} showType={showType} />
        </section>
      </section>
    </section>
  );
}
