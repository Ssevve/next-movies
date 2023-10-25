import CastPersonCard from '@/components/CastPersonCard/CastPersonCard';
import Scroller, { ScrollerProps } from '@/components/Scroller/Scroller';
import MovieCastPerson from '@/types/MovieCastPerson';
import TvShowCastPerson from '@/types/TvShowCastPerson';

interface CastScrollerProps extends Pick<ScrollerProps, 'limit'> {
  cast: (MovieCastPerson | TvShowCastPerson)[];
}

function isMovieCastPerson(
  castPerson: MovieCastPerson | TvShowCastPerson
): castPerson is MovieCastPerson {
  return 'character' in castPerson;
}

function generateCharactersString(characters: string[]) {
  const limit = 3;

  const limitedCharacters = characters.slice(0, limit).map((character) => character);
  let charactersString = `${limitedCharacters.join(', ')}`;

  const charactersLeft = characters.length - limit;
  if (charactersLeft > 0) charactersString += ` and ${charactersLeft} more`;

  return charactersString;
}

export default function CastScroller({ cast, limit }: CastScrollerProps) {
  return (
    <Scroller
      emptyMessage="No cast to display"
      listClassName="flex h-max space-x-4 px-2 pb-4"
      limit={limit}
    >
      {cast.map((person) => (
        <CastPersonCard key={person.id} name={person.name} imagePath={person.imagePath}>
          {isMovieCastPerson(person) ? (
            <span className="mt-1 text-xs text-slate-400">{person.character}</span>
          ) : (
            <>
              <p className="mt-1 text-xs text-slate-400">
                {generateCharactersString(person.characters)}
              </p>
              <span className="mt-1 block text-xs">{person.totalEpisodeCount} episodes</span>
            </>
          )}
        </CastPersonCard>
      ))}
    </Scroller>
  );
}
