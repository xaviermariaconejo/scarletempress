import { INSTAGRAM_URL } from '@/app/lib/constants';
import { CiInstagram } from 'react-icons/ci';

export function Instagram({ isBig }: { isBig?: boolean }) {
  const size = isBig ? 48 : 28;

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-scarlet-700"
    >
      <CiInstagram size={size} />
    </a>
  );
}
