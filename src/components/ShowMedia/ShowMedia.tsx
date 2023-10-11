import Image from 'next/image';
import Link from 'next/link';

import SectionHeading from '@/components/SectionHeading/SectionHeading';
import VideoScroller from '@/components/VideoScroller/VideoScroller';
import {
  TMDB_BACKDROP_THUMBNAIL_HEIGHT,
  TMDB_BACKDROP_THUMBNAIL_WIDTH,
  TMDB_SHOW_POSTER_HEIGHT,
  TMDB_SHOW_POSTER_WIDTH,
} from '@/services/tmdb/constants';
import getTMDBImagePath from '@/services/tmdb/utils/getTMDBImagePath/getTMDBImagePath';
import ImageType from '@/types/Image';
import Video from '@/types/Video';

import Scroller from '../Scroller/Scroller';
import Hoverable from '../ui/Hoverable';

interface ShowMediaProps {
  backdrops: ImageType[];
  posters: ImageType[];
  videos: Video[];
}

export default function ShowMedia({ backdrops, posters, videos }: ShowMediaProps) {
  return (
    <section className="grid w-full gap-8 overflow-hidden">
      <SectionHeading>Media</SectionHeading>
      <section className="overflow-hidden">
        <h3 className="mb-2 font-semibold">Videos ({videos.length})</h3>
        <VideoScroller videos={videos} />
      </section>
      <section className="overflow-hidden">
        <h3 className="mb-2 font-semibold">Backdrops ({backdrops.length})</h3>
        <Scroller
          emptyMessage="No images to display"
          listClassName="flex h-max space-x-4 px-2 pb-4"
        >
          {backdrops.map(({ path, width, height }) => (
            <Hoverable key={path} className="w-[275px]">
              <Link href={getTMDBImagePath({ image: path })} target="_blank">
                <Image
                  src={getTMDBImagePath({
                    height: TMDB_BACKDROP_THUMBNAIL_HEIGHT,
                    image: path,
                    width: TMDB_BACKDROP_THUMBNAIL_WIDTH,
                  })}
                  width={width}
                  height={height}
                  alt=""
                  className=""
                />
              </Link>
            </Hoverable>
          ))}
        </Scroller>
      </section>
      <section className="overflow-hidden">
        <h3 className="mb-2 font-semibold">Posters ({posters.length})</h3>
        <Scroller
          emptyMessage="No images to display"
          listClassName="flex h-max space-x-4 px-2 pb-4"
        >
          {posters.map(({ path, width, height }) => (
            <Hoverable key={path} className="w-[150px]">
              <Link
                href={getTMDBImagePath({
                  image: path,
                })}
                target="_blank"
              >
                <Image
                  src={getTMDBImagePath({
                    height: TMDB_SHOW_POSTER_HEIGHT,
                    image: path,
                    width: TMDB_SHOW_POSTER_WIDTH,
                  })}
                  width={width}
                  height={height}
                  alt=""
                  className=""
                />
              </Link>
            </Hoverable>
          ))}
        </Scroller>
      </section>
    </section>
  );
}
