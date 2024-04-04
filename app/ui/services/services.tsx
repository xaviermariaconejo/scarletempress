import { Locale } from '@/app/lib/definitions';
import { ExpandableText } from '@/app/ui/components/expandableText';
import clsx from 'clsx';
import Image from 'next/image';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Services({ t }: { t: Locale }) {
  return (
    <>
      <section className={clsx('relative w-full', animationFadeUp)}>
        <div className="absolute h-[460px] w-full md:h-auto">
          <Image
            alt="Stains desktop"
            quality={100}
            width={3496}
            height={1304}
            src="/stains-desktop.png"
            className="hidden opacity-90 md:block"
          />
          <Image
            alt="Stains mobile"
            className="block opacity-75 md:hidden"
            fill
            quality={100}
            src="/stains-mobile.png"
            style={{
              objectFit: 'cover',
              maskImage:
                'linear-gradient(to bottom, white 80%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, white 80%, transparent 100%)',
            }}
          />
        </div>
        <div className="relative z-10 mx-auto p-8 pt-20 text-center md:w-[500px] md:p-12 md:pt-20">
          <h1 className="text-3xl font-semibold">
            Desde el boceto de tu sueño hasta la realidad de tu armario
          </h1>
          <p className="mt-4 text-xl font-semibold">
            Transformo cualquier idea, clara o difusa, en la prenda perfecta
            para ti
          </p>
        </div>
      </section>
      <section
        className={clsx(
          'container relative mx-auto flex w-full flex-col items-center justify-start p-8 md:p-12 md:pt-0',
          animationFadeUp,
        )}
      >
        <div className="relative flex flex-col items-center justify-center">
          <div className="mb-8 flex w-full flex-col items-center justify-around space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0 lg:space-x-0">
            <ExpandableText
              className="left-0 top-0 w-full max-w-[320px] text-center font-medium sm:max-w-sm lg:absolute lg:-left-6 lg:max-w-[280px] xl:left-0 xl:max-w-sm"
              title="Calidad al Detalle en cada Encargo"
              content="Cada pieza que creo es más
              que una prenda; es una obra de arte personalizada. Me comprometo a
              ofrecerte un servicio de alta calidad, donde cada puntada es
              realizada con dedicación y atención al detalle. Confía en mí para
              entregar prendas que superen tus expectativas en cada encargo."
            />
            <ExpandableText
              className="right-0 top-0 w-full max-w-[320px] text-center font-medium sm:max-w-sm lg:absolute lg:max-w-[280px] xl:max-w-sm"
              title="Diseño Personalizado para Ti"
              content="Cada diseño comienza
              contigo. Me dedico a crear prendas que reflejen tu estilo único y
              personalidad. Desde el concepto hasta el acabado final, trabajamos
              estrechamente juntos para asegurarnos de que tu visión se haga
              realidad en cada prenda que creo."
            />
          </div>
          <Image
            alt="Marta medieval"
            quality={100}
            width={1200}
            height={1600}
            className="w-full sm:w-2/3 lg:w-1/3"
            src="/marta-medieval-blur.png"
          />
          <div className="mt-8 flex w-full flex-col items-center justify-around space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0 lg:space-x-0">
            <ExpandableText
              className="left-0 top-2/3 w-full max-w-[320px] text-center font-medium sm:max-w-sm lg:absolute lg:-left-6 lg:max-w-[280px] xl:left-0 xl:max-w-sm"
              title="Calidad Inigualable en la Confección"
              content="En cada prenda que creo, persigo la excelencia en calidad y artesanía. Utilizo
              los mejores materiales y técnicas de confección para garantizar
              que cada pieza sea duradera y tenga un ajuste perfecto. Descubre
              la diferencia de la verdadera calidad en cada costura."
            />
            <ExpandableText
              className="right-0 top-2/3 w-full max-w-[320px] text-center font-medium sm:max-w-sm lg:absolute lg:max-w-[280px] xl:max-w-sm"
              title="Encargos para todas las Épocas"
              content="Me apasiona la diversidad y la creatividad en mis diseños. Desde trajes de
              fantasía medieval hasta diseños inspirados en el steampunk y más
              allá, estoy aquí para hacer realidad tus sueños de moda. Con un
              enfoque en el rigor histórico y la atención al detalle, te
              garantizo prendas auténticas y duraderas, perfectas para tus
              aventuras en la recreación histórica."
            />
          </div>
        </div>
        <div className="mt-4 flex min-h-0 flex-col items-start space-y-4 sm:mt-8 sm:min-h-[212px] sm:flex-row sm:space-x-4 sm:space-y-0 lg:mt-52 lg:space-x-12 xl:mt-20">
          <ExpandableText
            className="w-[320px] text-center font-medium sm:w-96"
            title="Excepcional servicio al Cliente"
            content="Tu opinión es lo más importante para mí. Desde la consulta inicial hasta la entrega
            final, te mantengo informado y te hago sentir parte del proceso en
            todo momento. Tu satisfacción es mi máxima prioridad y me esfuerzo
            por superar tus expectativas en cada paso del camino."
          />
          <ExpandableText
            className="w-[320px] text-center font-medium sm:w-96"
            title="Selección al Detalle de Telas"
            content="La elección de las telas
            es fundamental para la calidad y el estilo de una prenda. Ofrezco
            una amplia gama de telas de alta calidad para que elijas. Desde
            lujosos tejidos hasta opciones más prácticas, te ayudaré a encontrar
            la tela perfecta que se adapte a tus necesidades y preferencias."
          />
        </div>
      </section>
    </>
  );
}
