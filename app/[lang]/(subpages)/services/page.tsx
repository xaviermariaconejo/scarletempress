import { Lang } from '@/app/lib/definitions';
import { getTranslations } from '@/app/lib/locales';
import clsx from 'clsx';
import { Metadata } from 'next';

import { Examples } from './examples';
import { Services } from './services';
import { Welcome } from './welcome';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

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
    <main className={clsx('flex min-h-screen flex-col', animationFadeUp)}>
      <Welcome t={t} />
      <Services t={t} />
      <Examples t={t} />
    </main>
  );
}
