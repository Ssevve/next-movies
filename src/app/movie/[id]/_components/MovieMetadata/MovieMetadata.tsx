import formatRuntime from '@/app/movie/[id]/_components/MovieMetadata/utils/formatRuntime/formatRuntime';
import ShowMetadata, {
  ShowMetadataProps,
} from '@/components/ShowPageHeader/components/ShowMetadata/ShowMetadata';

interface MovieMetadataProps extends ShowMetadataProps {
  runtime: number;
}

export default function MovieMetadata({
  genres,
  rating,
  releaseDate,
  runtime,
  title,
}: MovieMetadataProps) {
  return (
    <div>
      <ShowMetadata genres={genres} rating={rating} releaseDate={releaseDate} title={title} />
      {runtime ? (
        <span className="relative flex w-max items-center text-sm leading-none before:absolute before:left-0 before:top-1/2 before:hidden before:h-[0.3rem] before:w-[0.3rem] before:-translate-y-1/2 before:rounded-full before:bg-foreground sm:pl-3 sm:before:block">
          {formatRuntime(runtime)}
        </span>
      ) : null}
    </div>
  );
}
