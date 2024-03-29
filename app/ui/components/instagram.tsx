import { CiInstagram } from 'react-icons/ci';

export function Instagram() {
  return (
    <a
      href="https://www.instagram.com/xavicomi94/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-scarlet-700"
    >
      <CiInstagram size={24} />
    </a>
  );
}
