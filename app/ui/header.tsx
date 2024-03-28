import { Instagram } from '@/app/ui/instagram';
import clsx from 'clsx';
import Link from 'next/link';

const links = [
  { name: 'Servicios', href: '/services' },
  { name: 'Acerca de mí', href: '/about-me' },
  { name: 'Contacto', href: '/contact' },
];

const animationFade =
  'animate-fade animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Header() {
  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-10 w-full bg-white p-4',
        animationFade,
      )}
    >
      <nav className="mx-auto flex flex-wrap items-center justify-between">
        <div className="hidden items-center justify-start lg:flex lg:w-1/3">
          <ul className="flex justify-between space-x-4">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:border-scarlet-700 hover:text-scarlet-700 border-b border-transparent"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/" className="flex items-center lg:w-1/3 lg:justify-center">
          <span className="hover:border-scarlet-700 hover:text-scarlet-700 self-center whitespace-nowrap border-b border-transparent text-xl font-semibold">
            Scarlet Empress
          </span>
        </Link>
        <div className="flex items-center justify-end lg:w-1/3">
          <Instagram />
        </div>
      </nav>
    </header>
  );
}
