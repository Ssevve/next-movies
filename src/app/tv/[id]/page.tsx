import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import MovieFacts from '@/app/movie/[id]/_components/MovieFacts/MovieFacts';
import Recommendations from '@/components/Recommendations/Recommendations';
import ShowMedia from '@/components/ShowMedia/ShowMedia';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import getDetailedMovie from '@/services/TMDB/api/getDetailedMovie/getDetailedMovie';
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

export default async function TvShowPage({ searchParams, params }: TvShowPageProps) {
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
    videos,
    status,
    cast,
    originalLanguage,
    images,
    recommendations,
  } = await getDetailedTvShow(Number(tvShowId));
  const previewVideo = findTrailer(videos);
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
        {/* <ShowCast cast={cast} /> */}
        <ShowMedia posters={images.posters} backdrops={images.backdrops} videos={videos} />
        <Recommendations shows={recommendations} />
      </section>
    </section>
  );
}
