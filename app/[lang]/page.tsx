import { Lang } from '@/app/lib/definitions';
import { getTranslations } from '@/app/lib/locales';
import { Header } from '@/app/ui/home/header';
import clsx from 'clsx';

import { AboutMe } from './about-me';
import { Contact } from './contact';
import { Services } from './services';
import { Social } from './social';
import { Welcome } from './welcome';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export default async function HomePage({ params }: { params: { lang: Lang } }) {
  const t = await getTranslations(params.lang);

  return (
    <>
      <Header t={t} />
      <main
        className={clsx(
          'flex min-h-screen flex-col items-center justify-start bg-white',
          animationFadeUp,
        )}
      >
        <Welcome t={t} lang={params.lang} />
        <Services t={t} />
        <AboutMe t={t} />
        <Social t={t} />
        <Contact t={t} />
      </main>
    </>
  );
}
