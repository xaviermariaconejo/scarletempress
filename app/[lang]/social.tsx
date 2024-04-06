import { Locale } from '@/app/lib/definitions';
import { Etsy } from '@/app/ui/etsy';
import { greatVibes } from '@/app/ui/fonts';
import { Instagram } from '@/app/ui/instagram';
import Image from 'next/image';

export function Social({ t }: { t: Locale }) {
  return (
    <section className="container mx-auto mt-24 flex w-full flex-col items-center">
      <h2
        className={
          'mb-4 max-w-[520px] text-center text-4xl font-bold leading-snug'
        }
      >
        ¡No te pierdas mis novedades exclusivas!
      </h2>
      <h2
        className={`${greatVibes.className} mb-8 max-w-[520px] text-center text-7xl font-bold leading-snug`}
      >
        Sigueme en redes
      </h2>
      <div className="flex items-center justify-center space-x-8 sm:space-x-20 lg:space-x-24">
        <Instagram isBig />
        <Etsy isBig />
      </div>
    </section>
  );
}
