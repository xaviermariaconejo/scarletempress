import { Lang } from '@/app/lib/definitions';
import { getTranslations } from '@/app/lib/locales';
import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Me',
};

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export default async function AboutMePage({
  params,
}: {
  params: { lang: Lang };
}) {
  const t = await getTranslations(params.lang);

  return (
    <main
      className={clsx(
        'container mx-auto flex flex-col items-center justify-between px-12 py-0 xl:p-16',
        animationFadeUp,
      )}
    >
      <section className="flex flex-col items-center justify-between xl:flex-row">
        <div className="self-start py-8 xl:w-1/2 xl:p-8 xl:pt-20">
          <h2 className="mb-8 text-center text-4xl font-semibold">
            {t.ABOUT_ME.TITLE}
          </h2>
          <p className="text-center">{t.ABOUT_ME.TEXT_1}</p>
          <p className="mt-4 hidden text-center xl:block">
            {t.ABOUT_ME.TEXT_2}
          </p>
          <p className="mt-4 hidden text-center xl:block">
            {t.ABOUT_ME.TEXT_3}
          </p>
          <p className="mt-4 hidden text-center xl:block">
            {t.ABOUT_ME.TEXT_4}
          </p>
        </div>
        <Image
          alt="Marta Elf"
          src="/marta-elf-blur.png"
          width={576}
          quality={100}
          height={720}
        />
        <p className="my-8 block text-center xl:hidden">{t.ABOUT_ME.TEXT_2}</p>
      </section>
      <section className="relative flex w-full flex-col items-center justify-between pb-12 xl:flex-row xl:py-12">
        <div className="flex-1">
          <Image
            alt="Marta and Susana Elfs"
            height={1066}
            quality={100}
            src="/marta-susana-elfs-blur.png"
            width={1600}
          />
        </div>
        <p className="mb-4 mt-8 block text-center xl:hidden">
          {t.ABOUT_ME.TEXT_3}
        </p>
        <p className="mb-8 block text-center xl:hidden">{t.ABOUT_ME.TEXT_4}</p>
        <div className="flex-1 xl:ml-8 xl:max-w-[33.33%]">
          <Image
            alt="Manikin"
            height={720}
            quality={100}
            src="/manikin-blur.png"
            width={480}
          />
        </div>
      </section>
    </main>
  );
}
