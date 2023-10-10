import { render, screen } from '@testing-library/react';

import MovieFacts from '@/app/movie/[id]/_components/MovieFacts/MovieFacts';

describe('MovieFacts', () => {
  it('should render status heading', () => {
    render(
      <MovieFacts
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
      <MovieFacts
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
      <MovieFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Status' })).toBeInTheDocument();
  });

  it('should render provided status', () => {
    const expectedLanguage = 'English';
    render(
      <MovieFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage={expectedLanguage}
      />
    );
    expect(screen.getByText(expectedLanguage)).toBeInTheDocument();
  });

  it('should render budget heading', () => {
    render(
      <MovieFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Budget' })).toBeInTheDocument();
  });

  it('should render correctly formatted budget', () => {
    const expectedStatus = 'Released';
    render(
      <MovieFacts
        budget={63000000}
        revenue={30000000}
        status={expectedStatus}
        originalLanguage="English"
      />
    );
    expect(screen.getByText('$63,000,000.00')).toBeInTheDocument();
  });

  it('should render revenue heading', () => {
    render(
      <MovieFacts
        budget={63000000}
        revenue={30000000}
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Revenue' })).toBeInTheDocument();
  });

  it('should render correctly formatted revenue', () => {
    const expectedStatus = 'Released';
    render(
      <MovieFacts
        budget={63000000}
        revenue={30000000}
        status={expectedStatus}
        originalLanguage="English"
      />
    );
    expect(screen.getByText('$30,000,000.00')).toBeInTheDocument();
  });
});
