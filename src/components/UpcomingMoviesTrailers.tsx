'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { use, useState } from 'react';

import { cn } from '@/lib/utils';
import { TMDB_IMAGE_URL, TMDB_SCROLLER_BACKGROUND_PATH } from '@/services/tmdb/constants';
import Video from '@/types/Video';

import VideoScroller from './VideoScroller';

interface UpcomingMoviesTrailersProps {
  trailersPromise: Promise<Video[]>;
}

export default function UpcomingMoviesTrailers({ trailersPromise }: UpcomingMoviesTrailersProps) {
  const trailers = use(trailersPromise);
  const { theme } = useTheme();
  const [currentBackgroundPath, setCurrentBackgroundPath] = useState(trailers[0].thumbnailPath);
  const [previousBackgroundPath, setPreviousBackgroundPath] = useState(trailers[0].thumbnailPath);
  const [activeImage, setActiveImage] = useState(0);

  const changeActiveImage = (path: string) => {
    if (path === currentBackgroundPath) return;
    setCurrentBackgroundPath(path);
    setPreviousBackgroundPath(currentBackgroundPath);
    setActiveImage((prev) => (prev === 0 ? 1 : 0));
  };

  const getBackgroundImagePath = (imageIndex: number) => {
    return `${TMDB_IMAGE_URL}${TMDB_SCROLLER_BACKGROUND_PATH}${
      activeImage === imageIndex ? currentBackgroundPath : previousBackgroundPath
    }`;
  };

  const getBackgroundImageClassNames = (imageIndex: number) => {
    return cn(
      'opacity-0 transition-opacity duration-500',
      activeImage === imageIndex && 'opacity-100 dark:opacity-10'
    );
  };

  const isLightTheme = theme === 'light';

  return (
    <section className="relative overflow-hidden rounded-md">
      <Image
        src={getBackgroundImagePath(0)}
        alt=""
        className={getBackgroundImageClassNames(0)}
        fill
      />
      <Image
        src={getBackgroundImagePath(1)}
        alt=""
        className={getBackgroundImageClassNames(1)}
        fill
      />
      <VideoScroller
        className={cn('h-full w-full p-4 pb-0', isLightTheme && 'bg-black/70')}
        videos={trailers}
        invertedTextColor={isLightTheme}
        setBackgroundPath={changeActiveImage}
      />
    </section>
  );
}
