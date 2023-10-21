import { render, screen } from '@testing-library/react';

import ShowFacts from '@/components/ShowFacts/ShowFacts';

describe('ShowFacts', () => {
  it('should render status heading', () => {
    render(<ShowFacts status="Released" originalLanguage="English" />);
    expect(screen.getByRole('heading', { name: 'Status' })).toBeInTheDocument();
  });

  it('should render provided status', () => {
    const expectedStatus = 'Released';
    render(<ShowFacts status={expectedStatus} originalLanguage="English" />);
    expect(screen.getByText(expectedStatus)).toBeInTheDocument();
  });

  it('should render original language heading', () => {
    render(<ShowFacts status="Released" originalLanguage="English" />);
    expect(screen.getByRole('heading', { name: 'Status' })).toBeInTheDocument();
  });

  it('should render provided original language', () => {
    const expectedLanguage = 'English';
    render(<ShowFacts status="Released" originalLanguage={expectedLanguage} />);
    expect(screen.getByText(expectedLanguage)).toBeInTheDocument();
  });
});
