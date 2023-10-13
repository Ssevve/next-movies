import { render, screen } from '@testing-library/react';

import mockImages from '@/__mocks__/data/mockImages';
import ImageScroller from '@/components/ImageScroller/ImageScroller';

describe('ImageScroller', () => {
  it('should render correct amount of images', () => {
    render(<ImageScroller images={mockImages} kind="poster" />);
    expect(screen.getAllByRole('listitem')).toHaveLength(mockImages.length);
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
