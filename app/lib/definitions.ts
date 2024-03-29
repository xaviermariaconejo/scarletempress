import { z } from 'zod';

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
