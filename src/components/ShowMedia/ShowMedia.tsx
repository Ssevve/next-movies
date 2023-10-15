import ImageScroller from '@/components/ImageScroller/ImageScroller';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import VideoScroller from '@/components/VideoScroller/VideoScroller';
import ImageType from '@/types/Image';
import Video from '@/types/Video';

interface ShowMediaProps {
  backdrops: ImageType[];
  posters: ImageType[];
  videos: Video[];
}

export default function ShowMedia({ backdrops, posters, videos }: ShowMediaProps) {
  return (
    <section className="grid w-full gap-8 overflow-hidden">
      <SectionHeading>Media</SectionHeading>
      <div className="grid gap-12">
        <section className="overflow-hidden">
          <h3 className="mb-2 font-semibold">Videos ({videos.length})</h3>
          <VideoScroller videos={videos} limit={5} />
        </section>
        <section className="overflow-hidden">
          <h3 className="mb-2 font-semibold">Backdrops ({backdrops.length})</h3>
          <ImageScroller kind="backdrop" images={backdrops} limit={6} />
        </section>
        <section className="overflow-hidden">
          <h3 className="mb-2 font-semibold">Posters ({posters.length})</h3>
          <ImageScroller kind="poster" images={posters} limit={9} />
        </section>
      </div>
    </section>
  );
}
