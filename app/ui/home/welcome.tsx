import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-[750ms] animate-ease-out animate-fill-forwards';

export function Welcome() {
  return (
    <section
      className={`justify-stat relative flex h-screen w-full flex-col items-center overflow-hidden p-10 pb-[120px] md:h-[60vh] md:pt-16`}
    >
      <Image
        alt="Background Image"
        fill
        quality={100}
        src="/background.jpg"
        style={{
          opacity: '0.9',
          objectFit: 'cover',
          maskImage: 'linear-gradient(to bottom, white 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, white 85%, transparent 100%)',
        }}
      />
      <div
        className={clsx('flex items-center justify-center', animationFadeUp)}
      >
        <Image
          alt="Scarlet Empress Logo"
          height={196 * 1.25}
          src="/scarlet-empress-logo.png"
          width={265 * 1.25}
        />
      </div>
      <p
        className={clsx(
          'md:text-2x mt-6 w-full text-center text-3xl font-bold text-white md:w-1/3',
          animationFadeUp,
        )}
      >
        Arte en cada puntada, estilo en cada creación
      </p>
      <Link
        href="/services"
        className={clsx(
          'text-scarlet-500 border-scarlet-500 hover:border-scarlet-700 hover:text-scarlet-700 mt-auto rounded-full border bg-white px-4 py-3 font-semibold shadow-2xl',
          animationFadeUp,
        )}
      >
        Más información
      </Link>
    </section>
  );
}
