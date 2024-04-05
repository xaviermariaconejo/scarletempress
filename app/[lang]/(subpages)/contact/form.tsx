'use client';

import { sendContactEmail } from '@/app/lib/actions';
import { State } from '@/app/lib/definitions';
import { useFormState, useFormStatus } from 'react-dom';

const inputStyles =
  'border-scarlet-500 placeholder-gray-dark focus:border-scarlet-800 rounded-full border-2 px-4 py-2 focus:shadow-none focus:outline-none focus:ring-0';

export function Form() {
  const initialState: State = { status: 'idle', message: null, errors: {} };
  const [state, dispatch] = useFormState(sendContactEmail, initialState);

  return (
    <form
      action={dispatch}
      className="lg:min-w-64 flex flex-col space-y-4 p-8 pt-5 sm:pt-8 md:min-w-[500px] lg:w-1/2"
    >
      <Inputs state={state} />
      {state && state.status === 'success' && <SuccessMessage />}
    </form>
  );
}

export function Inputs({ state }: { state: State }) {
  const status = useFormStatus();

  return (
    <>
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        <input
          className={`${inputStyles} flex-1`}
          id="name"
          name="name"
          placeholder="Nombre (obligatorio)"
          type="text"
        />
        <input
          className={`${inputStyles} flex-1`}
          id="surname"
          name="surname"
          placeholder="Apellidos"
          type="text"
        />
      </div>
      <input
        className={`${inputStyles} w-full`}
        id="email"
        name="email"
        placeholder="Correo electrónico (obligatorio)"
        type="email"
      />
      <textarea
        className={`${inputStyles} h-32 w-full rounded-lg`}
        id="message"
        name="message"
        placeholder="Mensaje (obligatorio)"
      ></textarea>
      <button
        className="w-fit rounded-full bg-gradient-to-b from-scarlet-500 to-scarlet-600 px-6 py-2 text-white shadow hover:from-scarlet-600 hover:to-scarlet-700 disabled:cursor-not-allowed disabled:bg-scarlet-100 disabled:bg-none disabled:text-scarlet-400"
        disabled={status.pending}
        type="submit"
      >
        Enviar
      </button>
      {!status.pending && state.status === 'error' && state.message && (
        <div id="errors" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-error">{state.message}</p>
          <ul className="ml-8 mt-2 list-disc text-sm text-error">
            {state.errors &&
              Object.keys(state.errors).map((fieldName) => {
                if (!state.errors) return null;
                return state.errors[fieldName].map(
                  (error: string, index: number) => (
                    <li key={`${fieldName}-${index}`}>{error}</li>
                  ),
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
}

export function SuccessMessage() {
  const status = useFormStatus();

  return (
    !status.pending && (
      <div
        className="rounded-lg bg-green-100 p-4 text-sm text-green-700"
        role="alert"
      >
        <span className="font-semibold">¡Éxito!</span> Tu mensaje ha sido
        enviado correctamente. Nos pondremos en contacto contigo lo antes
        posible.
      </div>
    )
  );
}
