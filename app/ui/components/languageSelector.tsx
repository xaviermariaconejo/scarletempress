'use client';

import { LOCALES } from '@/app/lib/constants';
import { Lang, Locale } from '@/app/lib/definitions';
import { getLangFromPathname } from '@/app/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useClickAway } from 'react-use';

const FLAGS = {
  en: 'gb',
  de: 'de',
  es: 'es',
  fr: 'fr',
  it: 'it',
};

export function LanguageSelector({ t }: { t: Locale }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const lang = getLangFromPathname(pathname);

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickAway(ref, () => {
    isOpen && setIsOpen(false);
  });

  const handleClick = useCallback(
    (newLang: Lang) => {
      const pathnameWithoutLang = pathname.split('/').slice(2).join('/');
      replace(`/${newLang}/${pathnameWithoutLang}`);
    },
    [pathname, replace],
  );

  return (
    <div className="relative">
      <button
        className="flex w-auto items-center justify-between bg-transparent hover:text-scarlet-700 md:mr-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`fi sm:mr-1 fi-${FLAGS[lang]}`}></span>
        <span className="hidden md:block">{t.LANGUAGES[lang]}</span>
        <IoIosArrowDown className="hidden md:block" />
      </button>
      {isOpen && (
        <ul
          ref={ref}
          className="absolute right-0 top-6 z-10 w-40 divide-y divide-gray-light overflow-hidden rounded-lg border border-gray-light bg-white text-sm shadow-lg sm:top-8"
        >
          {LOCALES.map((locale: Lang) => (
            <li
              key={locale}
              className="block cursor-pointer px-4 py-2 text-gray-dark first:pt-3 last:pb-3 hover:bg-scarlet-100 hover:text-scarlet-400"
              onClick={() => handleClick(locale)}
            >
              <span className={`fi mr-2 fi-${FLAGS[locale]}`}></span>
              {t.LANGUAGES[locale]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
