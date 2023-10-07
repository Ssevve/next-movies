import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LinkWithTooltip from '@/components/LinkWithTooltip/LinkWithTooltip';

describe('LinkWithTooltip', () => {
  it('should render children', async () => {
    const expectedChildren = 'Test children';
    render(
      <LinkWithTooltip tooltipText="Test tooltip" href="/">
        {expectedChildren}
      </LinkWithTooltip>
    );

    expect(screen.getByText(expectedChildren)).toBeInTheDocument();
  });

  it('should render with correct "href" attribute', async () => {
    const expectedHref = '/test-href';
    render(
      <LinkWithTooltip tooltipText="Test tooltip" href="/test-href">
        Test children
      </LinkWithTooltip>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', expectedHref);
  });

  it('should have the same "aria-label" attribute as "tooltipText"', async () => {
    const expectedAriaLabel = 'Test tooltip';
    render(
      <LinkWithTooltip tooltipText={expectedAriaLabel} href="/test-href">
        Test children
      </LinkWithTooltip>
    );

    expect(screen.getByRole('link', { name: expectedAriaLabel })).toBeInTheDocument();
  });

  it('should render a tooltip with correct content on hover', async () => {
    const user = await userEvent.setup();
    const expectedTooltip = 'Test tooltip';
    render(
      <LinkWithTooltip tooltipText={expectedTooltip} href="/">
        Test children
      </LinkWithTooltip>
    );

    await user.hover(screen.getByRole('link'));

    await waitFor(() => {
      // Shadcn tooltip content renders twice for some reason
      expect(screen.getAllByText(expectedTooltip)).toHaveLength(2);
    });
  });
});
