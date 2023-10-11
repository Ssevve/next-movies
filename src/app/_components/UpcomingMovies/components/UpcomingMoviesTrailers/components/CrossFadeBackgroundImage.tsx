import Image from 'next/image';

import cn from '@/lib/cn';
import { TMDB_VIDEO_BACKDROP_HEIGHT, TMDB_VIDEO_BACKDROP_WIDTH } from '@/services/tmdb/constants';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';

interface CrossFadeBackgroundImageProps {
  currentBackgroundPath: string;
  previousBackgroundPath: string;
  activeImage: number;
}

export default function CrossFadeBackgroundImage({
  currentBackgroundPath,
  previousBackgroundPath,
  activeImage,
}: CrossFadeBackgroundImageProps) {
  const getBackgroundImagePath = (imageIndex: number) => {
    return activeImage === imageIndex
      ? getTMDBImagePath({
          height: TMDB_VIDEO_BACKDROP_HEIGHT,
          image: currentBackgroundPath,
          width: TMDB_VIDEO_BACKDROP_WIDTH,
        })
      : getTMDBImagePath({
          height: TMDB_VIDEO_BACKDROP_HEIGHT,
          image: previousBackgroundPath,
          width: TMDB_VIDEO_BACKDROP_WIDTH,
        });
  };

  const getBackgroundImageClassNames = (imageIndex: number) => {
    return cn(
      'opacity-0 transition-opacity duration-500 object-cover',
      activeImage === imageIndex && 'opacity-100 dark:opacity-10 duration-200'
    );
  };

  return (
    <>
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
    </>
  );
}
