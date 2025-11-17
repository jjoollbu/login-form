"use server";

import { cookies } from "next/headers";
import { LoginSchema, CadastroSchema } from "./schemas";
import { mockDB } from "@/src/services/mock-db";

export async function loginAction(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = LoginSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Verifique seu e-mail e senha." };
  }

  const { email, password } = validatedFields.data;

  const user = await mockDB.getUserByEmail(email);

  if (!user || user.password !== password) {
    return { error: "E-mail ou senha incorretos." };
  }

  const cookieStore = await cookies();

  cookieStore.set("session", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { success: "Login realizado com sucesso!" };
}

export async function cadastroAction(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = CadastroSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Verifique os dados inseridos." };
  }

  const { email, password, name } = validatedFields.data;

  const existingUser = await mockDB.getUserByEmail(email);
  if (existingUser) {
    return { error: "Este e-mail já está cadastrado." };
  }

  await mockDB.createUser({
    id: crypto.randomUUID(),
    name: name,
    email: email,
    password: password,
  });

  return { success: "Cadastro realizado com sucesso! Faça login agora." };
}