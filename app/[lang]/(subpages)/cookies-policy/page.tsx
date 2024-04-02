import { WEBSITE_URL } from '@/app/lib/constants';
import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
};

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export default function Page() {
  return (
    <main className={clsx('container mx-auto p-8 md:py-20', animationFadeUp)}>
      <h1 className="mb-4 text-center text-3xl font-bold">
        POLÍTICA DE COOKIES
      </h1>
      <p className="mb-8 text-center">{WEBSITE_URL}</p>

      <section className="mb-8">
        <p>
          El acceso a este Sitio Web puede implicar la utilización de cookies.
          Las cookies son pequeñas cantidades de información que se almacenan en
          el navegador utilizado por cada Usuario —en los distintos dispositivos
          que pueda utilizar para navegar— para que el servidor recuerde cierta
          información que posteriormente y únicamente el servidor que la
          implementó leerá. Las cookies facilitan la navegación, la hacen más
          amigable, y no dañan el dispositivo de navegación.
        </p>
        <p className="mb-8">
          Las cookies son procedimientos automáticos de recogida de información
          relativa a las preferencias determinadas por el Usuario durante su
          visita al Sitio Web con el fin de reconocerlo como Usuario, y
          personalizar su experiencia y el uso del Sitio Web, y pueden también,
          por ejemplo, ayudar a identificar y resolver errores.
        </p>
        <p className="mb-8">
          La información recabada a través de las cookies puede incluir la fecha
          y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que
          ha estado en el Sitio Web y los sitios visitados justo antes y después
          del mismo. Sin embargo, ninguna cookie permite que esta misma pueda
          contactarse con el número de teléfono del Usuario o con cualquier otro
          medio de contacto personal. Ninguna cookie puede extraer información
          del disco duro del Usuario o robar información personal. La única
          manera de que la información privada del Usuario forme parte del
          archivo Cookie es que el usuario dé personalmente esa información al
          servidor.
        </p>
        <p className="mb-8">
          Las cookies que permiten identificar a una persona se consideran datos
          personales. Por tanto, a las mismas les será de aplicación la Política
          de Privacidad anteriormente descrita. En este sentido, para la
          utilización de las mismas será necesario el consentimiento del
          Usuario. Este consentimiento será comunicado, en base a una elección
          auténtica, ofrecido mediante una decisión afirmativa y positiva, antes
          del tratamiento inicial, removible y documentado.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="mb-3 text-2xl font-semibold">Cookies propias</h3>
        <p>
          Son aquellas cookies que son enviadas al ordenador o dispositivo del
          Usuario y gestionadas exclusivamente por Scarlet Empress para el mejor
          funcionamiento del Sitio Web. La información que se recaba se emplea
          para mejorar la calidad del Sitio Web y su Contenido y su experiencia
          como Usuario. Estas cookies permiten reconocer al Usuario como
          visitante recurrente del Sitio Web y adaptar el contenido para
          ofrecerle contenidos que se ajusten a sus preferencias.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="mb-3 text-2xl font-semibold">Cookies de terceros</h3>
        <p>
          Son cookies utilizadas y gestionadas por entidades externas que
          proporcionan a Scarlet Empress servicios solicitados por este mismo
          para mejorar el Sitio Web y la experiencia del usuario al navegar en
          el Sitio Web. Los principales objetivos para los que se utilizan
          cookies de terceros son la obtención de estadísticas de accesos y
          analizar la información de la navegación, es decir, cómo interactúa el
          Usuario con el Sitio Web.
        </p>
        <p className="mt-4">
          La información que se obtiene se refiere, por ejemplo, al número de
          páginas visitadas, el idioma, el lugar a la que la dirección IP desde
          el que accede el Usuario, el número de Usuarios que acceden, la
          frecuencia y reincidencia de las visitas, el tiempo de visita, el
          navegador que usan, el operador o tipo de dispositivo desde el que se
          realiza la visita. Esta información se utiliza para mejorar el Sitio
          Web, y detectar nuevas necesidades para ofrecer a los Usuarios un
          Contenido y/o servicio de óptima calidad. En todo caso, la información
          se recopila de forma anónima y se elaboran informes de tendencias del
          Sitio Web sin identificar a usuarios individuales.
        </p>
        <p className="mt-4">
          Puede obtener más información sobre las cookies, la información sobre
          la privacidad, o consultar la descripción del tipo de cookies que se
          utiliza, sus principales características, periodo de expiración, etc.
          en el siguiente(s) enlace(s):
        </p>
        <p className="mt-4 text-sm italic">
          Este sitio web no utiliza cookies de terceros actualmente.
        </p>
        <hr className="mt-2 border-t border-gray-dark" />
        <p className="mt-4">
          La(s) entidad(es) encargada(s) del suministro de cookies podrá(n)
          ceder esta información a terceros, siempre y cuando lo exija la ley o
          sea un tercero el que procese esta información para dichas entidades.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-2xl font-semibold">
          Deshabilitar, rechazar y eliminar cookies
        </h3>
        <p>
          El Usuario puede deshabilitar, rechazar y eliminar las cookies —total
          o parcialmente— instaladas en su dispositivo mediante la configuración
          de su navegador (entre los que se encuentran, por ejemplo, Chrome,
          Firefox, Safari, Explorer). En este sentido, los procedimientos para
          rechazar y eliminar las cookies pueden diferir de un navegador de
          Internet a otro. En consecuencia, el Usuario debe acudir a las
          instrucciones facilitadas por el propio navegador de Internet que esté
          utilizando. En el supuesto de que rechace el uso de cookies —total o
          parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener
          limitada la utilización de algunas de las prestaciones del mismo.
        </p>
        <p className="mt-4">
          Este documento de Política de Cookies ha sido creado mediante el
          generador de plantilla de política de cookies web gratis online el día
          28/03/2024.
        </p>
      </section>
    </main>
  );
}