import clsx from 'clsx';

const animationFadeUp =
  'animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards';

export function Services() {
  return (
    <section
      className={`justify-stat container flex min-h-[100vh] w-full flex-col items-center px-4 py-16`}
    >
      <h2
        className={clsx(
          'mb-8 text-center text-3xl font-semibold',
          animationFadeUp,
        )}
      >
        Hago que tus ideas tomen forma
      </h2>
      <p
        className={clsx(
          'text-l mb-14 max-w-[620px] text-center',
          animationFadeUp,
        )}
      >
        Desde el boceto de tu sueño hasta la realidad de tu armario, transformo
        cualquier idea, clara o difusa, en la prenda perfecta para ti
      </p>
      <ul className="list-disc">
        <li>FLIPENDO</li>
        <li>TOMALO</li>
      </ul>
    </section>
  );
}
