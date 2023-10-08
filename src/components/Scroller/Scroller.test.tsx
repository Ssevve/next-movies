import { render, screen } from '@testing-library/react';

import mockShows from '@/__mocks__/data/mockShows';
import Scroller from '@/components/Scroller/Scroller';

describe('Scroller', () => {
  it('should render a list if has children', () => {
    render(
      <Scroller emptyMessage="Test empty message">
        {mockShows.map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render correct amount of items', () => {
    render(
      <Scroller emptyMessage="Test empty message">
        {mockShows.map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(mockShows.length);
  });

  it('should not render a list if has no children', () => {
    render(
      <Scroller emptyMessage="Test empty message">
        {[].map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should render "emptyMessage" if has no children', () => {
    const expectedEmptyMessage = 'Test empty message';
    render(
      <Scroller emptyMessage={expectedEmptyMessage}>
        {[].map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.getByText(expectedEmptyMessage)).toBeInTheDocument();
  });
});
