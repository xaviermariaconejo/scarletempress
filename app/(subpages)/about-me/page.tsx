import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Me',
};

const TEXT_1 =
  '¡Hola! Soy Marta. Llevo cosiendo desde hace 14 años. Por supuesto no todos esos años han sido de manera profesional, pero me ayudaron a asentar las bases y a poder aprovechar al máximo mi formación. He estudiado Vestuario y Alta costura, donde aprendí patronaje a medida, historia de la moda, sastrería... Todo ello hizo más fácil prepararme en patronaje digital e industrial.';
const TEXT_2 =
  'Aunque la educación es muy importante, la experiencia es lo que afianza esos conocimientos. He tenido la suerte de poder coser para algunas obras de teatro, así como otros espectáculos, todos ellos con sus particularidades. Me han enseñado a ser flexible, resolutiva y rápida, así como lo que necesita cada traje según su uso, tanto en materiales como en su confección.';
const TEXT_3 =
  'Desde pequeña me he acercado a todo aquello que me permita ser creativa: interpretación, música, danza... ¡Lo que me encanta de todas estas cosas es que a veces puedes hacer varias en el mismo proyecto! También he tenido la suerte de descubrir el LARP recientemente, y me encanta poder ponerme a prueba, ya sea haciendo cosas de recreación historica o simplemente diseños basados en un concepto, y hacer que sean prendas duraderas y, en la medida de lo posible, cómodas.';
const TEXT_4 =
  'Estoy emocionada por colaborar y dar vida a tus visiones de diseño. Si buscas un diseño que cuente una historia, confeccionado con técnica experta y un toque creativo, ¡contacta conmigo y comencemos a crear algo único juntos!';

export default function AboutMePage() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-between px-12 py-0 xl:p-16">
      <section className="flex flex-col items-center justify-between xl:flex-row">
        <div className="self-start p-8 xl:w-1/2 xl:pt-16">
          <h2 className="mb-8 text-center text-4xl font-semibold">
            ¿Quién es Scarlet Empress?
          </h2>
          <p className="text-center">{TEXT_1}</p>
          <p className="mt-4 hidden text-center xl:block">{TEXT_2}</p>
          <p className="mt-4 hidden text-center xl:block">{TEXT_3}</p>
          <p className="mt-4 hidden text-center xl:block">{TEXT_4}</p>
        </div>
        <Image
          alt="Marta Elf"
          src="/marta-elf-blur.png"
          width={576}
          quality={100}
          height={720}
        />
        <p className="my-8 block text-center xl:hidden">{TEXT_2}</p>
      </section>
      <section className="relative flex w-full flex-col items-center justify-between pb-12 xl:flex-row xl:py-12">
        <div className="flex-1">
          <Image
            alt="Marta and Susana Elfs"
            height={1066}
            quality={100}
            src="/marta-susana-elfs-blur.png"
            width={1600}
          />
        </div>
        <p className="mb-4 mt-8 block text-center xl:hidden">{TEXT_3}</p>
        <p className="mb-8 block text-center xl:hidden">{TEXT_4}</p>
        <div className="flex-1 xl:ml-8 xl:max-w-[33.33%]">
          <Image
            alt="Manikin"
            height={720}
            quality={100}
            src="/manikin-blur.png"
            width={480}
          />
        </div>
      </section>
    </main>
  );
}
