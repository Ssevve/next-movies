import { useWindowSize } from 'usehooks-ts';

const MOBILE_BREAKPOINT = 768;

export default function useIsMobile() {
  const { width } = useWindowSize();

  return width < MOBILE_BREAKPOINT;
}
