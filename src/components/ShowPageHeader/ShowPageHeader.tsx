import { Play } from 'lucide-react';
import Image from 'next/image';

import NoImage from '@/components/NoImage';
import Creators from '@/components/ShowPageHeader/components/Creators/Creators';
import ShowExternalLinks from '@/components/ShowPageHeader/components/ShowExternalLinks/ShowExternalLinks';
import ShowMetadata from '@/components/ShowPageHeader/components/ShowMetadata/ShowMetadata';
import ShowOverview from '@/components/ShowPageHeader/components/ShowOverview/ShowOverview';
import UserScore from '@/components/UserScore/UserScore';
import VideoLink from '@/components/VideoLink/VideoLink';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import DetailedShow from '@/types/DetailedShow';
import Video from '@/types/Video';

type ShowPageHeaderProps = Pick<
  DetailedShow,
  | 'genres'
  | 'title'
  | 'tagline'
  | 'rating'
  | 'createdBy'
  | 'poster'
  | 'userScore'
  | 'userScoreCount'
  | 'releaseDate'
  | 'backdrop'
  | 'overview'
  | 'showType'
> & {
  previewVideo?: Video | null;
  instagramHandle: string;
  facebookHandle: string;
  twitterHandle: string;
  homepage: string;
};

export default function ShowPageHeader({
  backdrop,
  title,
  poster,
  releaseDate,
  rating,
  userScore,
  genres,
  createdBy,
  tagline,
  showType,
  previewVideo,
  facebookHandle,
  twitterHandle,
  instagramHandle,
  homepage,
  userScoreCount,
  overview,
}: ShowPageHeaderProps) {
  const fullPosterPath = poster.path
    ? getTMDBImagePath(poster.path, poster.width, poster.height)
    : '';
  const fullBackdropPath = backdrop.path ? getTMDBImagePath(backdrop.path) : '';

  return (
    <section className="relative w-screen">
      {fullBackdropPath && (
        <Image
          src={fullBackdropPath}
          alt=""
          fill
          priority
          className="-z-50 object-cover object-top opacity-20"
        />
      )}
      <section className="container flex flex-col gap-8 px-4 py-8 md:flex-row">
        <div className="mx-auto flex w-max flex-none shrink-0 items-center justify-center  md:justify-start">
          {fullPosterPath ? (
            <Image
              src={fullPosterPath}
              alt={title}
              width={poster.width}
              height={poster.height}
              priority
              className="h-64 w-44 md:h-96 md:w-64"
            />
          ) : (
            <div className="h-64 w-44 md:h-96 md:w-64">
              <NoImage />
            </div>
          )}
        </div>

        <section className="flex flex-1 flex-col flex-wrap justify-center gap-8 font-semibold">
          <section className="space-y-2">
            <ShowExternalLinks
              className="sm:mb-4"
              facebookHandle={facebookHandle}
              homepage={homepage}
              instagramHandle={instagramHandle}
              twitterHandle={twitterHandle}
            />
            <ShowMetadata genres={genres} rating={rating} releaseDate={releaseDate} title={title} />
          </section>
          {tagline && <span className="italic sm:mx-0">{tagline}</span>}
          <section className="flex flex-wrap items-center gap-12">
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
          {overview && (
            <div className="pr-4">
              <ShowOverview overview={overview} />
            </div>
          )}
          <Creators creators={createdBy} showType={showType} />
        </section>
      </section>
    </section>
  );
}
