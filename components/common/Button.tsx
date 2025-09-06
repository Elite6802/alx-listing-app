import type { ButtonProps } from '../../interfaces';

export default function Button({
  label,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition';
  const variants = {
    primary: 'bg-black text-white hover:opacity-90 focus:ring-black',
    secondary:
      'bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 focus:ring-gray-300',
    ghost:
      'bg-transparent text-gray-900 ring-1 ring-gray-200 hover:bg-gray-100 focus:ring-gray-200',
  } as const;

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
}
