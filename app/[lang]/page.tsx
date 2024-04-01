import { Header } from '@/app/ui/home/header';
import { Lang } from '@/app/lib/definitions';
import { Services } from '@/app/ui/home/services';
import { Welcome } from '@/app/ui/home/welcome';

export default function HomePage({ params }: { params: { lang: Lang } }) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-start bg-white">
        <Welcome lang={params.lang} />
        <Services />
      </main>
    </>
  );
}
