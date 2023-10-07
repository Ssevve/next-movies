import { render, screen } from '@testing-library/react';

import ShowExternalLinks from '@/components/ShowExternalLinks/ShowExternalLinks';

describe('ShowExternalLinks', () => {
  it('should render a list if at least one social handle is present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: 'instagramHandle',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should not render a list if no social handles are present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should render a correct facebook link if facebook handle is present', () => {
    const expectedSocials = {
      facebook: 'facebookHandle',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );

    expect(screen.getByRole('link', { name: 'Visit Facebook' })).toHaveAttribute('href');
  });

  it('should render a facebook link with correct "href" attribute if facebook handle is present', () => {
    const expectedSocials = {
      facebook: 'facebookHandle',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );

    expect(screen.getByRole('link', { name: 'Visit Facebook' })).toHaveAttribute(
      'href',
      'https://www.facebook.com/facebookHandle'
    );
  });

  it('should not render a facebook link if facebook handle is not present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.queryByRole('link', { name: 'Visit Facebook' })).not.toBeInTheDocument();
  });

  it('should render a twitter link if twitter handle is present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: 'twitterHandle',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.getByRole('link', { name: 'Visit Twitter' })).toBeInTheDocument();
  });

  it('should render a twitter link with correct "href" attribute if twitter handle is present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: 'twitterHandle',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.getByRole('link', { name: 'Visit Twitter' })).toHaveAttribute(
      'href',
      'https://www.twitter.com/twitterHandle'
    );
  });

  it('should not render a twitter link if twitter handle is not present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.queryByRole('link', { name: 'Visit Twitter' })).not.toBeInTheDocument();
  });

  it('should render an instagram link if instagram handle is present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: 'instagramHandle',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.getByRole('link', { name: 'Visit Instagram' })).toBeInTheDocument();
  });

  it('should render an instagram link with correct "href" attribute if instagram handle is present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: 'instagramHandle',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.getByRole('link', { name: 'Visit Instagram' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/instagramHandle'
    );
  });

  it('should not render an instagram link if instagram handle is not present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.queryByRole('link', { name: 'Visit Instagram' })).not.toBeInTheDocument();
  });

  it('should render a homepage link if present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.getByRole('link', { name: 'Visit Homepage' })).toBeInTheDocument();
  });

  it('should render a homepage link with correct "href" attribute if present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage="testHomepage"
      />
    );
    expect(screen.getByRole('link', { name: 'Visit Homepage' })).toHaveAttribute(
      'href',
      'testHomepage'
    );
  });

  it('should not render a homepage link if not present', () => {
    const expectedSocials = {
      facebook: '',
      instagram: '',
      twitter: '',
    };
    render(
      <ShowExternalLinks
        facebookHandle={expectedSocials.facebook}
        instagramHandle={expectedSocials.instagram}
        twitterHandle={expectedSocials.twitter}
        homepage=""
      />
    );
    expect(screen.queryByRole('link', { name: 'Visit Homepage' })).not.toBeInTheDocument();
  });
});
