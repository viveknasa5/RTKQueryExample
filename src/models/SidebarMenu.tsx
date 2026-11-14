export interface NavItemProps {
  url: string;
  icon: any;
  name: string;
  inside?: InsideItemProps[];
}

export interface InsideItemProps {
  url: string;
  icon: any;
  name: string;
}
