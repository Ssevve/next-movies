import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import MovieFacts from '@/app/movie/[id]/_components/MovieFacts/MovieFacts';
import Recommendations from '@/components/Recommendations/Recommendations';
import ShowCast from '@/components/ShowCast/ShowCast';
import ShowMedia from '@/components/ShowMedia/ShowMedia';
import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import getDetailedMovie from '@/services/TMDB/api/getDetailedMovie/getDetailedMovie';
import findTrailer from '@/utils/findTrailer/findTrailer';

const YoutubeIframeModal = dynamic(
  () => import('@/components/YoutubeIframeModal/YoutubeIframeModal')
);

export interface DetailedMoviePageProps {
  searchParams: {
    play?: string;
  };
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: DetailedMoviePageProps): Promise<Metadata> {
  const movieId = params.id;

  const { title, overview } = await getDetailedMovie(Number(movieId));

  return {
    description: overview,
    title: `${title} | Next Movies`,
  };
}

export default async function DetailedMoviePage({ searchParams, params }: DetailedMoviePageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  const movieId = params.id;

  const movie = await getDetailedMovie(Number(movieId));
  const previewVideo = findTrailer(movie.videos);
  return (
    <section className="flex w-full flex-col">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <ShowPageHeader
        backdrop={movie.backdrop}
        createdBy={movie.createdBy}
        genres={movie.genres}
        poster={movie.poster}
        rating={movie.rating}
        releaseDate={movie.releaseDate}
        tagline={movie.tagline}
        title={movie.title}
        userScore={movie.userScore}
        userScoreCount={movie.userScoreCount}
        showType="movie"
        previewVideo={previewVideo}
        facebookHandle={movie.socialHandles.facebook}
        twitterHandle={movie.socialHandles.twitter}
        homepage={movie.homepage}
        instagramHandle={movie.socialHandles.instagram}
        overview={movie.overview}
        runtime={movie.runtime}
      />

      <section className="container flex w-full flex-col gap-8 px-4">
        <div className="absolute left-0 w-screen dark:bg-gradient-to-t dark:from-transparent dark:via-slate-800">
          <div className="container pl-4">
            <MovieFacts
              budget={movie.budget}
              revenue={movie.revenue}
              status={movie.status}
              originalLanguage={movie.originalLanguage}
            />
          </div>
        </div>
        <div className="mt-96 flex flex-col gap-12 sm:mt-36">
          <ShowCast cast={movie.cast} />
          <ShowMedia
            posters={movie.images.posters}
            backdrops={movie.images.backdrops}
            videos={movie.videos}
          />
          <Recommendations shows={movie.recommendations} />
        </div>
      </section>
    </section>
  );
}
