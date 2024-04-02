import { ETSY_URL } from '@/app/lib/constants';
import { FaEtsy } from 'react-icons/fa';

export function Etsy() {
  return (
    <a
      href={ETSY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Etsy"
      className="bg-etsy rounded p-1 text-white hover:text-scarlet-700"
    >
      <FaEtsy size={18} />
    </a>
  );
}
