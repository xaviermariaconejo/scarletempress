'use client';

import { Locale } from '@/app/lib/definitions';
import { getLangFromPathname } from '@/app/lib/utils';
import { Etsy } from '@/app/ui/components/etsy';
import { Instagram } from '@/app/ui/components/instagram';
import { LanguageSelector } from '@/app/ui/components/languageSelector';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { useMedia } from 'react-use';

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

  const isMediumUp = useMedia('(min-width: 768px)');
  const [scrolled, setScrolled] = useState(false);

  // Manejar el cambio de color basado en la posición de desplazamiento
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    const vh = isMediumUp ? window.innerHeight * 0.5 : window.innerHeight * 0.9; // 50vh | 90vh
    if (offset > vh) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [isMediumUp]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={clsx('fixed left-0 top-0 z-10 w-full p-4', animationFade, {
        'bg-white': scrolled,
        'bg-transparent': !scrolled,
      })}
    >
      <nav className="mx-auto flex flex-wrap items-start sm:items-center justify-between">
        <div className="block lg:hidden">
          <MobileMenu scrolled={scrolled} />
        </div>
        <div className="hidden items-center justify-start lg:flex lg:w-1/3">
          <ul className="flex justify-between space-x-4">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className={clsx(
                      'border-b border-transparent  hover:border-scarlet-700 hover:text-scarlet-700',
                      {
                        'text-white': !scrolled,
                      },
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={clsx('flex items-center justify-end space-x-2 lg:w-1/3', {
            'text-white': !scrolled,
          })}
        >
          <LanguageSelector t={t} />
          <Etsy />
          <Instagram />
        </div>
      </nav>
    </header>
  );
}

export function MobileMenu({ scrolled }: { scrolled: boolean }) {
  const pathname = usePathname();
  const lang = getLangFromPathname(pathname);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Icono del menú hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx('p-2 hover:text-scarlet-700', {
          'text-white': !scrolled,
        })}
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
        className={`fixed bottom-0 left-0 top-0 z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-52 bg-white shadow-xl transition-transform duration-[750ms] ease-in-out`}
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
