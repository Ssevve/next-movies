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
    <ShowMetadata genres={genres} rating={rating} releaseDate={releaseDate} title={title}>
      {runtime ? <>{formatRuntime(runtime)}</> : null}
    </ShowMetadata>
  );
}
