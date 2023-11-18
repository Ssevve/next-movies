import { render, screen, waitFor } from '@testing-library/react';

import PeoplePage from '@/app/person/page';

describe('PeoplePage', () => {
  it('should render <PaginatedPeople /> component', async () => {
    render(await PeoplePage({ searchParams: { page: '1' } }));
    await waitFor(() => {
      screen.getAllByTestId('person-card');
    });
  });
});
