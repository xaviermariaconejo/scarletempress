import { Email } from '@/app/ui/components/email';
import { Instagram } from '@/app/ui/components/instagram';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

const linkStyles = 'hover:text-scarlet-700 text-xs hover:underline';

export function Footer() {
  return (
    <footer className={clsx('mt-auto bg-scarlet-100', animationFadeUp)}>
      <div className="container mx-auto flex flex-col items-center px-5 py-8">
        <div className="flex w-full items-center space-x-2">
          <div className="my-4 h-1 w-full border-t border-scarlet-700"></div>
          <Instagram />
          <div className="my-4 h-1 w-full border-t border-scarlet-700"></div>
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
          <p className="text-sm">
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
        </div>
      </div>
    </footer>
  );
}
