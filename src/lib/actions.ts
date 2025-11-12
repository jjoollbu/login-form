"use server";

import { LoginSchema, CadastroSchema } from "./schemas";

export async function loginAction(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = LoginSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    console.error(
      "Validation Error:",
      validatedFields.error.flatten().fieldErrors
    );
    return { error: "Campos inválidos. Verifique seu e-mail e senha." };
  }

  console.log("Login Succeeded with:", validatedFields.data);

  return { success: "Login realizado com sucesso!" };
}

export async function cadastroAction(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = CadastroSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    console.error(
      "Validation Error:",
      validatedFields.error.flatten().fieldErrors
    );
    return { error: "Campos inválidos. Verifique os dados inseridos." };
  }

  console.log("Cadastro realizado com:", validatedFields.data);

  return { success: "Cadastro realizado com sucesso!" };
}
