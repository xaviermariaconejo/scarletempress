import '@/app/ui/global.css';
import { Metadata } from 'next';
import { poppins } from '@/app/ui/fonts';
import { Footer } from '@/app/ui/components/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Scarlet Empress',
    default: 'Scarlet Empress',
  },
  description: 'The official Scarlet Empress Website.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex min-h-screen flex-col text-gray-dark antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
