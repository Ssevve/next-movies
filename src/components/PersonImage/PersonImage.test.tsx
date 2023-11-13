import { render, screen } from '@testing-library/react';

import PersonImage from '@/components/PersonImage/PersonImage';

const image = {
  alt: 'John',
  path: '/john.jpg',
};

describe('PersonImage', () => {
  it('should render an image with correct "alt" attribute', () => {
    render(<PersonImage alt={image.alt} imagePath={image.path} />);
    screen.getByAltText(image.alt);
  });

  it('should render an image with correct "src" attribute', () => {
    render(<PersonImage alt={image.alt} imagePath={image.path} />);
    const imageElement: HTMLImageElement = screen.getByAltText(image.alt);
    expect(imageElement.src).toContain(image.path.slice(1));
  });

  it('should render <NoImage /> component if imagePath is empty', () => {
    render(<PersonImage alt={image.alt} imagePath={''} />);
    screen.getByTestId('no-image');
  });

  it('should render <NoImage /> component if imagePath is not provided', () => {
    render(<PersonImage alt={image.alt} />);
    screen.getByTestId('no-image');
  });
});
