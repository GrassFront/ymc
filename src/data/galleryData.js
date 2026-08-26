import herochef from '../assets/herochef.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';

// Grid Images (13 assets)
import galleryall1 from '../assets/galleryall1.png';
import galleryall2 from '../assets/galleryall2.png';
import galleryall3 from '../assets/galleryall3.png';
import galleryall4 from '../assets/galleryall4.png';
import galleryall5 from '../assets/galleryall5.png';
import galleryall6 from '../assets/gallryall6.png'; // asset filename spelling
import galleryall7 from '../assets/galleryall7.png';
import galleryall8 from '../assets/galleryall8.png';
import galleryall9 from '../assets/galleryall9.png';
import galleryall10 from '../assets/galleryall10.png';
import galleryall11 from '../assets/galleryall11.png';
import galleryall12 from '../assets/galleryall12.png';
import galleryall13 from '../assets/galleryall13.png';

export const GALLERY_HERO_DATA = {
  eyebrow: 'GALLERY',
  headlineLine1: 'A Visual Taste',
  headlineLine2Prefix: 'of the ',
  headlineLine2Accent: 'Work',
  description:
    'Signature dishes, live events, brand shoots, and behind-the-scenes moments from over a decade in kitchens around the world.',
  photoCards: [
    {
      id: 'signature-dish-main',
      title: 'Photo Card / Signature Dish',
      image: herochef,
      alt: 'Chef Michael plating signature dish',
      width: 430,
      height: 398,
      left: 171.11,
      top: 34,
      rotation: 2,
      zIndex: 2,
      imgWidth: 418,
      imgHeight: 386,
    },
    {
      id: 'live-fire-curry',
      title: 'Photo Card / Live Fire',
      image: gallery3,
      alt: 'Gourmet curry dish with garnishes',
      width: 258,
      height: 216,
      left: 95,
      top: 278.5,
      rotation: -3,
      zIndex: 3,
      imgWidth: 246,
      imgHeight: 204,
    },
    {
      id: 'chef-plating-bw',
      title: 'Photo Card / Chef Plating BW',
      image: gallery2,
      alt: 'Plated signature dish with place setting',
      width: 278,
      height: 330,
      left: 505,
      top: 60.77,
      rotation: -5,
      zIndex: 4,
      imgWidth: 266,
      imgHeight: 318,
      tape: {
        width: 74,
        height: 26,
        left: 592.19,
        top: 69,
        rotation: 4,
        zIndex: 5,
      },
    },
  ],
};

export const GALLERY_FILTERS = [
  { id: 'all', label: 'All', width: 120 },
  { id: 'signature-dishes', label: 'Signature Dishes', width: 180 },
  { id: 'events', label: 'Events & Live Cooking', width: 180 },
  { id: 'brand-shoots', label: 'Brand Shoots', width: 180 },
  { id: 'awards', label: 'Awards & Recognition', width: 180 },
  { id: 'behind-scenes', label: 'Behind the Scenes', width: 180 },
];

export const GALLERY_GRID_ITEMS = [
  // Row 1
  {
    id: 'butter-chicken-roulade',
    title: 'Butter Chicken Roulade',
    category: 'signature-dishes',
    categoryLabel: 'Signature Dish',
    image: galleryall1,
    row: 1,
    flexGrow: 478,
    height: 244,
  },
  {
    id: 'purple-baby-carrot-pulao',
    title: 'Purple Baby Carrot Pulao',
    category: 'signature-dishes',
    categoryLabel: 'Plated Dish',
    image: galleryall2,
    row: 1,
    flexGrow: 410,
    height: 244,
  },
  {
    id: 'noor-e-malai-kebab',
    title: 'Noor-e-Malai Kebab',
    category: 'signature-dishes',
    categoryLabel: 'Plated Dish',
    image: galleryall3,
    row: 1,
    flexGrow: 464,
    height: 244,
  },

  // Row 2
  {
    id: 'crunchy-tortilla-chicken-salad',
    title: 'Crunchy Tortilla Chicken Salad',
    category: 'signature-dishes',
    categoryLabel: 'Plated Bowl',
    image: galleryall4,
    row: 2,
    flexGrow: 420,
    height: 270,
  },
  {
    id: 'live-culinary-experience',
    title: 'Live Culinary Experience',
    category: 'events',
    categoryLabel: 'Event',
    image: galleryall5,
    row: 2,
    flexGrow: 315,
    height: 270,
  },
  {
    id: 'in-the-kitchen',
    title: 'In The Kitchen',
    category: 'behind-scenes',
    categoryLabel: 'Behind The Scenes',
    image: galleryall6,
    row: 2,
    flexGrow: 275,
    height: 270,
  },
  {
    id: 'brand-collaboration',
    title: 'Brand Collaboration',
    category: 'brand-shoots',
    categoryLabel: 'Brand Shoot',
    image: galleryall7,
    row: 2,
    flexGrow: 320,
    height: 270,
  },

  // Row 3
  {
    id: 'training-future-chefs',
    title: 'Training Future Chefs',
    category: 'events',
    categoryLabel: 'Masterclass',
    image: galleryall8,
    row: 3,
    flexGrow: 395,
    height: 214,
  },
  {
    id: 'chef-michael-live',
    title: 'Chef Michael Live',
    category: 'events',
    categoryLabel: 'Event',
    image: galleryall9,
    row: 3,
    flexGrow: 515,
    height: 214,
  },
  {
    id: 'seafood-platter',
    title: 'Seafood Platter',
    category: 'signature-dishes',
    categoryLabel: 'Signature Dish',
    image: galleryall10,
    row: 3,
    flexGrow: 430,
    height: 214,
  },

  // Row 4
  {
    id: 'behind-the-scenes',
    title: 'Behind The Scenes',
    category: 'brand-shoots',
    categoryLabel: 'Brand Shoot',
    image: galleryall11,
    row: 4,
    flexGrow: 395,
    height: 220,
  },
  {
    id: 'precision-and-passion',
    title: 'Precision & Passion',
    category: 'behind-scenes',
    categoryLabel: 'Behind The Scenes',
    image: galleryall12,
    row: 4,
    flexGrow: 450,
    height: 220,
  },
  {
    id: 'private-dining-setup',
    title: 'Private Dining Setup',
    category: 'events',
    categoryLabel: 'Event',
    image: galleryall13,
    row: 4,
    flexGrow: 490,
    height: 220,
  },
];
