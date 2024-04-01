import { ContactForm } from '@/app/ui/contact/form';
import { Email } from '@/app/ui/components/email';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { getTranslations } from '@/app/lib/locales';
import { Lang } from '@/app/lib/definitions';
import { Metadata } from 'next';
import clsx from 'clsx';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact',
};

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const t = await getTranslations(lang);

  return (
    <main
      className={clsx(
        'container mx-auto flex flex-col bg-white md:px-12 md:py-20',
        animationFadeUp,
      )}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="p-8 pb-5 sm:pb-8 lg:w-1/2">
          <h2 className="mb-6 text-2xl font-semibold">{t.CONTACT.TITLE}</h2>
          <p className="mb-4">
            Contáctame para consultas sobre diseños personalizados, ajustes y
            transformaciones de tus trajes y vestidos. ¡Estoy aquí para
            ayudarte!
          </p>
          <Email />
          <div className="mt-2 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-scarlet-400" />
            <span>Barcelona, Spain</span>
          </div>
        </div>
        <ContactForm />
      </div>
      <Image
        className="p-8 pt-0"
        alt="Sewing utensils"
        height={1365}
        src="/contact.png"
        width={2048}
      />
    </main>
  );
}
