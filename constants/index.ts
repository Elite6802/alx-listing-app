import type { Listing } from '../interfaces';

export const APP_NAME = 'ALX Listing App';

export const LISTINGS: Listing[] = [
  {
    id: 'prop-1',
    title: 'Modern Studio in Kilimani',
    location: 'Nairobi, Kenya',
    pricePerNight: 6500,
    imageUrl: '/assets/modern.svg',
  },
  {
    id: 'prop-2',
    title: 'Coastal Getaway',
    location: 'Diani Beach, Kenya',
    pricePerNight: 12000,
    imageUrl: '/assets/coastal.svg',
  },
  {
    id: 'prop-3',
    title: 'Mountain Retreat',
    location: 'Mt. Kenya, Kenya',
    pricePerNight: 9000,
    imageUrl: '/assets/mountain.svg',
  },
];
