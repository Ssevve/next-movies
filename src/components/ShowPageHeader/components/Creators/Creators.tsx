import joinCreators from '@/components/ShowPageHeader/utils/joinCreators/joinCreators';
import { Creator } from '@/types/DetailedShow';
import { ShowType } from '@/types/Show';

interface CreatorsProps {
  creators: Creator[];
  showType: ShowType;
}

export default function Creators({ creators, showType }: CreatorsProps) {
  const isMovie = showType === 'movie';
  return creators.length ? (
    <div className="w-full">
      <span>{isMovie ? 'Directed' : 'Created'} by:</span>
      <span className="ml-2 font-normal">{joinCreators(creators)}</span>
    </div>
  ) : null;
}
