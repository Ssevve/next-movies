interface NavOptionChild {
  href: string;
  label: string;
}

export default interface NavOption {
  label: string;
  path: string;
  children: NavOptionChild[];
}
