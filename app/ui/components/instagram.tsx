import { INSTAGRAM_URL } from '@/app/lib/constants';
import { CiInstagram } from 'react-icons/ci';

export function Instagram() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-scarlet-700"
    >
      <CiInstagram size={28} />
    </a>
  );
}
