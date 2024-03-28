import { Email } from '@/app/ui/email';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Metadata } from 'next';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Contact',
};

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

const inputStyles =
  'border-scarlet-500 placeholder-gray-dark focus:border-scarlet-800 rounded-full border-2 px-4 py-2 focus:shadow-none focus:outline-none focus:ring-0';

export default function ContactPage() {
  return (
    <main
      className={clsx(
        'container mx-auto flex flex-col bg-white md:px-12 md:py-24 lg:flex-row',
        animationFadeUp,
      )}
    >
      <div className="p-8 lg:w-1/2">
        <h2 className="mb-6 text-2xl font-semibold">Contáctanos</h2>
        <p className="mb-4">
          Contáctanos para consultas sobre diseños personalizados, ajustes y
          transformaciones de tus trajes y vestidos. ¡Estamos aquí para
          ayudarte!
        </p>
        <Email />
        <div className="mt-2 flex items-center">
          <FaMapMarkerAlt className="text-scarlet-400 mr-2" />
          <span>Barcelona, Spain</span>
        </div>
      </div>
      <form className="lg:min-w-64 flex flex-col space-y-4 p-8 md:min-w-[500px] lg:w-1/2">
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <input
            type="text"
            placeholder="Nombre (obligatorio)"
            className={`${inputStyles} flex-1`}
          />
          <input
            type="text"
            placeholder="Apellidos"
            className={`${inputStyles} flex-1`}
          />
        </div>
        <input
          type="email"
          placeholder="Correo electrónico (obligatorio)"
          className={`${inputStyles} w-full`}
        />
        <textarea
          placeholder="Mensaje (obligatorio)"
          className={`${inputStyles} h-32 w-full rounded-lg`}
        ></textarea>
        <button
          type="submit"
          className="from-scarlet-500 to-scarlet-600 hover:from-scarlet-600 hover:to-scarlet-700 w-fit rounded-full bg-gradient-to-b px-6 py-2 text-white shadow"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
