export interface NavItemLink {
  href: string;
  name: string;
}

export interface NavItem {
  label: string;
  path: string;
  links: NavItemLink[];
}
