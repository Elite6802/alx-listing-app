import Image from 'next/image';
import Button from './Button';
import type { CardProps } from '../../interfaces';

export default function Card({
  id,
  title,
  location,
  pricePerNight,
  imageUrl,
  ctaLabel = 'Book Now',
  onCtaClick,
}: CardProps) {
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="relative aspect-[4/3]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm">
            <span className="font-semibold">KES {pricePerNight.toLocaleString()}</span>
            <span className="text-gray-500"> / night</span>
          </p>
          <Button label={ctaLabel} onClick={() => onCtaClick?.(id)} />
        </div>
      </div>
    </div>
  );
}
