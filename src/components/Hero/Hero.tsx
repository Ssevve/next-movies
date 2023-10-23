import Image from 'next/image';

import Searchbar from '../Searchbar/Searchbar';

export default function Hero() {
  return (
    <section className="-mt-4 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-b-md">
      <div className="relative h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            className="pointer-events-none object-cover object-center md:object-top"
            fill
            priority
          />
          <div className="absolute inset-0 bg-primary opacity-30" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-4 text-center md:flex-row md:justify-evenly md:text-left">
          <div className="text-primary-foreground dark:text-foreground md:min-w-[385px]">
            <h1 className="mb-4 max-w-[470px] break-keep text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-lg">Find the latest and greatest movies and TV shows.</p>
          </div>
          <div className="relative flex w-full max-w-sm items-center">
            <Searchbar />
          </div>
        </div>
      </div>
    </section>
  );
}
