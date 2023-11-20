import { render, screen } from '@testing-library/react';

import mockShows from '@/__mocks__/data/mockShows';
import ShowScrollerCard, {
  ShowScrollerCardProps,
} from '@/components/ShowScroller/components/ShowScrollerCard/ShowScrollerCard';

const testShow = mockShows[0];

const renderShowScrollerCard = (props?: Partial<ShowScrollerCardProps>) => {
  return render(<ShowScrollerCard {...testShow} {...props} />);
};

describe('ShowScrollerCard', () => {
  it('should render general show information', () => {
    renderShowScrollerCard();
    screen.getByAltText(testShow.title);
    screen.getByText(testShow.userScore);
    screen.getByText(testShow.title);
    screen.getByText(testShow.releaseDate);
  });

  it('should render <NoImage /> component if poster has no path specified', () => {
    renderShowScrollerCard({ poster: { height: 300, path: '', width: 200 } });
    screen.getByTestId('no-image');
  });

  it('should render link to the detailed show page', () => {
    renderShowScrollerCard();
    const linkElements = screen.getAllByRole('link');
    linkElements.some((link) => {
      expect(link).toHaveAttribute('href', `/${testShow.showType}/${testShow.id}`);
    });
  });
});
