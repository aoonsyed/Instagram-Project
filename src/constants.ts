import { Product } from './types';
import luxeBraceletPink from './assets/bracelets-pink.png';
import luxeBraceletRed from './assets/bracelets-red.png';
import luxeLashes from './assets/lashes-garden.png';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Luxe Rose Gold Bangles',
    category: 'Jewelry',
    price: 85,
    description: 'Stackable rose gold bangles on blush satin, scattered with pearls and petals for a true luxe moment.',
    image: luxeBraceletPink,
    details: ['High-shine finish', 'Stackable set', 'Perfect for gifting']
  },
  {
    id: '2',
    name: 'Luxe Ruby Bangles',
    category: 'Lashes',
    price: 32,
    description: 'Deep ruby stones and oxidized metal for a bold, romantic wrist stack.',
    image: luxeBraceletRed,
    details: ['Statement sparkle', 'Comfortable fit', 'Evening-ready']
  },
  {
    id: '3',
    name: 'Blooming Lash Garden',
    category: 'Lashes',
    price: 28,
    description: 'Soft, fluttery lashes styled with florals and crystal bands for a dreamy flatlay.',
    image: luxeLashes,
    details: ['Soft band', 'Multiple styles', 'Perfect for content shoots']
  },
  {
    id: '4',
    name: 'Ethereal Cuff Bracelet',
    category: 'Jewelry',
    price: 120,
    description: 'A bold yet refined cuff bracelet with intricate geometric patterns.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
    details: ['Sterling Silver Base', 'Tarnish Resistant', 'One Size']
  },
  {
    id: '5',
    name: 'Opaline Drop Earrings',
    category: 'Jewelry',
    price: 65,
    description: 'Stunning drop earrings with iridescent opaline stones.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    details: ['Lightweight', 'Secure Backing', 'Gift Box Included']
  },
  {
    id: '6',
    name: 'Rose Quartz Nails',
    category: 'Nails',
    price: 38,
    description: 'Translucent pink nails with marble-like rose quartz detailing.',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop',
    details: ['High Gloss Finish', 'Salon Quality', 'Durable']
  }
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/be.u.tifulxoxo',
  whatsapp: 'https://wa.me/1234567890'
};

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah J.',
    text: 'The quality of the artificial nails is unmatched. They look so natural and last for weeks!',
    rating: 5
  },
  {
    id: '2',
    name: 'Emily R.',
    text: 'Absolutely in love with my new pendant. It adds the perfect touch of elegance to any outfit.',
    rating: 5
  },
  {
    id: '3',
    name: 'Jessica M.',
    text: 'Best lashes I have ever used. Lightweight and reusable. Highly recommend Beautiful XoXo!',
    rating: 5
  }
];
