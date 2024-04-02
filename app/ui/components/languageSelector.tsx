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
        className="flex items-center justify-between bg-transparent hover:text-scarlet-700 w-auto md:mr-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`mr-1 fi fi-${FLAGS[lang]}`}></span>
        <span className="hidden md:block">{t.LANGUAGES[lang]}</span>
        <IoIosArrowDown className="hidden md:block" />
      </button>
      {isOpen && (
        <ul
          ref={ref}
          className="overflow-hidden absolute border border-gray-light top-6 sm:top-8 right-0 text-sm z-10 bg-white divide-y divide-gray-light rounded-lg shadow-lg w-40"
        >
          {LOCALES.map((locale: Lang) => (
            <li
              key={locale}
              className="block text-gray-dark px-4 py-2 first:pt-3 cursor-pointer last:pb-3 hover:text-scarlet-400 hover:bg-scarlet-100"
              onClick={() => handleClick(locale)}
            >
              <span className={`mr-2 fi fi-${FLAGS[locale]}`}></span>
              {t.LANGUAGES[locale]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
