import { Great_Vibes, Poppins } from 'next/font/google';

export const poppins = Poppins({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const greatVibes = Great_Vibes({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
});
