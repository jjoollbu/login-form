"use server";

import { LoginSchema } from "./schemas";

export async function loginAction(formData: FormData) {
    
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = LoginSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    console.error("Validation Error:", validatedFields.error.flatten().fieldErrors);
    return { error: "Campos inválidos. Verifique seu e-mail e senha." };
  }

  console.log("Login Succeeded with:", validatedFields.data);

  return { success: "Login realizado com sucesso!" };
}