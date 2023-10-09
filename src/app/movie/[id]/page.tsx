import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import MovieFacts from '@/app/movie/[id]/_components/MovieFacts/MovieFacts';
import ShowCast from '@/components/ShowCast/ShowCast';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import getDetailedMovie from '@/services/tmdb/api/getDetailedMovie/getDetailedMovie';
import findTrailer from '@/utils/findTrailer/findTrailer';

const YoutubeIframeModal = dynamic(
  () => import('@/components/YoutubeIframeModal/YoutubeIframeModal')
);

interface MoviePageSearchParams {
  play?: string;
}
interface MoviePageParams {
  id: string;
}

interface MoviePageProps {
  searchParams: MoviePageSearchParams;
  params: MoviePageParams;
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
    backdropPath,
    createdBy,
    genres,
    posterPath,
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
  } = await getDetailedMovie(Number(movieId));
  const previewVideo = findTrailer(videos);
  return (
    <section className="flex w-full flex-col gap-12">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <ShowPageHeader
        backdropPath={backdropPath}
        createdBy={createdBy}
        genres={genres}
        posterPath={posterPath}
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
        <MovieFacts budget={budget} revenue={revenue} status={status} />
        <ShowCast cast={cast} />
      </section>
    </section>
  );
}
