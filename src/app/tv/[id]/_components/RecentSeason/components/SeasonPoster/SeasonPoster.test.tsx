import { render, screen } from '@testing-library/react';

import SeasonPoster from '@/app/tv/[id]/_components/RecentSeason/components/SeasonPoster/SeasonPoster';
import Image from '@/types/Image';

const testPoster: Image = {
  height: 200,
  path: '/testPath.jpg',
  width: 300,
};

describe('SeasonPoster', () => {
  it('should render with empty alt text by default', () => {
    render(<SeasonPoster poster={testPoster} />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
  });

  it('should render an image with correct alt attribute', () => {
    const testAlt = 'testPoster';
    render(<SeasonPoster poster={testPoster} alt={testAlt} />);
    expect(screen.getByRole('img', { name: testAlt })).toBeInTheDocument();
  });

  it('should render an image with correct src attribute', () => {
    const testAlt = 'testPoster';
    render(<SeasonPoster poster={testPoster} alt={testAlt} />);
    const image: HTMLImageElement = screen.getByRole('img', { name: testAlt });
    expect(image.src).toContain(testPoster.path.slice(1));
  });

  it('should render a <NoImage /> component instead of image if poster path is not defined', () => {
    const testAlt = 'testPoster';
    const posterWithNoPath = { ...testPoster, path: '' };
    render(<SeasonPoster poster={posterWithNoPath} alt={testAlt} />);
    expect(screen.queryByRole('img', { name: testAlt })).not.toBeInTheDocument();
    expect(screen.getByTestId('no-image')).toBeInTheDocument();
  });

  it('should render a <NoImage /> component instead of image if poster path is not defined', () => {
    const testAlt = 'testPoster';
    const posterWithNoPath = { ...testPoster, path: '' };
    render(<SeasonPoster poster={posterWithNoPath} alt={testAlt} />);
    expect(screen.queryByRole('img', { name: testAlt })).not.toBeInTheDocument();
    expect(screen.getByTestId('no-image')).toBeInTheDocument();
  });
});
