import { Header } from '@/app/ui/home/header';
import { Welcome } from '@/app/ui/home/welcome';
import { Services } from '@/app/ui/home/services';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-start bg-white">
        <Welcome />
        <Services />
      </main>
    </>
  );
}
