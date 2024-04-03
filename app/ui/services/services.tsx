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
        <div className="absolute w-full h-[460px] md:h-auto">
          <Image
            alt="Stains desktop"
            quality={100}
            width={3496}
            height={1304}
            src="/stains-desktop.png"
            className="hidden md:block opacity-90"
          />
          <Image
            alt="Stains mobile"
            className="block md:hidden opacity-75"
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
        <div className="relative z-10 text-center p-8 md:p-12 md:w-[500px] mx-auto md:pt-20 pt-20">
          <h1 className="text-3xl font-bold">
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
          'justify-start relative flex w-full flex-col items-center p-8 md:p-12 md:pt-0',
          animationFadeUp,
        )}
      >
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center sm:items-start w-full justify-around mb-8 lg:space-x-0 sm:space-x-4 sm:space-y-0 space-y-4">
            <ExpandableText
              className="lg:absolute top-0 left-0 w-full max-w-sm lg:max-w-xs xl:max-w-sm text-center font-medium"
              title="Calidad al Detalle en cada Encargo"
              content="Cada pieza que creo es más
              que una prenda; es una obra de arte personalizada. Me comprometo a
              ofrecerte un servicio de alta calidad, donde cada puntada es
              realizada con dedicación y atención al detalle. Confía en mí para
              entregar prendas que superen tus expectativas en cada encargo."
            />
            <ExpandableText
              className="lg:absolute top-0 right-0 w-full max-w-sm lg:max-w-xs xl:max-w-sm text-center font-medium"
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
            className="sm:w-2/3 lg:w-1/3 w-full"
            src="/marta-medieval-blur.png"
          />
          <div className="flex sm:flex-row flex-col items-center sm:items-start w-full justify-around mt-8 sm:space-x-4 lg:space-x-0 sm:space-y-0 space-y-4">
            <ExpandableText
              className="lg:absolute top-2/3 left-0 w-full max-w-sm lg:max-w-xs xl:max-w-sm text-center font-medium"
              title="Calidad Inigualable en la Confección"
              content="En cada prenda que creo, persigo la excelencia en calidad y artesanía. Utilizo
              los mejores materiales y técnicas de confección para garantizar
              que cada pieza sea duradera y tenga un ajuste perfecto. Descubre
              la diferencia de la verdadera calidad en cada costura."
            />
            <ExpandableText
              className="lg:absolute top-2/3 right-0 w-full max-w-sm lg:max-w-xs xl:max-w-sm text-center font-medium"
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
        <div className="min-h-0 sm:min-h-[212px] items-start mt-4 sm:mt-8 lg:mt-20 flex flex-col sm:flex-row sm:space-x-4 lg:space-x-12 space-y-4 sm:space-y-0">
          <ExpandableText
            className="text-center w-96 font-medium"
            title="Excepcional servicio al Cliente"
            content="Tu opinión es lo más importante para mí. Desde la consulta inicial hasta la entrega
            final, te mantengo informado y te hago sentir parte del proceso en
            todo momento. Tu satisfacción es mi máxima prioridad y me esfuerzo
            por superar tus expectativas en cada paso del camino."
          />
          <ExpandableText
            className="text-center w-96 font-medium"
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
