import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import Recommendations from '@/components/Recommendations/Recommendations';
import ShowCast from '@/components/ShowCast/ShowCast';
import ShowFacts from '@/components/ShowFacts/ShowFacts';
import ShowMedia from '@/components/ShowMedia/ShowMedia';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import getDetailedMovie from '@/services/TMDB/api/getDetailedMovie/getDetailedMovie';
import findTrailer from '@/utils/findTrailer/findTrailer';

const YoutubeIframeModal = dynamic(
  () => import('@/components/YoutubeIframeModal/YoutubeIframeModal')
);

interface MoviePageProps {
  searchParams: {
    play?: string;
  };
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
  const movieId = params.id;

  const { title, overview } = await getDetailedMovie(Number(movieId));

  return {
    description: overview,
    title: `${title} | Next Movies`,
  };
}

export default async function MoviePage({ searchParams, params }: MoviePageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  const movieId = params.id;

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
    runtime,
    socialHandles,
    homepage,
    overview,
    budget,
    revenue,
    videos,
    status,
    cast,
    originalLanguage,
    images,
    recommendations,
  } = await getDetailedMovie(Number(movieId));
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
        showType="movie"
        runtime={runtime}
        previewVideo={previewVideo}
        facebookHandle={socialHandles.facebook}
        twitterHandle={socialHandles.twitter}
        homepage={homepage}
        instagramHandle={socialHandles.instagram}
        overview={overview}
      />

      <section className="container flex w-full flex-col gap-12 px-4">
        <ShowFacts
          budget={budget}
          revenue={revenue}
          status={status}
          originalLanguage={originalLanguage}
        />
        <ShowCast cast={cast} />
        <ShowMedia posters={images.posters} backdrops={images.backdrops} videos={videos} />
        <Recommendations shows={recommendations} />
      </section>
    </section>
  );
}
