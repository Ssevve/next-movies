import NavItemLink from '@/types/NavItemLink';

export default interface NavItem {
  label: string;
  path: string;
  links: NavItemLink[];
}
