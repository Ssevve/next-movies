import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import ShowPageHeader from '@/components/ShowPageHeader/ShowPageHeader';
import getDetailedMovie from '@/services/tmdb/api/getDetailedMovie/getDetailedMovie';
import findTrailer from '@/utils/findTrailer/findTrailer';
import formatUSDString from '@/utils/formatUSDString/formatUSDString';

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
  } = await getDetailedMovie(Number(movieId));
  const previewVideo = findTrailer(videos);
  return (
    <section className="grid gap-12">
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

      <section className="container flex justify-between px-4">
        <div className="grid gap-2">
          <div>
            <h3 className="font-semibold">Status</h3>
            <span className="text-sm">{status}</span>
          </div>
          <div>
            <h3 className="font-semibold">Budget</h3>
            <span className="text-sm">{formatUSDString(budget)}</span>
          </div>
          <div>
            <h3 className="font-semibold">Revenue</h3>
            <span className="text-sm">{formatUSDString(revenue)}</span>
          </div>
        </div>
      </section>
    </section>
  );
}
