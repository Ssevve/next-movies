import { render, screen } from '@testing-library/react';

import ShowFacts from '@/components/ShowFacts/ShowFacts';

describe('ShowFacts', () => {
  it('should render status heading', () => {
    render(
      <ShowFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Status' })).toBeInTheDocument();
  });

  it('should render provided status', () => {
    const expectedStatus = 'Released';
    render(
      <ShowFacts
        budget={63000000}
        revenue={30000000}
        status={expectedStatus}
        originalLanguage="English"
      />
    );
    expect(screen.getByText(expectedStatus)).toBeInTheDocument();
  });

  it('should render original language heading', () => {
    render(
      <ShowFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Status' })).toBeInTheDocument();
  });

  it('should render provided original language', () => {
    const expectedLanguage = 'English';
    render(
      <ShowFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage={expectedLanguage}
      />
    );
    expect(screen.getByText(expectedLanguage)).toBeInTheDocument();
  });

  it('should not render budget heading if "budget" is not provided', () => {
    render(<ShowFacts networks={[]} type="Ended" status="Released" originalLanguage="English" />);
    expect(screen.queryByRole('heading', { name: 'Budget' })).not.toBeInTheDocument();
  });

  it('should render budget heading if "budget" is provided', () => {
    render(
      <ShowFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Budget' })).toBeInTheDocument();
  });

  it('should render correctly formatted budget if "budget" is provided', () => {
    const expectedStatus = 'Released';
    render(
      <ShowFacts
        budget={63000000}
        revenue={30000000}
        status={expectedStatus}
        originalLanguage="English"
      />
    );
    expect(screen.getByText('$63,000,000.00')).toBeInTheDocument();
  });

  it('should not render revenue heading if "revenue" is not provided', () => {
    render(<ShowFacts networks={[]} type="Ended" status="Released" originalLanguage="English" />);
    expect(screen.queryByRole('heading', { name: 'Revenue' })).not.toBeInTheDocument();
  });

  it('should render revenue heading if "revenue" is provided', () => {
    render(
      <ShowFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Revenue' })).toBeInTheDocument();
  });

  it('should render correctly formatted revenue if "revenue" is provided', () => {
    const expectedStatus = 'Released';
    render(
      <ShowFacts
        budget={63000000}
        revenue={30000000}
        status={expectedStatus}
        originalLanguage="English"
      />
    );
    expect(screen.getByText('$30,000,000.00')).toBeInTheDocument();
  });
});

it('should not render type heading if "type" is not provided', () => {
  render(
    <ShowFacts budget={63000000} revenue={30000000} status="Released" originalLanguage="English" />
  );
  expect(screen.queryByRole('heading', { name: 'Type' })).not.toBeInTheDocument();
});

it('should render type heading if "type" is provided', () => {
  render(<ShowFacts networks={[]} type="Ended" status="Released" originalLanguage="English" />);
  expect(screen.getByRole('heading', { name: 'Type' })).toBeInTheDocument();
});

it('should not render networks heading if "networks" is not provided', () => {
  render(
    <ShowFacts budget={63000000} revenue={30000000} status="Released" originalLanguage="English" />
  );
  expect(screen.queryByRole('heading', { name: 'Networks' })).not.toBeInTheDocument();
});

it('should render networks heading if "networks" is provided', () => {
  render(<ShowFacts networks={[]} type="Ended" status="Released" originalLanguage="English" />);
  expect(screen.getByRole('heading', { name: 'Networks' })).toBeInTheDocument();
});

it('should render all provided network logos', () => {
  const expectedNetworks = [
    { id: 1, logoPath: '/testFlixLogo', name: 'TestFlix' },
    { id: 2, logoPath: '/tstLogo', name: 'TsT' },
  ];

  render(
    <ShowFacts
      networks={expectedNetworks}
      type="Ended"
      status="Released"
      originalLanguage="English"
    />
  );
  expect(screen.getByRole('img', { name: 'TestFlix' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'TsT' })).toBeInTheDocument();
});

it('should not render images if "networks" array is empty', () => {
  render(<ShowFacts networks={[]} type="Ended" status="Released" originalLanguage="English" />);
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});
