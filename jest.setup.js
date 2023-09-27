import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from '@/__mocks__/server';

global.ResizeObserver = require('resize-observer-polyfill');

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
