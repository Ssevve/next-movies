import { render, screen } from '@testing-library/react';

import TvShowFacts from '@/app/tv/[id]/_components/TvShowFacts/TvShowFacts';
import Network from '@/types/Network';

describe('TvShowFacts', () => {
  it('should render <ShowFacts /> component', () => {
    render(
      <TvShowFacts networks={[]} type="Scripted" status="Released" originalLanguage="English" />
    );
    expect(screen.getByRole('heading', { name: 'Status' })).toBeInTheDocument();
  });

  it('should render type heading', () => {
    render(
      <TvShowFacts networks={[]} type="Scripted" status="Released" originalLanguage="English" />
    );
    expect(screen.getByRole('heading', { name: 'Type' })).toBeInTheDocument();
  });

  it('should render correct type', () => {
    const expectedType = 'Scripted';
    render(
      <TvShowFacts networks={[]} type={expectedType} status="Released" originalLanguage="English" />
    );
    expect(screen.getByText(expectedType)).toBeInTheDocument();
  });

  it('should render correct networks heading for one network', () => {
    const expectedNetworks: Network[] = [
      {
        id: 1,
        logoPath: 'testPath',
        name: ' Test Network',
      },
    ];
    render(
      <TvShowFacts
        networks={expectedNetworks}
        type="Scripted"
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Network' })).toBeInTheDocument();
  });

  it('should render correct networks heading for multiple networks', () => {
    const expectedNetworks: Network[] = [
      {
        id: 1,
        logoPath: '/testFlixLogo',
        name: 'TestFlix',
      },
      {
        id: 2,
        logoPath: '/tstLogo',
        name: 'TsT',
      },
    ];
    render(
      <TvShowFacts
        networks={expectedNetworks}
        type="Scripted"
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('heading', { name: 'Networks' })).toBeInTheDocument();
  });

  it('should render logos of all provided networks', () => {
    const expectedNetworks = [
      { id: 1, logoPath: '/testFlixLogo', name: 'TestFlix' },
      { id: 2, logoPath: '/tstLogo', name: 'TsT' },
    ];

    render(
      <TvShowFacts
        networks={expectedNetworks}
        type="Scripted"
        status="Released"
        originalLanguage="English"
      />
    );
    expect(screen.getByRole('img', { name: 'TestFlix' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'TsT' })).toBeInTheDocument();
  });

  it('should not render any images if "networks" array is empty', () => {
    render(
      <TvShowFacts networks={[]} type="Scripted" status="Released" originalLanguage="English" />
    );
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
