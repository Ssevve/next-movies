interface NavOptionChild {
  href: string;
  text: string;
}

export default interface NavOption {
  label: string;
  path: string;
  children: NavOptionChild[];
}
