import Creator from '@/types/Creator';
import ShowType from '@/types/ShowType';
import joinCreators from '@/utils/joinCreators/joinCreators';

interface CreatorsProps {
  creators: Creator[];
  showType: ShowType;
}

export default function Creators({ creators, showType }: CreatorsProps) {
  const isMovie = showType === 'movie';
  return creators.length ? (
    <div>
      <span>{isMovie ? 'Directed' : 'Created'} by:</span>
      <span className="ml-2 font-normal">{joinCreators(creators)}</span>
    </div>
  ) : null;
}
