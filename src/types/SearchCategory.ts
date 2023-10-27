import SearchEndpoint from '@/types/SearchEndpoint';

export default interface SearchCategory {
  endpoint: SearchEndpoint;
  label: string;
  total: number;
}
