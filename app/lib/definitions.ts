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
  HOME: {
    ABOUT_ME: {
      TITLE: string;
      TEXT_1: string;
      TEXT_2: string;
    };
  };
  SERVICES: {
    WELCOME: {
      TITLE: string;
      SUBTITLE: string;
    };
    SERVICES: {
      TITLE: string;
      SUBTITLE: string;
      1: {
        TITLE: string;
        DESCRIPTION: string;
      };
      2: {
        TITLE: string;
        DESCRIPTION: string;
      };
      3: {
        TITLE: string;
        DESCRIPTION: string;
      };
      4: {
        TITLE: string;
        DESCRIPTION: string;
      };
      5: {
        TITLE: string;
        DESCRIPTION: string;
      };
      6: {
        TITLE: string;
        DESCRIPTION: string;
      };
    };
    EXAMPLES: {
      TITLE: string;
    };
  };
  ABOUT_ME: {
    TITLE: string;
    TEXT_1: string;
    TEXT_2: string;
    TEXT_3: string;
    TEXT_4: string;
  };
  CONTACT: {
    TITLE: string;
  };
};
