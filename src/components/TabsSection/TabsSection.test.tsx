import { render, screen } from '@testing-library/react';

import TabsSection from '@/components/TabsSection/TabsSection';
import Tab from '@/types/Tab';

describe('TabsSection', () => {
  it('should correctly render a title', () => {
    const expectedTitle = 'Test title';
    render(
      <TabsSection
        title="Test title"
        tabs={[
          {
            content: <p>Test content</p>,
            label: 'Test label',
          },
        ]}
      />
    );
    expect(screen.getByRole('heading', { name: expectedTitle })).toBeInTheDocument();
  });

  it('should correctly render a tab trigger', () => {
    const expectedTab: Tab = {
      content: <p>Test content</p>,
      label: 'Test label',
    };
    render(<TabsSection title="Test title" tabs={[expectedTab]} />);
    expect(screen.getByText(expectedTab.label)).toBeInTheDocument();
  });

  it('should correctly render a tab content', () => {
    const expectedTextContent = 'Test content text';
    const expectedTab: Tab = {
      content: <p>{expectedTextContent}</p>,
      label: 'Test label',
    };
    render(<TabsSection title="Test title" tabs={[expectedTab]} />);
    expect(screen.getByText(expectedTextContent)).toBeInTheDocument();
  });

  it('should render multiple tabs', () => {
    const expectedTabs: Tab[] = [
      {
        content: <p>Test content one</p>,
        label: 'Test label one',
      },
      {
        content: <p>Test content two</p>,
        label: 'Test label two',
      },
    ];
    render(<TabsSection title="Test title" tabs={expectedTabs} />);

    expectedTabs.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
