import { FaEnvelope } from 'react-icons/fa';
import clsx from 'clsx';

export function Email({ className = '' }: { className?: string }) {
  return (
    <a
      href="mailto:correo@ejemplo.com?subject=Proyecto%20para%20Scarlet%20Empress&body=%C2%A1Hola!%0A%0AContacto%20para%20hacer%20mi%20proyecto%20de%20sastrer%C3%ADa%20contigo,%20trata%20de..."
      className={clsx(
        'hover:text-scarlet-700 flex items-center hover:underline',
        className,
      )}
    >
      <FaEnvelope className="text-scarlet-400 mr-2" />
      <span>info@scarletempress.com</span>
    </a>
  );
}
