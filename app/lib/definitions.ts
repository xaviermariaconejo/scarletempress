import { z } from 'zod';

export type Lang = 'en' | 'es' | 'fr' | 'de' | 'it';

export type State = {
  status: 'success' | 'error' | 'idle' | 'pending';
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};

export const FormSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  surname: z.string().optional(), // El campo es opcional
  email: z.string().email('Debe proporcionar un email válido'),
  message: z.string().min(1, 'El mensaje no puede estar vacío'),
});

export type Locale = {
  LANGUAGES: {
    es: string;
    en: string;
    it: string;
    fr: string;
    de: string;
  };
  CONTACT: {
    TITLE: string;
  };
};
