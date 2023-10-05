import formatRuntime from '@/components/ShowMetadata/utils/formatRuntime/formatRuntime';
import joinGenres from '@/components/ShowMetadata/utils/joinGenres/joinGenres';
import Genre from '@/types/Genre';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

interface ShowMetadataProps {
  title: string;
  releaseDate: string;
  rating: string;
  genres: Genre[];
  runtime?: number;
}

export default function ShowMetadata({
  title,
  releaseDate,
  rating,
  genres,
  runtime,
}: ShowMetadataProps) {
  return (
    <>
      <h1 className="text-center text-2xl font-bold sm:text-left sm:text-3xl md:text-4xl lg:text-5xl">
        {title} ({getReleaseYear(releaseDate)})
      </h1>
      <div className="flex w-full flex-col flex-nowrap items-center justify-center gap-2 leading-none sm:flex-row sm:justify-start">
        <div className="flex items-center gap-2">
          {rating && (
            <span className=" my-auto rounded-md border border-foreground px-1 py-0.5 text-xs">
              {rating}
            </span>
          )}
          <span className="text-center text-sm">{releaseDate}</span>
        </div>
        {genres.length && (
          <>
            <span className="my-auto hidden h-max sm:block">&#x2022;</span>
            <span className="text-center text-sm">{joinGenres(genres)}</span>
          </>
        )}
        {runtime && (
          <>
            <span className="my-auto hidden h-max sm:block">&#x2022;</span>
            <span className="text-center text-sm">{formatRuntime(runtime)}</span>
          </>
        )}
      </div>
    </>
  );
}
