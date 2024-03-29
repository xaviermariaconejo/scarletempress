'use client';

import { useState } from 'react';
import { Instagram } from '@/app/ui/components/instagram';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import clsx from 'clsx';
import Link from 'next/link';

const links = [
  { name: 'Servicios', href: '/services' },
  { name: 'Acerca de mí', href: '/about-me' },
  { name: 'Contacto', href: '/contact' },
];

const animationFade =
  'animate-fade animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Header({
  className = '',
  isHome = false,
}: {
  className?: string;
  isHome?: boolean;
}) {
  return (
    <header
      className={clsx(
        'left-0 top-0 z-10 w-full p-4',
        {
          'fixed bg-transparent': isHome,
          'sticky bg-white': !isHome,
        },
        animationFade,
        className,
      )}
    >
      <nav className="mx-auto flex flex-wrap items-center justify-between">
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
        {!isHome && (
          <div className="hidden items-center justify-start lg:flex lg:w-1/3">
            <ul className="flex justify-between space-x-4">
              {links.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="border-b border-transparent hover:border-scarlet-700 hover:text-scarlet-700"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {!isHome && (
          <Link
            href="/"
            className="flex items-center lg:w-1/3 lg:justify-center"
          >
            <span className="self-center whitespace-nowrap border-b border-transparent text-xl font-semibold hover:border-scarlet-700 hover:text-scarlet-700">
              Scarlet Empress
            </span>
          </Link>
        )}
        <div className="flex items-center justify-end lg:w-1/3">
          <Instagram />
        </div>
      </nav>
    </header>
  );
}

export function MobileMenu() {
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
                href={link.href}
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
