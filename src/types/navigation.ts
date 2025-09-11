/**
 * Navigation types for the counseling website
 */

export interface NavItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface NavbarProps {
  className?: string;
}
