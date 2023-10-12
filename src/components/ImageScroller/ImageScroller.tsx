import Image from 'next/image';
import Link from 'next/link';

import Scroller from '@/components/Scroller/Scroller';
import Hoverable from '@/components/ui/Hoverable';
import { imageSizes } from '@/services/tmdb/config';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import ImageType from '@/types/Image';

interface ImageScrollerProps {
  images: ImageType[];
  kind: 'poster' | 'backdrop';
}

export default function ImageScroller({ images, kind }: ImageScrollerProps) {
  const isPoster = kind === 'poster';
  const imageWidth = isPoster
    ? imageSizes.posters.show.width
    : imageSizes.thumbnails.backdrop.width;
  const imageHeight = isPoster
    ? imageSizes.posters.show.height
    : imageSizes.thumbnails.backdrop.height;

  const widthClassName = isPoster ? 'w-[150px]' : 'w-[250px]';

  const emptyMessage = `No ${kind}s to display`;

  return (
    <Scroller emptyMessage={emptyMessage} listClassName="flex h-max space-x-4 px-2 pb-4">
      {images.map(({ path, width, height }) => (
        <Hoverable key={path} className={widthClassName}>
          <Link href={getTMDBImagePath(path)}>
            <Image
              src={getTMDBImagePath(path, imageWidth, imageHeight)}
              width={width}
              height={height}
              alt=""
              className=""
            />
          </Link>
        </Hoverable>
      ))}
    </Scroller>
  );
}
