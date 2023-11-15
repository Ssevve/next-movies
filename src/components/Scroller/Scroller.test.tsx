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

  it('should render all items if limit is not provided', () => {
    render(
      <Scroller emptyMessage="Test empty message">
        {mockShows.map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.getAllByTestId('show-card')).toHaveLength(mockShows.length);
  });

  it('should render all items if limit is 0', () => {
    render(
      <Scroller emptyMessage="Test empty message" limit={0}>
        {mockShows.map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.getAllByTestId('show-card')).toHaveLength(mockShows.length);
  });

  it('should render correct amount of items if limit is provided', () => {
    const expectedItemCount = 2;
    render(
      <Scroller emptyMessage="Test empty message" limit={expectedItemCount}>
        {mockShows.map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(expectedItemCount);
  });

  it('should render "show more" button if not all children are visible', () => {
    const expectedItemCount = 2;
    render(
      <Scroller emptyMessage="Test empty message" limit={expectedItemCount}>
        {mockShows.map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.getByRole('button', { name: 'Show More' })).toBeInTheDocument();
  });

  it('should not render "show more" button if all children are visible', () => {
    render(
      <Scroller emptyMessage="Test empty message">
        {mockShows.map(({ title }) => (
          <p key={title}>{title}</p>
        ))}
      </Scroller>
    );
    expect(screen.queryByRole('button', { name: 'Show More' })).not.toBeInTheDocument();
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
