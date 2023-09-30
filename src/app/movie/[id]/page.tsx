import dynamic from 'next/dynamic';

import { getDetailedMovieData } from '@/services/tmdb/api/getDetailedMovieData/getDetailedMovieData';

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

export default async function MoviePage({ searchParams, params }: MoviePageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  const movieId = params.id;

  const movieDetails = await getDetailedMovieData(Number(movieId));

  return (
    <section className="grid w-full gap-12">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <h1>Movie page</h1>
    </section>
  );
}
