import { render, screen } from '@testing-library/react';

import WhatsPopular from '@/app/_components/WhatsPopular/WhatsPopular';

describe('WhatsPopular', () => {
  it('should render <TabsSection /> component with correct title', async () => {
    render(await WhatsPopular());
    expect(screen.getByRole('heading', { name: "What's Popular" })).toBeInTheDocument();
  });
});
