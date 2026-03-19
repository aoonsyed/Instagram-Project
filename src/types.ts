export interface Product {
  id: string;
  name: string;
  category: 'Jewelry' | 'Nails' | 'Lashes' | 'Accessories';
  price: number;
  description: string;
  image: string;
  video_url?: string;
  details: string[];
}

export type Category = 'All' | 'Jewelry' | 'Nails' | 'Lashes' | 'Accessories';
