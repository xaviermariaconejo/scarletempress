import { Locale } from '@/app/lib/definitions';
import { ExpandableText } from '@/app/ui/expandableText';
import Image from 'next/image';

export function Services({ t }: { t: Locale }) {
  return (
    <>
      <section className="relative w-full">
        <div className="absolute h-[460px] w-full md:h-auto">
          <Image
            alt="Stains desktop"
            quality={100}
            width={3496}
            height={1304}
            src="/stains-desktop.png"
            className="hidden opacity-90 md:block"
          />
          <Image
            alt="Stains mobile"
            className="block opacity-75 md:hidden"
            fill
            quality={100}
            src="/stains-mobile.png"
            style={{
              objectFit: 'cover',
              maskImage:
                'linear-gradient(to bottom, white 80%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, white 80%, transparent 100%)',
            }}
          />
        </div>
        <div className="relative z-10 mx-auto p-8 pt-20 text-center md:w-[500px] md:p-12 md:pt-20">
          <h1 className="text-3xl font-semibold">
            {t.SERVICES.SERVICES.TITLE}
          </h1>
          <p className="mt-4 text-xl font-semibold">
            {t.SERVICES.SERVICES.SUBTITLE}
          </p>
        </div>
      </section>
      <section className="container relative mx-auto flex w-full flex-col items-center justify-start p-8 md:p-12 md:pt-0">
        <div className="relative flex flex-col items-center justify-center">
          <div className="mb-8 flex w-full flex-col items-center justify-around space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0 lg:space-x-0">
            <ExpandableText
              className="left-0 top-0 w-full max-w-[320px] text-center font-medium sm:max-w-sm lg:absolute lg:-left-6 lg:max-w-[280px] xl:left-0 xl:max-w-sm"
              title={t.SERVICES.SERVICES['1'].TITLE}
              content={t.SERVICES.SERVICES['1'].DESCRIPTION}
            />
            <ExpandableText
              className="right-0 top-0 w-full max-w-[320px] text-center font-medium sm:max-w-sm lg:absolute lg:max-w-[280px] xl:max-w-sm"
              title={t.SERVICES.SERVICES['2'].TITLE}
              content={t.SERVICES.SERVICES['2'].DESCRIPTION}
            />
          </div>
          <Image
            alt="Marta medieval"
            quality={100}
            width={1200}
            height={1600}
            className="w-full sm:w-2/3 lg:w-1/3"
            src="/marta-medieval-blur.png"
          />
          <div className="mt-8 flex w-full flex-col items-center justify-around space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0 lg:space-x-0">
            <ExpandableText
              className="left-0 top-2/3 w-full max-w-[320px] text-center font-medium sm:max-w-sm lg:absolute lg:-left-6 lg:max-w-[280px] xl:left-0 xl:max-w-sm"
              title={t.SERVICES.SERVICES['3'].TITLE}
              content={t.SERVICES.SERVICES['3'].DESCRIPTION}
            />
            <ExpandableText
              className="right-0 top-2/3 w-full max-w-[320px] text-center font-medium sm:max-w-sm lg:absolute lg:max-w-[280px] xl:max-w-sm"
              title={t.SERVICES.SERVICES['4'].TITLE}
              content={t.SERVICES.SERVICES['4'].DESCRIPTION}
            />
          </div>
        </div>
        <div className="mt-4 flex min-h-0 flex-col items-start space-y-4 sm:mt-8 sm:min-h-[216px] sm:flex-row sm:space-x-4 sm:space-y-0 lg:mt-52 lg:space-x-12 xl:mt-20">
          <ExpandableText
            className="w-[320px] text-center font-medium sm:w-96"
            title={t.SERVICES.SERVICES['5'].TITLE}
            content={t.SERVICES.SERVICES['5'].DESCRIPTION}
          />
          <ExpandableText
            className="w-[320px] text-center font-medium sm:w-96"
            title={t.SERVICES.SERVICES['6'].TITLE}
            content={t.SERVICES.SERVICES['6'].DESCRIPTION}
          />
        </div>
      </section>
    </>
  );
}
