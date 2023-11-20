import React from 'react';

import joinGenres from '@/components/ShowPageHeader/components/ShowMetadata/utils/joinGenres/joinGenres';
import { Genre } from '@/types/DetailedShow';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

export interface ShowMetadataProps {
  title: string;
  releaseDate: string;
  rating: string | null;
  genres: Genre[];
  children?: React.ReactNode;
}

export default function ShowMetadata({
  title,
  releaseDate,
  rating,
  genres,
  children,
}: ShowMetadataProps) {
  const releaseYear = getReleaseYear(releaseDate);
  return (
    <div>
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        {title} {releaseYear && `(${releaseYear})`}
      </h1>
      <div className="mt-2 flex w-full flex-col flex-wrap justify-center gap-4 leading-none sm:flex-row sm:justify-start sm:gap-2">
        <div className="flex gap-2">
          {rating && (
            <span className="my-auto flex w-max items-center rounded-md border border-foreground px-1 py-0.5 text-xs leading-none">
              {rating}
            </span>
          )}
          <span className="flex w-max items-center text-sm leading-none">{releaseDate}</span>
        </div>
        {genres.length ? (
          <span className="relative flex w-full max-w-max items-center text-sm leading-none before:absolute before:left-0 before:top-1/2 before:hidden before:h-[0.3rem] before:w-[0.3rem] before:-translate-y-1/2 before:rounded-full before:bg-foreground sm:pl-3 sm:before:block">
            {joinGenres(genres)}
          </span>
        ) : null}
        {React.Children.map(children, (child) => (
          <span className="relative flex w-max items-center text-sm leading-none before:absolute before:left-0 before:top-1/2 before:hidden before:h-[0.3rem] before:w-[0.3rem] before:-translate-y-1/2 before:rounded-full before:bg-foreground sm:pl-3 sm:before:block">
            {child}
          </span>
        ))}
      </div>
    </div>
  );
}
