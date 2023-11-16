import { RestRequest } from 'msw';

export default function getRequestedPage(req: RestRequest) {
  const url = new URL(req.url);
  return Number(url.searchParams.get('page')) || 1;
}
