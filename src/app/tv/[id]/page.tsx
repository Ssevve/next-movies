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

export interface DetailedTvShowPageProps {
  searchParams: {
    play?: string;
  };
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: DetailedTvShowPageProps): Promise<Metadata> {
  const tvShowId = params.id;

  const { title, overview } = await getDetailedTvShow(Number(tvShowId));

  return {
    description: overview,
    title: `${title} | Next Movies`,
  };
}

export default async function DetailedTvShowPage({
  searchParams,
  params,
}: DetailedTvShowPageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  const tvShowId = params.id;

  const tvShow = await getDetailedTvShow(Number(tvShowId));
  const previewVideo = findTrailer(tvShow.videos);
  const showEnded = status === 'Ended';
  return (
    <section className="flex w-full flex-col">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <ShowPageHeader
        backdrop={tvShow.backdrop}
        createdBy={tvShow.createdBy}
        genres={tvShow.genres}
        poster={tvShow.poster}
        rating={tvShow.rating}
        releaseDate={tvShow.releaseDate}
        tagline={tvShow.tagline}
        title={tvShow.title}
        userScore={tvShow.userScore}
        userScoreCount={tvShow.userScoreCount}
        showType="tv"
        previewVideo={previewVideo}
        facebookHandle={tvShow.socialHandles.facebook}
        twitterHandle={tvShow.socialHandles.twitter}
        homepage={tvShow.homepage}
        instagramHandle={tvShow.socialHandles.instagram}
        overview={tvShow.overview}
      />

      <section className="container flex w-full flex-col gap-8 px-4">
        <div className="-ml-4 w-screen pl-4 dark:bg-gradient-to-t dark:from-transparent dark:via-slate-800 dark:backdrop-blur-3xl">
          <TvShowFacts
            networks={tvShow.networks}
            type={tvShow.type}
            status={status}
            originalLanguage={tvShow.originalLanguage}
          />
        </div>
        <div className="flex flex-col gap-12">
          <ShowCast cast={tvShow.cast} />
          <RecentSeason
            season={tvShow.recentSeason}
            showEnded={showEnded}
            episode={showEnded ? tvShow.lastEpisode : tvShow.nextEpisode}
          />
          <ShowMedia
            posters={tvShow.images.posters}
            backdrops={tvShow.images.backdrops}
            videos={tvShow.videos}
          />
          <Recommendations shows={tvShow.recommendations} />
        </div>
      </section>
    </section>
  );
}
