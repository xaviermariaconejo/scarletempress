import { Lang } from '@/app/lib/definitions';
import { getTranslations } from '@/app/lib/locales';
import { Header } from '@/app/ui/home/header';
import { Services } from '@/app/ui/home/services';
import { Welcome } from '@/app/ui/home/welcome';

export default async function HomePage({ params }: { params: { lang: Lang } }) {
  const t = await getTranslations(params.lang);

  return (
    <>
      <Header t={t} />
      <main className="flex min-h-screen flex-col items-center justify-start bg-white">
        <Welcome lang={params.lang} />
        <Services />
      </main>
    </>
  );
}
