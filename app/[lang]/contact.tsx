import { Locale } from '@/app/lib/definitions';
import { Form } from '@/app/ui/contact/form';
import Image from 'next/image';

export function Contact({ t }: { t: Locale }) {
  return (
    <section className="container mx-auto flex w-full flex-col items-center justify-between px-4 py-24 pb-12 lg:flex-row lg:items-start lg:space-x-8 lg:pb-24">
      <div className="h-full w-full flex-1 text-center md:mb-12 lg:mb-0 lg:mr-20 lg:max-w-[620px] lg:text-left xl:ml-12 xl:mr-32">
        <h2 className={'mb-4 text-3xl font-semibold lg:mb-8'}>
          {t.HOME.CONTACT.TITLE}
        </h2>
        <Form />
      </div>
      <div className="relative mx-auto hidden h-[240px] w-4/5 w-full overflow-hidden rounded sm:h-[460px] md:block lg:w-[420px]  xl:w-[620px]">
        <Image
          alt="Threads of many colors"
          fill
          quality={100}
          src="/contact-home.jpg"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  );
}
