import { setupServer } from 'msw/node';

import { TMDBHandlers } from '@/__mocks__/handlers';

export const server = setupServer(...TMDBHandlers);
