import { render, screen } from '@testing-library/react';

import SectionHeading from '@/components/SectionHeading/SectionHeading';

describe('SectionHeading', () => {
  it('should render correct text', () => {
    render(<SectionHeading>test text</SectionHeading>);
    expect(screen.getByRole('heading', { level: 2, name: 'test text' })).toBeInTheDocument();
  });
});
