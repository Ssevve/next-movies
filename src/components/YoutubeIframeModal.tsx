'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import useLockedBody from '@/hooks/useLockedBody';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface YoutubeIframeModalProps {
  videoKey: string;
}

export default function YoutubeIframeModal({
  videoKey,
}: YoutubeIframeModalProps) {
  const iframeWrapperRef = useRef(null);
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);

  useLockedBody(!!videoKey);

  const close = () => {
    setShowVideo(false);
    router.back();
  };

  useOnClickOutside(iframeWrapperRef, close);

  return (
    <div className="fixed left-1/2 top-1/2 z-50 grid h-screen w-screen -translate-x-1/2 -translate-y-1/2 place-items-center bg-black/60 backdrop-grayscale">
      <div
        ref={iframeWrapperRef}
        className="absolute aspect-video w-[1280px] max-w-[90%]"
      >
        {!showVideo && (
          <>
            <Image
              className="absolute left-0 top-0 h-full w-full"
              src={`https://i.ytimg.com/vi/${videoKey}/hqdefault.jpg`}
              alt=""
              fill
            />
            <button
              className="absolute left-0 right-0 top-0 h-full"
              onClick={() => setShowVideo(true)}
            >
              <Image
                className="mx-auto"
                src="/images/yt-play-button.png"
                alt="Play video"
                width={68}
                height={48}
              />
            </button>
          </>
        )}
        {showVideo && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoKey}?autoplay=1`}
            className="aspect-video h-full w-full p-0"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
