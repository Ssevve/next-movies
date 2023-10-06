import dynamic from 'next/dynamic';

import SectionHeading from '@/components/SectionHeading/SectionHeading';
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

export default async function MoviePage({ searchParams, params }: MoviePageProps) {
  const youtubeModalVideoKey = searchParams?.play;
  const movieId = params.id;

  const movie = await getDetailedMovie(Number(movieId));
  const previewVideo = findTrailer(movie.videos);

  return (
    <section className="grid gap-12">
      {youtubeModalVideoKey && <YoutubeIframeModal videoKey={youtubeModalVideoKey} />}
      <ShowPageHeader
        backdropPath={movie.backdropPath}
        createdBy={movie.createdBy}
        genres={movie.genres}
        posterPath={movie.posterPath}
        rating={movie.rating}
        releaseDate={movie.releaseDate}
        tagline={movie.tagline}
        title={movie.title}
        userScore={movie.userScore}
        userScoreCount={movie.userScoreCount}
        showType="movie"
        runtime={movie.runtime}
        previewVideo={previewVideo}
        facebookHandle={movie.socialHandles.facebook}
        twitterHandle={movie.socialHandles.twitter}
        homepage={movie.homepage}
        instagramHandle={movie.socialHandles.instagram}
      />

      <section className="container px-4">
        <SectionHeading>Overview</SectionHeading>
        <p className="mt-2 max-w-4xl">{movie.overview}</p>
      </section>
    </section>
  );
}
