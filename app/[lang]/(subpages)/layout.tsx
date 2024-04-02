import { Lang } from '@/app/lib/definitions';
import { getTranslations } from '@/app/lib/locales';
import { Header } from '@/app/ui/components/header';

export default async function SubPagesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const t = await getTranslations(params.lang);

  return (
    <>
      <Header t={t} />
      {children}
    </>
  );
}
