import type React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  className?: string;
}

export interface CardProps {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  imageUrl: string;
  ctaLabel?: string;
  onCtaClick?: (id: string) => void;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  imageUrl: string;
}
  export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}
