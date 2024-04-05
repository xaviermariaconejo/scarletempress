import { Lang } from '@/app/lib/definitions';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const getLangFromPathname = (pathname: string): Lang => {
  const locale = pathname.split('/')[1];
  return locale as Lang;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
