import Image from 'next/image';

import Searchbar from '@/components/Searchbar/Searchbar';

export default function Hero() {
  return (
    <section className="relative -mt-4 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-b-md">
      <div className="z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          className="pointer-events-none object-cover object-center md:object-top"
          fill
          priority
        />
        <div className="absolute inset-0 bg-primary opacity-30" />
      </div>
      <div className="z-50 flex flex-col items-center justify-center gap-8 p-4 text-center lg:flex-row lg:justify-evenly lg:text-left">
        <div className="text-primary-foreground dark:text-foreground lg:min-w-[385px]">
          <h1 className="mb-4 max-w-[470px] break-keep text-4xl font-extrabold leading-none tracking-tight lg:text-5xl">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg">Find the latest and greatest movies and TV shows.</p>
        </div>
        <Searchbar />
      </div>
    </section>
  );
}
