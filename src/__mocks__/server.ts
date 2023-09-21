import { setupServer } from 'msw/node';

import { tmdbHandlers } from '@/__mocks__/handlers';

export const server = setupServer(...tmdbHandlers);
