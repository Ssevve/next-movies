import { render, screen } from '@testing-library/react';

import mockVideos from '@/__mocks__/data/mockVideos';
import VideoScroller from '@/components/VideoScroller/VideoScroller';

jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    useSearchParams: jest.fn(() => ({ param: 'test' })),
  };
});

describe('VideoScroller', () => {
  it('should render correct amount of videos', () => {
    render(<VideoScroller videos={mockVideos} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(mockVideos.length);
  });

  it('should render "No videos to display" if videos array is empty', () => {
    render(<VideoScroller videos={[]} />);
    expect(screen.getByText('No videos to display')).toBeInTheDocument();
  });
});
