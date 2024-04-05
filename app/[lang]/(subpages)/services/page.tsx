import { Lang } from '@/app/lib/definitions';
import { getTranslations } from '@/app/lib/locales';
import { Metadata } from 'next';

import { Examples } from './examples';
import { Services } from './services';
import { Welcome } from './welcome';

export const metadata: Metadata = {
  title: 'Services',
};

export default async function ServicesPage({
  params,
}: {
  params: { lang: Lang };
}) {
  const t = await getTranslations(params.lang);

  return (
    <main className="flex min-h-screen flex-col">
      <Welcome t={t} />
      <Services t={t} />
      <Examples t={t} />
    </main>
  );
}
