import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from '@/__mocks__/server';

global.ResizeObserver = require('resize-observer-polyfill');

jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    useSearchParams: jest.fn(() => ({ param: 'test' })),
  };
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
