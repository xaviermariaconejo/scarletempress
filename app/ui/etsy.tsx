import { ETSY_URL } from '@/app/lib/constants';
import { FaEtsy } from 'react-icons/fa';

export function Etsy({ isBig }: { isBig?: boolean }) {
  const size = isBig ? 32 : 18;

  return (
    <a
      href={ETSY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Etsy"
      className="rounded bg-etsy p-1 text-white hover:text-scarlet-700"
    >
      <FaEtsy size={size} />
    </a>
  );
}
