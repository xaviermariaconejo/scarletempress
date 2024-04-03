import { Locale } from '@/app/lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Welcome({ t }: { t: Locale }) {
  return (
    <section
      className={`justify-start relative flex h-[40dvh] w-full flex-col items-center overflow-hidden p-12 lg:pb-14 md:pt-40`}
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
          'w-full md:w-1/3 text-center text-white text-3xl md:text-4xl font-bold',
          animationFadeUp,
        )}
      >
        Explora mis servicios
      </h1>
      <h2
        className={clsx(
          'w-full md:w-1/2 max-w-[400px] text-center text-white md:text-3xl text-2xl font-bold mt-auto',
          animationFadeUp,
        )}
      >
        Diseños personalizados que capturan tu esencia
      </h2>
    </section>
  );
}
