import { Locale } from '@/app/lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Examples({ t }: { t: Locale }) {
  return (
    <section
      className={clsx(
        `justify-start flex w-full flex-col items-center p-12 container mx-auto md:pt-4`,
        animationFadeUp,
      )}
    >
      <p className="mb-8 md:mb-12 text-xl font-semibold mr-auto">
        Aqui algunos de mis proyectos
      </p>
      <div className="flex">
        <Image
          alt="Marta and Susana elfs"
          width={1600}
          height={1066}
          quality={100}
          src="/marta-susana-elfs.png"
        />
      </div>
    </section>
  );
}
