import { z } from 'zod';

export const LoginSchema = z.object({

  email: z.string()
    .min(1, { message: "O e-mail é obrigatório" })
    .email({ message: "Por favor, insira um e-mail válido" }),

  password: z.string()
    .min(1, { message: "A senha é obrigatória" })
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
});

export const CadastroSchema = z.object({

  name: z.string()
    .min(1, { message: "O nome é obrigatório" }),

  email: z.string()
    .min(1, { message: "O e-mail é obrigatório" })
    .email({ message: "Formato de e-mail inválido" }),

  password: z.string()
    .min(1, { message: "A senha é obrigatória" })
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),

  confirmPassword: z.string()
    .min(1, { message: "A confirmação de senha é obrigatória" })

}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"]
});