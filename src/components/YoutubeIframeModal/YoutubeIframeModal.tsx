'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';

import useLockedBody from '@/hooks/useLockedBody';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import getYoutubeThumbnail from '@/utils/getYoutubeThumbnail/getYoutubeThumbnail';

interface YoutubeIframeModalProps {
  videoKey: string;
}

export default function YoutubeIframeModal({ videoKey }: YoutubeIframeModalProps) {
  const iframeWrapperRef = useRef(null);
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useLockedBody(!!videoKey);

  const close = () => {
    setShowVideo(false);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('play');
    router.push(`${pathname}?${newParams}`, { scroll: false });
  };

  useOnClickOutside(iframeWrapperRef, close);

  return (
    <div className="fixed left-1/2 top-1/2 z-50 grid h-screen w-screen -translate-x-1/2 -translate-y-1/2 place-items-center bg-black/60 backdrop-grayscale">
      <div ref={iframeWrapperRef} className="absolute aspect-video w-[1280px] max-w-[90%]">
        {!showVideo && (
          <>
            <Image
              data-testid="youtube-video-thumbnail"
              className="absolute left-0 top-0 h-full w-full"
              src={getYoutubeThumbnail(videoKey)}
              alt=""
              fill
              onError={close}
            />
            <button
              aria-label="Play video"
              className="absolute left-0 right-0 top-0 h-full"
              onClick={() => setShowVideo(true)}
            >
              <Image
                className="mx-auto"
                alt="YouTube play button"
                src="/images/yt-play-button.png"
                width={68}
                height={48}
              />
            </button>
          </>
        )}
        {showVideo && (
          <iframe
            data-testid="youtube-iframe"
            src={`https://www.youtube-nocookie.com/embed/${videoKey}?autoplay=1`}
            className="aspect-video h-full w-full p-0"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={close}
          />
        )}
      </div>
    </div>
  );
}
