'use server';

import { SUPPORT_EMAIL } from '@/app/lib/constants';
import { FormSchema, State } from '@/app/lib/definitions';
import { ContactEmailTemplate } from '@/app/ui/contact/email-template';
import { Resend } from 'resend';

export async function sendContactEmail(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // Validate form using Zod
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Faltan Campos. No se pudo enviar el mensaje.',
    };
  }

  // Prepare data for email
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, surname, email, message } = validatedFields.data;
  const fullName = surname ? `${name} ${surname}` : name;

  try {
    await resend.emails.send({
      from: 'Contacto Web <contact@scarletempress.com>',
      to: [SUPPORT_EMAIL],
      subject: `Contacto Web: ${fullName}`,
      react: ContactEmailTemplate({ email, fullName, message }),
    });

    return { status: 'success', message: null };
  } catch (error) {
    return {
      status: 'error',
      message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    };
  }
}
