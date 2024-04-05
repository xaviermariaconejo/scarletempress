import { Lang } from '@/app/lib/definitions';
import { getTranslations } from '@/app/lib/locales';
import { Header } from '@/app/ui/home/header';

import { AboutMe } from './about-me';
import { Services } from './services';
import { Welcome } from './welcome';

export default async function HomePage({ params }: { params: { lang: Lang } }) {
  const t = await getTranslations(params.lang);

  return (
    <>
      <Header t={t} />
      <main className="flex min-h-screen flex-col items-center justify-start bg-white">
        <Welcome t={t} lang={params.lang} />
        <Services t={t} />
        <AboutMe t={t} />
      </main>
    </>
  );
}
