import { Lang, Locale } from '@/app/lib/definitions';
import 'server-only';

const locales = {
  de: () => import('@/app/locales/de.json').then((module) => module.default),
  en: () => import('@/app/locales/en.json').then((module) => module.default),
  es: () => import('@/app/locales/es.json').then((module) => module.default),
  fr: () => import('@/app/locales/fr.json').then((module) => module.default),
  it: () => import('@/app/locales/it.json').then((module) => module.default),
};

export const getTranslations = async (locale: Lang): Promise<Locale> => {
  if (!locales[locale]) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return locales[locale]();
};
