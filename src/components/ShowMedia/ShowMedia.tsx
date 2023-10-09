import SectionHeading from '@/components/SectionHeading/SectionHeading';
import VideoScroller from '@/components/VideoScroller/VideoScroller';
import Image from '@/types/Image';
import Video from '@/types/Video';

interface ShowMediaProps {
  backdrops: Image[];
  posters: Image[];
  videos: Video[];
}

export default function ShowMedia({ backdrops, posters, videos }: ShowMediaProps) {
  return (
    <section className="grid w-full gap-4 overflow-hidden">
      <SectionHeading>Media</SectionHeading>
      <section className="overflow-hidden">
        <h3 className="mb-2 font-semibold">Videos ({videos.length})</h3>
        <VideoScroller videos={videos} />
      </section>
    </section>
  );
}
