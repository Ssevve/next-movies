'use client';

import { useTheme } from 'next-themes';
import { use, useState } from 'react';

import CrossFadeBackgroundImage from '@/app/_components/UpcomingMovies/components/UpcomingMoviesTrailers/components/CrossFadeBackgroundImage';
import VideoScroller from '@/components/VideoScroller/VideoScroller';
import cn from '@/lib/cn';
import { TMDBImageSizes } from '@/services/TMDB/config';
import getTMDBImagePath from '@/services/TMDB/utils/getTMDBImagePath/getTMDBImagePath';
import Video from '@/types/Video';

interface UpcomingMoviesTrailersProps {
  trailersPromise: Promise<Video[]>;
}

export default function UpcomingMoviesTrailers({ trailersPromise }: UpcomingMoviesTrailersProps) {
  const { theme } = useTheme();
  const trailers = use(trailersPromise);

  const initialBackgroundPath =
    getTMDBImagePath(
      trailers[0]?.backdrop.path,
      TMDBImageSizes.backdrops.video.width,
      TMDBImageSizes.backdrops.video.height
    ) || '';
  const [currentBackgroundPath, setCurrentBackgroundPath] = useState(initialBackgroundPath);
  const [previousBackgroundPath, setPreviousBackgroundPath] = useState(initialBackgroundPath);
  const [activeImage, setActiveImage] = useState(0);

  const changeActiveImage = (path: string) => {
    const fullPath = getTMDBImagePath(
      path,
      TMDBImageSizes.backdrops.video.width,
      TMDBImageSizes.backdrops.video.height
    );

    if (fullPath === currentBackgroundPath) return;
    setCurrentBackgroundPath(fullPath);
    setPreviousBackgroundPath(currentBackgroundPath);
    setActiveImage((prev) => (prev === 0 ? 1 : 0));
  };

  const isLightTheme = theme === 'light';

  return (
    <section className="relative overflow-hidden rounded-md">
      <CrossFadeBackgroundImage
        currentBackgroundPath={currentBackgroundPath}
        previousBackgroundPath={previousBackgroundPath}
        activeImage={activeImage}
      />
      {trailers.length ? (
        <VideoScroller
          className={cn('h-full w-full p-4 pb-0', isLightTheme && 'bg-black/70')}
          videos={trailers}
          invertedTextColor={isLightTheme}
          onMouseEnter={changeActiveImage}
        />
      ) : (
        <p>No upcoming movies to display</p>
      )}
    </section>
  );
}
