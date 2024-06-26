'use client';

import { Locale } from '@/app/lib/definitions';
import { getLangFromPathname } from '@/app/lib/utils';
import { Etsy } from '@/app/ui/etsy';
import { Instagram } from '@/app/ui/instagram';
import { LanguageSelector } from '@/app/ui/languageSelector';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

const links = [
  { name: 'Servicios', href: '/services' },
  { name: 'Acerca de mí', href: '/about-me' },
  { name: 'Contacto', href: '/contact' },
];

const animationFade =
  'animate-fade animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Header({ t }: { t: Locale }) {
  const pathname = usePathname();
  const lang = getLangFromPathname(pathname);

  return (
    <header
      className={clsx(
        'sticky left-0 top-0 z-10 w-full bg-white p-4',
        animationFade,
      )}
    >
      <nav className="mx-auto flex flex-wrap items-center justify-between">
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
        <div className="hidden items-center justify-start lg:flex lg:w-1/3">
          <ul className="flex justify-between space-x-4">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="border-b border-transparent hover:border-scarlet-700 hover:text-scarlet-700"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          href={`/${lang}`}
          className="flex items-center lg:w-1/3 lg:justify-center"
        >
          <span className="self-center whitespace-nowrap border-b border-transparent text-xl font-semibold hover:border-scarlet-700 hover:text-scarlet-700">
            Scarlet Empress
          </span>
        </Link>
        <div className="flex items-center justify-end space-x-2 lg:w-1/3">
          <LanguageSelector t={t} />
          <Etsy />
          <Instagram />
        </div>
      </nav>
    </header>
  );
}

export function MobileMenu() {
  const lang = getLangFromPathname(usePathname());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Icono del menú hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:text-scarlet-700"
      >
        <RxHamburgerMenu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Menú */}
      <div
        className={clsx(
          `fixed bottom-0 left-0 top-0 z-20 w-52 transform bg-white shadow-xl transition-transform ease-in-out animate-duration-[750ms]`,
          { 'translate-x-0': isOpen, '-translate-x-full': !isOpen },
        )}
      >
        <button
          className="mb-4 p-4 hover:text-scarlet-700"
          onClick={() => setIsOpen(false)}
        >
          <RxCross1 className="h-6 w-6" />
        </button>
        <nav className="flex flex-col space-y-6 p-4">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={`/${lang}${link.href}`}
                onClick={() => setIsOpen(false)}
                className="w-auto border-b border-transparent hover:border-scarlet-700 hover:text-scarlet-700"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
