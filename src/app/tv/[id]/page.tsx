import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import RecentSeason from '@/app/tv/[id]/_components/RecentSeason/RecentSeason';
import TvShowFacts from '@/app/tv/[id]/_components/TvShowFacts/TvShowFacts';
import Recommendations from '@/components/Recommendations/Recommendations';
import ShowCast from '@/components/ShowCast/ShowCast';
import ShowMedia from '@/components/ShowMedia/ShowMedia';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import getDetailedTvShow from '@/services/TMDB/api/getDetailedTvShow/getDetailedTvShow';
import findTrailer from '@/utils/findTrailer/findTrailer';

const YoutubeIframeModal = dynamic(
  () => import('@/components/YoutubeIframeModal/YoutubeIframeModal')
);

interface TvShowPageProps {
  searchParams: {
    play?: string;
  };
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TvShowPageProps): Promise<Metadata> {
  const tvShowId = params.id;

  const { title, overview } = await getDetailedTvShow(Number(tvShowId));

  return {
    description: overview,
    title: `${title} | Next Movies`,
  };
}

export default async function DetailedTvShowPage({ searchParams, params }: TvShowPageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  const tvShowId = params.id;

  const {
    backdrop,
    createdBy,
    genres,
    poster,
    rating,
    releaseDate,
    tagline,
    title,
    userScore,
    userScoreCount,
    socialHandles,
    homepage,
    overview,
    type,
    networks,
    videos,
    status,
    cast,
    originalLanguage,
    images,
    recentSeason,
    recommendations,
    lastEpisode,
    nextEpisode,
  } = await getDetailedTvShow(Number(tvShowId));
  const previewVideo = findTrailer(videos);
  const showEnded = status === 'Ended';
  return (
    <section className="flex w-full flex-col gap-12">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <ShowPageHeader
        backdrop={backdrop}
        createdBy={createdBy}
        genres={genres}
        poster={poster}
        rating={rating}
        releaseDate={releaseDate}
        tagline={tagline}
        title={title}
        userScore={userScore}
        userScoreCount={userScoreCount}
        showType="tv"
        previewVideo={previewVideo}
        facebookHandle={socialHandles.facebook}
        twitterHandle={socialHandles.twitter}
        homepage={homepage}
        instagramHandle={socialHandles.instagram}
        overview={overview}
      />

      <section className="container flex w-full flex-col gap-12 px-4">
        <TvShowFacts
          networks={networks}
          type={type}
          status={status}
          originalLanguage={originalLanguage}
        />
        <ShowCast cast={cast} />
        <RecentSeason
          season={recentSeason}
          showEnded={showEnded}
          episode={showEnded ? lastEpisode : nextEpisode}
        />
        <ShowMedia posters={images.posters} backdrops={images.backdrops} videos={videos} />
        <Recommendations shows={recommendations} />
      </section>
    </section>
  );
}
