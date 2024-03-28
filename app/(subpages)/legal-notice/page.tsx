import { Metadata } from 'next';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Aviso Legal',
};

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export default function Page() {
  return (
    <main className={clsx('container mx-auto p-8 md:py-20', animationFadeUp)}>
      <h1 className="mb-4 text-center text-3xl font-bold">
        AVISO LEGAL Y CONDICIONES GENERALES DE USO
      </h1>
      <p className="mb-8 text-center">www.scarletempress.com</p>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">I. INFORMACIÓN GENERAL</h2>
        <p>
          En cumplimiento con el deber de información dispuesto en la Ley
          34/2002 de Servicios de la Sociedad de la Información y el Comercio
          Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los
          siguientes datos de información general de este sitio web:
        </p>
        <p className="mt-4">
          La titularidad de este sitio web, www.scarletempress.com, (en
          adelante, Sitio Web) la ostenta: Marta Alcaide Lorca, con NIF:
          50344756-X, y cuyos datos de contacto son:
        </p>
        <ul className="ml-8 mt-2 list-disc">
          <li>{"Dirección: Passatge d'Aloi, 1, Entresuelo, 3"}</li>
          <li>Teléfono de contacto: +34 625 90 70 43</li>
          <li>Email de contacto: info@scarletempress.com</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          II. TÉRMINOS Y CONDICIONES GENERALES DE USO
        </h2>
        <article className="mb-8">
          <h3 className="mb-3 text-2xl font-semibold">
            El objeto de las condiciones: El Sitio Web
          </h3>
          <p>
            El objeto de las presentes Condiciones Generales de Uso (en
            adelante, Condiciones) es regular el acceso y la utilización del
            Sitio Web. A los efectos de las presentes Condiciones se entenderá
            como Sitio Web: la apariencia externa de los interfaces de pantalla,
            tanto de forma estática como de forma dinámica, es decir, el árbol
            de navegación; y todos los elementos integrados tanto en los
            interfaces de pantalla como en el árbol de navegación (en adelante,
            Contenidos) y todos aquellos servicios o recursos en línea que en su
            caso ofrezca a los Usuarios (en adelante, Servicios).
          </p>
          <p className="mt-4">
            Scarlet Empress se reserva la facultad de modificar, en cualquier
            momento, y sin aviso previo, la presentación y configuración del
            Sitio Web y de los Contenidos y Servicios que en él pudieran estar
            incorporados. El Usuario reconoce y acepta que en cualquier momento
            Scarlet Empress pueda interrumpir, desactivar y/o cancelar
            cualquiera de estos elementos que se integran en el Sitio Web o el
            acceso a los mismos.
          </p>
          <p className="mt-4">
            El acceso al Sitio Web por el Usuario tiene carácter libre y, por
            regla general, es gratuito sin que el Usuario tenga que proporcionar
            una contraprestación para poder disfrutar de ello, salvo en lo
            relativo al coste de conexión a través de la red de
            telecomunicaciones suministrada por el proveedor de acceso que
            hubiere contratado el Usuario.
          </p>
          <p className="mt-4">
            La utilización de alguno de los Contenidos o Servicios del Sitio Web
            podrá hacerse mediante la suscripción o registro previo del Usuario.
          </p>
        </article>

        <article className="mb-8">
          <h3 className="mb-3 text-xl font-semibold">
            El objeto de las condiciones: El Sitio Web
          </h3>
          <p>
            El acceso, la navegación y uso del Sitio Web, así como por los
            espacios habilitados para interactuar entre los Usuarios, y el
            Usuario y Scarlet Empress, como los comentarios y/o espacios de
            blogging, confiere la condición de Usuario, por lo que se aceptan,
            desde que se inicia la navegación por el Sitio Web, todas las
            Condiciones aquí establecidas, así como sus ulteriores
            modificaciones, sin perjuicio de la aplicación de la correspondiente
            normativa legal de obligado cumplimiento según el caso. Dada la
            relevancia de lo anterior, se recomienda al Usuario leerlas cada vez
            que visite el Sitio Web.
          </p>
          <p className="mt-4">
            El Sitio Web de Scarlet Empress proporciona gran diversidad de
            información, servicios y datos. El Usuario asume su responsabilidad
            para realizar un uso correcto del Sitio Web. Esta responsabilidad se
            extenderá a:
          </p>
          <ul className="ml-8 mt-2 list-disc">
            <li>
              Un uso de la información, Contenidos y/o Servicios y datos
              ofrecidos por Scarlet Empress sin que sea contrario a lo dispuesto
              por las presentes Condiciones, la Ley, la moral o el orden
              público, o que de cualquier otro modo puedan suponer lesión de los
              derechos de terceros o del mismo funcionamiento del Sitio Web.
            </li>
            <li>
              La veracidad y licitud de las informaciones aportadas por el
              Usuario en los formularios extendidos por Scarlet Empress para el
              acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio
              Web. En todo caso, el Usuario notificará de forma inmediata a
              Scarlet Empress acerca de cualquier hecho que permita el uso
              indebido de la información registrada en dichos formularios, tales
              como, pero no solo, el robo, extravío, o el acceso no autorizado a
              identificadores y/o contraseñas, con el fin de proceder a su
              inmediata cancelación.
            </li>
          </ul>
          <p className="mt-4">
            Scarlet Empress se reserva el derecho de retirar todos aquellos
            comentarios y aportaciones que vulneren la ley, el respeto a la
            dignidad de la persona, que sean discriminatorios, xenófobos,
            racistas, pornográficos, spamming, que atenten contra la juventud o
            la infancia, el orden o la seguridad pública o que, a su juicio, no
            resultaran adecuados para su publicación.
          </p>
          <p className="mt-4">
            En cualquier caso, Scarlet Empress no será responsable de las
            opiniones vertidas por los Usuarios a través de comentarios u otras
            herramientas de blogging o de participación que pueda haber.
          </p>
          <p className="mt-4">
            El mero acceso a este Sitio Web no supone entablar ningún tipo de
            relación de carácter comercial entre Scarlet Empress y el Usuario.
          </p>
          <p className="mt-4">
            El Usuario declara ser mayor de edad y disponer de la capacidad
            jurídica suficiente para vincularse por las presentes Condiciones.
            Por lo tanto, este Sitio Web de Scarlet Empress no se dirige a
            menores de edad. Scarlet Empress declina cualquier responsabilidad
            por el incumplimiento de este requisito.
          </p>
        </article>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y
          RESPONSABILIDAD
        </h2>
        <p>
          Scarlet Empress no garantiza la continuidad, disponibilidad y utilidad
          del Sitio Web, ni de los Contenidos o Servicios. Scarlet Empress hará
          todo lo posible por el buen funcionamiento del Sitio Web, sin embargo,
          no se responsabiliza ni garantiza que el acceso a este Sitio Web no
          vaya a ser ininterrumpido o que esté libre de error.
        </p>
        <p className="mt-4">
          Tampoco se responsabiliza o garantiza que el contenido o software al
          que pueda accederse a través de este Sitio Web, esté libre de error o
          cause un daño al sistema informático (software y hardware) del
          Usuario. En ningún caso Scarlet Empress será responsable por las
          pérdidas, daños o perjuicios de cualquier tipo que surjan por el
          acceso, navegación y el uso del Sitio Web, incluyéndose, pero no
          limitándose, a los ocasionados a los sistemas informáticos o los
          provocados por la introducción de virus.
        </p>
        <p className="mt-4">
          Scarlet Empress tampoco se hace responsable de los daños que pudiesen
          ocasionarse a los usuarios por un uso inadecuado de este Sitio Web. En
          particular, no se hace responsable en modo alguno de las caídas,
          interrupciones, falta o defecto de las telecomunicaciones que pudieran
          ocurrir.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">IV. POLÍTICA DE ENLACES</h2>
        <p>
          Se informa que el Sitio Web de Scarlet Empress pone o puede poner a
          disposición de los Usuarios medios de enlace (como, entre otros,
          links, banners, botones), directorios y motores de búsqueda que
          permiten a los Usuarios acceder a sitios web pertenecientes y/o
          gestionados por terceros.
        </p>
        <p className="mt-4">
          La instalación de estos enlaces, directorios y motores de búsqueda en
          el Sitio Web tiene por objeto facilitar a los Usuarios la búsqueda de
          y acceso a la información disponible en Internet, sin que pueda
          considerarse una sugerencia, recomendación o invitación para la visita
          de los mismos.
        </p>
        <p className="mt-4">
          Scarlet Empress no ofrece ni comercializa por sí ni por medio de
          terceros los productos y/o servicios disponibles en dichos sitios
          enlazados.
        </p>
        <p className="mt-4">
          Asimismo, tampoco garantizará la disponibilidad técnica, exactitud,
          veracidad, validez o legalidad de sitios ajenos a su propiedad a los
          que se pueda acceder por medio de los enlaces.
        </p>
        <p className="mt-4">
          Scarlet Empress en ningún caso revisará o controlará el contenido de
          otros sitios web, así como tampoco aprueba, examina ni hace propios
          los productos y servicios, contenidos, archivos y cualquier otro
          material existente en los referidos sitios enlazados.
        </p>
        <p className="mt-4">
          Scarlet Empress no asume ninguna responsabilidad por los daños y
          perjuicios que pudieran producirse por el acceso, uso, calidad o
          licitud de los contenidos, comunicaciones, opiniones, productos y
          servicios de los sitios web no gestionados por Scarlet Empress y que
          sean enlazados en este Sitio Web.
        </p>
        <p className="mt-4">
          El Usuario o tercero que realice un hipervínculo desde una página web
          de otro, distinto, sitio web al Sitio Web de Scarlet Empress deberá
          saber que:
        </p>
        <p className="mt-4">
          No se permite la reproducción —total o parcialmente— de ninguno de los
          Contenidos y/o Servicios del Sitio Web sin autorización expresa de
          Scarlet Empress.
        </p>
        <p className="mt-4">
          No se permite tampoco ninguna manifestación falsa, inexacta o
          incorrecta sobre el Sitio Web de Scarlet Empress, ni sobre los
          Contenidos y/o Servicios del mismo.
        </p>
        <p className="mt-4">
          A excepción del hipervínculo, el sitio web en el que se establezca
          dicho hiperenlace no contendrá ningún elemento, de este Sitio Web,
          protegido como propiedad intelectual por el ordenamiento jurídico
          español, salvo autorización expresa de Scarlet Empress.
        </p>
        <p className="mt-4">
          El establecimiento del hipervínculo no implicará la existencia de
          relaciones entre Scarlet Empress y el titular del sitio web desde el
          cual se realice, ni el conocimiento y aceptación de Scarlet Empress de
          los contenidos, servicios y/o actividades ofrecidas en dicho sitio
          web, y viceversa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          V. PROPIEDAD INTELECTUAL E INDUSTRIAL
        </h2>
        <p>
          Scarlet Empress por sí o como parte cesionaria, es titular de todos
          los derechos de propiedad intelectual e industrial del Sitio Web, así
          como de los elementos contenidos en el mismo (a título enunciativo y
          no exhaustivo, imágenes, sonido, audio, vídeo, software o textos,
          marcas o logotipos, combinaciones de colores, estructura y diseño,
          selección de materiales usados, programas de ordenador necesarios para
          su funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras
          protegidas como propiedad intelectual por el ordenamiento jurídico
          español, siéndoles aplicables tanto la normativa española y
          comunitaria en este campo, como los tratados internacionales relativos
          a la materia y suscritos por España.
        </p>
        <p className="mt-4">
          Todos los derechos reservados. En virtud de lo dispuesto en la Ley de
          Propiedad Intelectual, quedan expresamente prohibidas la reproducción,
          la distribución y la comunicación pública, incluida su modalidad de
          puesta a disposición, de la totalidad o parte de los contenidos de
          esta página web, con fines comerciales, en cualquier soporte y por
          cualquier medio técnico, sin la autorización de Scarlet Empress.
        </p>
        <p className="mt-4">
          El Usuario se compromete a respetar los derechos de propiedad
          intelectual e industrial de Scarlet Empress. Podrá visualizar los
          elementos del Sitio Web o incluso imprimirlos, copiarlos y
          almacenarlos en el disco duro de su ordenador o en cualquier otro
          soporte físico siempre y cuando sea, exclusivamente, para su uso
          personal. El Usuario, sin embargo, no podrá suprimir, alterar, o
          manipular cualquier dispositivo de protección o sistema de seguridad
          que estuviera instalado en el Sitio Web.
        </p>
        <p className="mt-4">
          En caso de que el Usuario o tercero considere que cualquiera de los
          Contenidos del Sitio Web suponga una violación de los derechos de
          protección de la propiedad intelectual, deberá comunicarlo
          inmediatamente a Scarlet Empress a través de los datos de contacto del
          apartado de INFORMACIÓN GENERAL de este Aviso Legal y Condiciones
          Generales de Uso.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">
          VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN
        </h2>
        <p>
          Scarlet Empress se reserva la facultad de presentar las acciones
          civiles o penales que considere necesarias por la utilización indebida
          del Sitio Web y Contenidos, o por el incumplimiento de las presentes
          Condiciones.
        </p>
        <p className="mt-4">
          La relación entre el Usuario y Scarlet Empress se regirá por la
          normativa vigente y de aplicación en el territorio español. De surgir
          cualquier controversia en relación con la interpretación y/o a la
          aplicación de estas Condiciones las partes someterán sus conflictos a
          la jurisdicción ordinaria sometiéndose a los jueces y tribunales que
          correspondan conforme a derecho.
        </p>
        <p className="mt-4">
          Este documento de Aviso Legal y Condiciones Generales de uso del sitio
          web ha sido creado mediante el generador de plantilla de aviso legal y
          condiciones de uso online el día 28/03/2024.
        </p>
      </section>
    </main>
  );
}
