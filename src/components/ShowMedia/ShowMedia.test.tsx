import { render, screen } from '@testing-library/react';

import mockImages from '@/__mocks__/data/mockImages';
import mockVideos from '@/__mocks__/data/mockVideos';
import ShowMedia from '@/components/ShowMedia/ShowMedia';

describe('ShowMedia', () => {
  it('should render "Media" heading"', () => {
    render(<ShowMedia posters={mockImages} backdrops={mockImages} videos={mockVideos} />);
    expect(screen.getByRole('heading', { name: 'Media' })).toBeInTheDocument();
  });

  it('should render "Videos" heading with correct video count"', () => {
    render(<ShowMedia posters={mockImages} backdrops={mockImages} videos={mockVideos} />);
    expect(
      screen.getByRole('heading', { name: `Videos (${mockVideos.length})` })
    ).toBeInTheDocument();
  });

  it('should render "Posters" heading with correct posters count"', () => {
    render(<ShowMedia posters={mockImages} backdrops={mockImages} videos={mockVideos} />);
    expect(
      screen.getByRole('heading', { name: `Posters (${mockImages.length})` })
    ).toBeInTheDocument();
  });

  it('should render "Backdrops" heading with correct backdrops count"', () => {
    render(<ShowMedia posters={mockImages} backdrops={mockImages} videos={mockVideos} />);
    expect(
      screen.getByRole('heading', { name: `Backdrops (${mockImages.length})` })
    ).toBeInTheDocument();
  });

  it('should render "Backdrops" heading with correct backdrops count"', () => {
    render(<ShowMedia posters={mockImages} backdrops={mockImages} videos={mockVideos} />);
    expect(
      screen.getByRole('heading', { name: `Backdrops (${mockImages.length})` })
    ).toBeInTheDocument();
  });

  it('should render three scroller components"', () => {
    render(<ShowMedia posters={mockImages} backdrops={mockImages} videos={mockVideos} />);
    expect(screen.getAllByRole('list')).toHaveLength(3);
  });

  it('should render all passed in items"', () => {
    const expectedLength = mockVideos.length + 2 * mockImages.length;
    render(<ShowMedia posters={mockImages} backdrops={mockImages} videos={mockVideos} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(expectedLength);
  });
});
