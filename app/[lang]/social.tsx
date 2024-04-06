import { Locale } from '@/app/lib/definitions';
import Image from 'next/image';

export function Social({ t }: { t: Locale }) {
  return (
    <section className="container mx-auto flex w-full flex-col items-start justify-between px-4 lg:flex-row-reverse lg:space-x-8 lg:pt-16 xl:pt-32">
      <div className="mb-12 h-full flex-1 text-center lg:mb-0 lg:ml-32 lg:max-w-[620px] lg:text-right">
        <h2 className={'mb-8 text-3xl font-semibold'}>
          {t.HOME.ABOUT_ME.TITLE}
        </h2>
        <p className="text-md mb-8 font-medium lg:text-xl">
          {t.HOME.ABOUT_ME.TEXT_1}
        </p>
        <p className="text-md font-medium lg:text-xl">
          {t.HOME.ABOUT_ME.TEXT_2}
        </p>
      </div>
      <div className="mx-auto h-full w-4/5 w-full lg:w-[420px] xl:ml-16 xl:w-[620px]">
        <Image
          alt="Marta medieval"
          quality={100}
          width={1200}
          height={1600}
          src="/marta-medieval-blur.png"
        />
      </div>
    </section>
  );
}
