import joinCreators from '@/utils/joinCreators/joinCreators';
import Creator from '@/types/Creator';
import ShowType from '@/types/ShowType';

interface CreatorsProps {
  creators: Creator[];
  showType: ShowType;
}

export default function Creators({ creators, showType }: CreatorsProps) {
  const isMovie = showType === 'movie';
  return creators.length ? (
    <div className="mx-auto text-center sm:mx-0 sm:text-left">
      <span>{isMovie ? 'Directed' : 'Created'} by:</span>
      <span className="ml-2 font-normal">{joinCreators(creators)}</span>
    </div>
  ) : null;
}
