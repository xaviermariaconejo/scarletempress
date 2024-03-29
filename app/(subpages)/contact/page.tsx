import { ContactForm } from '@/app/ui/contact/form';
import { Email } from '@/app/ui/components/email';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Metadata } from 'next';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Contact',
};

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export default function ContactPage() {
  return (
    <main
      className={clsx(
        'container mx-auto flex flex-col bg-white md:px-12 md:py-24 lg:flex-row',
        animationFadeUp,
      )}
    >
      <div className="p-8 pb-5 sm:pb-8 lg:w-1/2">
        <h2 className="mb-6 text-2xl font-semibold">Contáctanos</h2>
        <p className="mb-4">
          Contáctanos para consultas sobre diseños personalizados, ajustes y
          transformaciones de tus trajes y vestidos. ¡Estamos aquí para
          ayudarte!
        </p>
        <Email />
        <div className="mt-2 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-scarlet-400" />
          <span>Barcelona, Spain</span>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
