export interface NavbarItem {
  name?: string;
  goto?: string;
  children?: Array<NavbarItem>;
}
