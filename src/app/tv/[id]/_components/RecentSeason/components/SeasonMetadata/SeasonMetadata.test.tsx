import { render, screen } from '@testing-library/react';

import SeasonMetadata, {
  SeasonMetadataProps,
} from '@/app/tv/[id]/_components/RecentSeason/components/SeasonMetadata/SeasonMetadata';
import getReleaseYear from '@/utils/getReleaseYear/getReleaseYear';

describe('SeasonMetadata', () => {
  it('should correctly render metadata', () => {
    const testMetadata: SeasonMetadataProps = {
      airDate: 'Jan 10, 2021',
      episodeCount: 5,
      name: 'Test Season',
      userScore: 3.3,
    };

    render(
      <SeasonMetadata
        airDate={testMetadata.airDate}
        episodeCount={testMetadata.episodeCount}
        name={testMetadata.name}
        userScore={testMetadata.userScore}
      />
    );
    expect(screen.getByText(getReleaseYear(testMetadata.airDate))).toBeInTheDocument();
    expect(screen.getByText(`${testMetadata.episodeCount} episodes`)).toBeInTheDocument();
    expect(screen.getByText(testMetadata.name)).toBeInTheDocument();
    expect(screen.getByText(testMetadata.userScore)).toBeInTheDocument();
  });
});
