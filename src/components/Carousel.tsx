import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';

interface ScrollbarProgressProps {
  progress: number;
}

function ScrollProgressBar({ progress }: ScrollbarProgressProps) {
  return (
    <div className="pointer-events-none relative left-0 right-0 mx-auto h-1 w-full overflow-hidden rounded-md bg-secondary">
      <div
        className="absolute -left-full bottom-0 top-0 w-full bg-primary"
        style={{ transform: `translate3d(${progress}%,0px,0px)` }}
      />
    </div>
  );
}

interface CarouselProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Carousel({ children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    skipSnaps: true,
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <ul className="mb-0.5 flex touch-pan-y gap-2">
        {React.Children.map(children, (child) => (
          <li className="shrink-0 basis-[175px]">{child}</li>
        ))}
      </ul>
      <ScrollProgressBar progress={scrollProgress} />
    </div>
  );
}
