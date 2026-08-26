import award1 from '../assets/award1.png';
import celebChefImg from '../assets/bestcelebchef.png';
import foodConsultantImg from '../assets/bestfoodconsultnt.png';
import kingChefImg from '../assets/kingchef.png';

export const AWARDS_HERO_DATA = {
  eyebrow: 'AWARDS & RECOGNITION',
  headlineLine1: 'Recognised for Passion.',
  headlinePrefix: 'Respected for ',
  headlineAccent: 'Excellence.',
  description:
    "Honoured by India's leading culinary icons and industry bodies, these achievements reflect a journey of dedication, hard work, and a constant commitment to culinary innovation.",
  heroImage: award1,
  heroImageAlt: 'Chef Michael holding King Chef Awards and honors',
};

export const FEATURED_AWARDS = [
  {
    id: 'bharat-gaurav',
    name: 'Bharat Gaurav Ratan Shri Samman',
    description: 'Honoured for outstanding contribution to culinary arts.',
    year: '2025',
    image: celebChefImg,
  },
  {
    id: 'best-celebrity-chef',
    name: 'The Best Celebrity Chef 2025',
    description: 'Awarded by Padma Shri Chef Sanjeev Kapoor.',
    year: '2025',
    image: celebChefImg,
  },
  {
    id: 'best-food-consultant',
    name: 'The Best Food Consultant 2025',
    description: 'Conferred by Padma Shri Chef Sanjeev Kapoor.',
    year: '2025',
    image: foodConsultantImg,
  },
  {
    id: 'king-chef-award',
    name: 'King Chef Award',
    description: 'Recognised for culinary excellence.',
    year: '2025',
    image: kingChefImg,
  },
];

export const MORE_AWARDS = [
  {
    id: 'star-india',
    name: 'Star India Master Chef Award',
    description: 'Awarded by Star India for culinary excellence and outstanding performance.',
    iconType: 'star',
  },
  {
    id: 'grand-master',
    name: 'Grand Master Chef India Award',
    description: "Honoured as one of India's finest chefs for exceptional culinary skills.",
    iconType: 'crown',
  },
  {
    id: 'culinary-arts-cert',
    name: 'Certificate in Culinary Arts',
    description: 'Internationally certified from the Moroccan Institute of Culinary Art.',
    iconType: 'certificate',
  },
  {
    id: 'wooden-home-ambassador',
    name: 'Brand Ambassador – Wooden Home',
    description: 'Official Brand Ambassador for Wooden Home.',
    iconType: 'building',
  },
  {
    id: 'nepal-guestroom-assoc',
    name: 'Guestroom Association of Nepal Award',
    description: 'Recognised by the Guestroom Association of Nepal for excellence.',
    iconType: 'award',
  },
];

export const AWARDS_QUOTE = {
  text: 'Every award is not just a recognition, it is a responsibility to do even better every day.',
  signature: '— Chef Michael',
};
