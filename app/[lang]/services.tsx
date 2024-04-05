import { Locale } from '@/app/lib/definitions';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/ui/accordion';
import clsx from 'clsx';
import Image from 'next/image';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Services({ t }: { t: Locale }) {
  return (
    <section
      className={clsx(
        `container relative mx-auto flex w-full flex-col items-center justify-start px-4 py-16`,
        animationFadeUp,
      )}
    >
      <h2 className={'mb-8 text-center text-3xl font-semibold'}>
        Hago que tus ideas tomen forma
      </h2>
      <p className={'text-l mb-14 max-w-[620px] text-center'}>
        Desde el boceto de tu sueño hasta la realidad de tu armario, transformo
        cualquier idea, clara o difusa, en la prenda perfecta para ti
      </p>
      <div className="flex w-full flex-col items-center justify-center">
        <Accordion type="single" collapsible className="w-full lg:w-[456px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {t.SERVICES.SERVICES['1'].TITLE}
            </AccordionTrigger>
            <AccordionContent>
              {t.SERVICES.SERVICES['1'].DESCRIPTION}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {t.SERVICES.SERVICES['2'].TITLE}
            </AccordionTrigger>
            <AccordionContent>
              {t.SERVICES.SERVICES['2'].DESCRIPTION}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {t.SERVICES.SERVICES['3'].TITLE}
            </AccordionTrigger>
            <AccordionContent>
              {t.SERVICES.SERVICES['3'].DESCRIPTION}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              {t.SERVICES.SERVICES['4'].TITLE}
            </AccordionTrigger>
            <AccordionContent>
              {t.SERVICES.SERVICES['4'].DESCRIPTION}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              {t.SERVICES.SERVICES['5'].TITLE}
            </AccordionTrigger>
            <AccordionContent>
              {t.SERVICES.SERVICES['5'].DESCRIPTION}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              {t.SERVICES.SERVICES['6'].TITLE}
            </AccordionTrigger>
            <AccordionContent>
              {t.SERVICES.SERVICES['6'].DESCRIPTION}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-8 flex w-full justify-around lg:mt-0">
          <div className="w-1/2 md:w-2/5">
            <Image
              className="lg:absolute lg:left-12 lg:top-96 lg:w-1/5 xl:left-32 xl:top-80"
              alt="Marta Elf"
              src="/marta-elf-blur.png"
              width={576}
              quality={100}
              height={720}
            />
          </div>
          <div className="w-2/5 md:w-1/3">
            <Image
              className="lg:absolute lg:right-0 lg:top-12 lg:w-1/5 xl:right-12"
              alt="Manikin"
              height={720}
              quality={100}
              src="/manikin-blur.png"
              width={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
