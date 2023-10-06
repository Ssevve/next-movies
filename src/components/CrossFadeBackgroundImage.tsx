import Image from 'next/image';

import cn from '@/lib/cn';
import { TMDB_IMAGE_URL, TMDB_SCROLLER_BACKGROUND_PATH } from '@/services/tmdb/constants';

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
    return `${TMDB_IMAGE_URL}${TMDB_SCROLLER_BACKGROUND_PATH}${
      activeImage === imageIndex ? currentBackgroundPath : previousBackgroundPath
    }`;
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
