'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';

import CrossFadeBackgroundImage from '@/components/CrossFadeBackgroundImage';
import VideoScroller from '@/components/VideoScroller/VideoScroller';
import cn from '@/lib/cn';
import Video from '@/types/Video';

interface UpcomingMoviesTrailersProps {
  trailers: Video[];
}

export default function UpcomingMoviesTrailers({ trailers }: UpcomingMoviesTrailersProps) {
  const { theme } = useTheme();

  const initialBackgroundPath = trailers[0]?.thumbnailPath || '';
  const [currentBackgroundPath, setCurrentBackgroundPath] = useState(initialBackgroundPath);
  const [previousBackgroundPath, setPreviousBackgroundPath] = useState(initialBackgroundPath);
  const [activeImage, setActiveImage] = useState(0);

  const changeActiveImage = (path: string) => {
    if (path === currentBackgroundPath) return;
    setCurrentBackgroundPath(path);
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
