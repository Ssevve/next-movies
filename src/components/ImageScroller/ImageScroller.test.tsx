import { render, screen } from '@testing-library/react';

import ImageScroller from '@/components/ImageScroller/ImageScroller';
import Image from '@/types/Image';

describe('ImageScroller', () => {
  it('should render correct amount of images', () => {
    const mockPosters: Image[] = [
      {
        height: 300,
        path: '/testPath1',
        width: 200,
      },
      {
        height: 300,
        path: '/testPath2',
        width: 200,
      },
    ];
    render(<ImageScroller images={mockPosters} kind="poster" />);
    expect(screen.getAllByRole('listitem')).toHaveLength(mockPosters.length);
  });

  it('should render "No backdrops to display" if "images" array is empty and "kind" is backdrop', () => {
    render(<ImageScroller images={[]} kind="backdrop" />);
    expect(screen.getByText('No backdrops to display')).toBeInTheDocument();
  });

  it('should render "No posters to display" if "images" array is empty and "kind" is poster', () => {
    render(<ImageScroller images={[]} kind="poster" />);
    expect(screen.getByText('No posters to display')).toBeInTheDocument();
  });
});
