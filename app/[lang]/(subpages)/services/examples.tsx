import { Locale } from '@/app/lib/definitions';
import Image from 'next/image';

export function Examples({ t }: { t: Locale }) {
  return (
    <section className="container mx-auto flex w-full flex-col items-center justify-start p-12 pt-4">
      <p className="mb-8 mr-auto text-xl font-semibold md:mb-12">
        {t.SERVICES.EXAMPLES.TITLE}
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
