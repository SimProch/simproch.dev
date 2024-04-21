export type Footer = {
  title: string;
  subtitle: string;
  socials: { name: AvailableIcons; linkTo: string }[];
};

export type AvailableIcons =
  | 'github-white'
  | 'icon-close'
  | 'icon-menu'
  | 'icon-external-window'
  | 'linkedin-white.ico'
  | 'stack-overflow.ico'
  | 'twitter.ico';
