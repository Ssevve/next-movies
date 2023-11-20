import { render, screen } from '@testing-library/react';

import mockShows from '@/__mocks__/data/mockShows';
import ShowPoster from '@/components/ShowPoster/ShowPoster';

describe('ShowPoster', () => {
  it('should render an image with correct "src" attribute if poster path exists', () => {
    const expectedShow = mockShows[0];
    render(<ShowPoster poster={expectedShow.poster} showTitle={expectedShow.title} />);
    const showPoster: HTMLImageElement = screen.getByRole('img');
    const expectedImageName = expectedShow.poster.path.split('/').slice(-1)[0];
    expect(showPoster.src).toContain(expectedImageName);
  });
});
