import { Locale } from '@/app/lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Welcome({ t }: { t: Locale }) {
  return (
    <section
      className={`relative flex h-[40dvh] w-full flex-col items-center justify-start overflow-hidden p-12 md:pt-40 lg:pb-14`}
    >
      <Image
        alt="Services title background image"
        fill
        priority
        quality={100}
        src="/services-background-left.jpg"
        style={{
          objectFit: 'cover',
        }}
      />
      <h1
        className={clsx(
          'z-10 w-full text-center text-3xl font-bold text-white md:w-1/3 md:text-4xl',
          animationFadeUp,
        )}
      >
        {t.SERVICES.WELCOME.TITLE}
      </h1>
      <h2
        className={clsx(
          'z-10 mt-auto w-full max-w-[400px] text-center text-2xl font-bold text-white md:w-1/2 md:text-3xl',
          animationFadeUp,
        )}
      >
        {t.SERVICES.WELCOME.SUBTITLE}
      </h2>
    </section>
  );
}
