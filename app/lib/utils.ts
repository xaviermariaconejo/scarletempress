import { Lang } from '@/app/lib/definitions';

export const getLangFromPathname = (pathname: string): Lang => {
  const locale = pathname.split('/')[1];
  return locale as Lang;
};
