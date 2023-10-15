import formatRuntime from '@/components/ShowPageHeader/components/ShowMetadata/utils/formatRuntime/formatRuntime';
import joinGenres from '@/components/ShowPageHeader/components/ShowMetadata/utils/joinGenres/joinGenres';
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
      <h1 className="text-2xl font-bold  sm:text-3xl md:text-4xl lg:text-5xl">
        {title} ({getReleaseYear(releaseDate)})
      </h1>
      <div className="flex w-full flex-col flex-wrap justify-center gap-4 leading-none sm:flex-row sm:justify-start md:gap-2">
        <div className="flex gap-2">
          {rating && (
            <span className="my-auto flex items-center rounded-md border border-foreground px-1 py-0.5 text-xs leading-none">
              {rating}
            </span>
          )}
          <span className="flex w-max items-center text-sm leading-none">{releaseDate}</span>
        </div>
        {genres.length ? (
          <div className="flex">
            <span className="mr-2 hidden items-center sm:flex">&#x2022;</span>
            <span className="flex w-max items-center text-sm leading-none">
              {joinGenres(genres)}
            </span>
          </div>
        ) : null}
        {runtime ? (
          <div className="flex">
            <span className="my-auto mr-2 hidden h-max sm:block">&#x2022;</span>
            <span className="flex w-max items-center text-sm leading-none">
              {formatRuntime(runtime)}
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
}
