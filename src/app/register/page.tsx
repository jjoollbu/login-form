"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { cadastroAction } from "@/src/lib/actions";
import { CadastroSchema } from "@/src/lib/schemas";
import { useAuthStore } from "@/src/lib/store";
import { Heading } from "@/src/components/Heading";
import { LoginContainer } from "@/src/components/LoginContainer";
import { Form } from "@/src/components/Form";
import { FormField } from "@/src/components/FormField";
import { FormFeedback } from "@/src/components/FormFeedback";
import { SubmitButton } from "@/src/components/SubmitButton";

export default function RegisterPage() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const authLogin = useAuthStore((state) => state.login);

  const form = useForm<z.infer<typeof CadastroSchema>>({
    resolver: zodResolver(CadastroSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CadastroSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("confirmPassword", values.confirmPassword);

      cadastroAction(formData).then((res) => {
        if (res.error) setError(res.error);
        if (res.success) {
          setSuccess(res.success);
          authLogin(
            { id: "2", name: values.name, email: values.email },
            "mock-jwt-token-456"
          );
        }
      });
    });
  };

  return (
    <LoginContainer>
      <Heading>Criar Conta</Heading>

      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          id="name"
          label="Nome completo"
          placeholder="Seu nome"
          disabled={isPending}
          error={form.formState.errors.name}
          register={form.register}
        />

        <FormField
          id="email"
          label="E-mail"
          type="email"
          placeholder="seuemail@exemplo.com"
          disabled={isPending}
          error={form.formState.errors.email}
          register={form.register}
        />

        <FormField
          id="password"
          label="Senha"
          type="password"
          placeholder="********"
          disabled={isPending}
          error={form.formState.errors.password}
          register={form.register}
        />

        <FormField
          id="confirmPassword"
          label="Confirmar senha"
          type="password"
          placeholder="********"
          disabled={isPending}
          error={form.formState.errors.confirmPassword}
          register={form.register}
        />

        <FormFeedback type="error" message={error} />
        <FormFeedback type="success" message={success} />

        <SubmitButton isPending={isPending} label="Cadastrar" />

        <div className="text-center">
          <Link
            href="/login"
            className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
          >
            Já possui conta? Faça login
          </Link>
        </div>
      </Form>
    </LoginContainer>
  );
}
