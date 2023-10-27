import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from '@/__mocks__/server';

global.ResizeObserver = require('resize-observer-polyfill');

// scrollIntoView mock
window.HTMLElement.prototype.scrollIntoView = jest.fn();

jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn(),
    useSearchParams: jest.fn(() => new URLSearchParams({ query: 'testQuery' })),
  };
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
