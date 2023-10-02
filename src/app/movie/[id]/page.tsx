import { Play } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import UserScore from '@/components/UserScore/UserScore';
import getDetailedMovie from '@/services/tmdb/api/getDetailedMovie/getDetailedMovie';
import {
  TMDB_IMAGE_URL,
  TMDB_SHOW_PAGE_POSTER_HEIGHT,
  TMDB_SHOW_PAGE_POSTER_PATH,
  TMDB_SHOW_PAGE_POSTER_WIDTH,
} from '@/services/tmdb/constants';
import Genre from '@/types/Genre';

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

function getReleaseYear(releaseDate: string) {
  return releaseDate.split(' ')[2];
}

function createGenresString(genres: Genre[]) {
  return genres.map(({ name }) => name).join(', ');
}

function formatRuntime(runtime: number) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;

  return `${hours ? `${hours}h ` : ''}${minutes}min`;
}

export default async function MoviePage({ searchParams, params }: MoviePageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  const movieId = params.id;

  const movie = await getDetailedMovie(Number(movieId));

  return (
    <section className="grid gap-12">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <section className="relative w-screen">
        <section className="container flex flex-col gap-8 p-4 sm:flex-row sm:items-center">
          <Image
            src={`${TMDB_IMAGE_URL}${TMDB_SHOW_PAGE_POSTER_PATH}${movie.backdropPath}`}
            alt=""
            fill
            className="-z-50 object-cover object-top opacity-20"
          />
          <Image
            src={`${TMDB_IMAGE_URL}${TMDB_SHOW_PAGE_POSTER_PATH}${movie.posterPath}`}
            alt={movie.title}
            width={TMDB_SHOW_PAGE_POSTER_WIDTH}
            height={TMDB_SHOW_PAGE_POSTER_HEIGHT}
            className="mx-auto h-auto w-1/4 min-w-[150px] rounded-md shadow sm:mx-0"
          />
          <section className="z-50 flex flex-col items-center justify-center gap-12 sm:items-start sm:gap-4">
            <h1 className="text-center text-2xl font-bold sm:text-left sm:text-3xl md:text-4xl lg:text-5xl">
              {movie.title} ({getReleaseYear(movie.releaseDate)})
            </h1>
            <section className="flex flex-wrap items-center justify-center gap-8 sm:order-last sm:mt-8">
              <div className="flex items-center gap-2">
                <UserScore size={70} textSize="lg" strokeWidth={4} userScore={movie.userScore} />
                <span className="break-keep font-semibold">User Score</span>
              </div>
              <div className="flex cursor-pointer items-center gap-2 rounded-md border-2 border-foreground p-2 hover:scale-105">
                <Play />
                <span className="break-keep font-semibold">Play Trailer</span>
              </div>
            </section>
            <section className="flex w-full flex-col flex-nowrap items-center justify-center gap-4 leading-none sm:flex-row sm:items-start sm:justify-start">
              <div className="flex gap-2">
                {movie.rating && (
                  <span className="rounded-md border border-foreground px-1 py-0.5 text-xs">
                    {movie.rating}
                  </span>
                )}
                <span className="text-sm">{movie.releaseDate}</span>
              </div>
              <span className="hidden sm:block">&#x2022;</span>
              <span className="text-sm">{createGenresString(movie.genres)}</span>
              <span className="hidden sm:block">&#x2022;</span>
              <span className="text-sm">{formatRuntime(movie.runtime)}</span>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
