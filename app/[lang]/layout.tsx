import { Footer } from '@/app/ui/components/footer';
import { Lang } from '@/app/lib/definitions';
import { LOCALES } from '@/app/lib/constants';
import { Metadata } from 'next';
import { poppins } from '@/app/ui/fonts';

import '@/app/ui/global.css';

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

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
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${poppins.className} flex min-h-screen flex-col text-gray-dark antialiased`}
      >
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
