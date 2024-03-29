import { Header } from '@/app/ui/components/header';
import { Welcome } from '@/app/ui/home/welcome';
import { Services } from '@/app/ui/home/services';

export default function HomePage() {
  return (
    <>
      <Header className="md:hidden" isHome />
      <main className="flex min-h-screen flex-col items-center justify-start bg-white">
        <Welcome />
        <Services />
      </main>
    </>
  );
}
