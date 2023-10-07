import { render, screen } from '@testing-library/react';

import ShowOverview from '@/components/ShowOverview/ShowOverview';

describe('ShowOverview', () => {
  it('should render overview', () => {
    const expectedOverview = 'test overview';
    render(<ShowOverview overview="test overview" />);
    expect(screen.getByText(expectedOverview)).toBeInTheDocument();
  });
});
