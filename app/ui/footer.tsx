import { Email } from '@/app/ui/email';
import { Instagram } from '@/app/ui/instagram';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

const linkStyles = 'hover:text-scarlet-700 text-sm hover:underline';

export function Footer() {
  return (
    <footer className={clsx('bg-scarlet-100 mt-auto', animationFadeUp)}>
      <div className="container mx-auto flex flex-col items-center px-5 py-8">
        <div className="flex w-full items-center space-x-2">
          <div className="border-scarlet-700 my-4 h-1 w-full border-t"></div>
          <Instagram />
          <div className="border-scarlet-700 my-4 h-1 w-full border-t"></div>
        </div>
        <Email className="mb-4" />
        <div className="flex items-center space-x-2">
          <Image
            alt="Scarlet Empress Logo"
            src="/scarlet-empress-logo-colored.png"
            height={50}
            width={50}
            className="rounded-full"
          />
          <p className="text-xs">
            Copyright © {new Date().getFullYear()} ScarletEmpress
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <Link className={linkStyles} href="/legal-notice">
            Aviso Legal
          </Link>
          <span>|</span>
          <Link className={linkStyles} href="/privacy-policy">
            Política de privacidad
          </Link>
          <span>|</span>
          <Link className={linkStyles} href="/cookies-policy">
            Política de cookies
          </Link>
          <span>|</span>
          <button className={linkStyles}>Gestionar cookies</button>
        </div>
      </div>
    </footer>
  );
}
