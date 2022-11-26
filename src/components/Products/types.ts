export interface TProduct {
  id: string;
  imageSrc: string;
  text: string;
  title: string;
}

export interface TProps {
  title: string;
  items: TProduct[];
}