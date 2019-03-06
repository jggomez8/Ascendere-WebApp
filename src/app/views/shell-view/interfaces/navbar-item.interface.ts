export interface NavbarItem {
  name?: string;
  goto?: string;
  children?: Array<NavbarItem>;
  routerLink?: any;
  fragment?: string;
  queryParams?: Object;
}
