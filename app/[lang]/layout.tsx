import { LOCALES, WEBSITE_URL } from '@/app/lib/constants';
import { Lang } from '@/app/lib/definitions';
import { poppins } from '@/app/ui/fonts';
import { Footer } from '@/app/ui/footer';
import '@/app/ui/global.css';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: {
    template: '%s | Scarlet Empress',
    default: 'Scarlet Empress',
  },
  description: 'The official Scarlet Empress Website.',
  metadataBase: new URL(`https://${WEBSITE_URL}`),
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
