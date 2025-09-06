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
