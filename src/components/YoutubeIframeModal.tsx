'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import useLockedBody from '@/hooks/useLockedBody';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface YoutubeIframeModalProps {
  videoKey: string;
}

export default function YoutubeIframeModal({
  videoKey,
}: YoutubeIframeModalProps) {
  const iframeRef = useRef(null);
  const router = useRouter();

  useLockedBody(!!videoKey);

  const close = () => router.back();

  useOnClickOutside(iframeRef, close);
  return (
    <div className="fixed left-1/2 top-1/2 z-50 grid h-screen w-screen -translate-x-1/2 -translate-y-1/2 place-items-center bg-black/60 backdrop-grayscale">
      <div className="absolute w-[1280px] max-w-[90%]">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${videoKey}`}
          className="aspect-video h-full w-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}
