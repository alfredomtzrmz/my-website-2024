export interface SidebarItem {
  text: string;
  to: string;
  target?: (string & {}) | '_blank' | '_parent' | '_self' | '_top';
  icon: string;
  kbd?: string;
}
