import { Lang } from '@/app/lib/definitions';
import { getTranslations } from '@/app/lib/locales';
import { Examples } from '@/app/ui/services/examples';
import { Services } from '@/app/ui/services/services';
import { Welcome } from '@/app/ui/services/welcome';
import { Metadata } from 'next';

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
