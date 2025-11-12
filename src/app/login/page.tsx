"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { loginAction } from "@/src/lib/actions";
import { LoginSchema } from "@/src/lib/schemas";
import { useAuthStore } from "@/src/lib/store";

import { Heading } from "@/src/components/Heading";
import { LoginContainer } from "@/src/components/LoginContainer";
import { Form } from "@/src/components/Form";
import { FormFeedback } from "@/src/components/FormFeedback";
import { FormField } from "@/src/components/FormField";
import { SubmitButton } from "@/src/components/SubmitButton";
import { Button } from "@/src/components/Button";

export default function LoginPage() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const authLogin = useAuthStore((state) => state.login);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);

      loginAction(formData).then((res) => {
        if (res.error) setError(res.error);
        if (res.success) {
          setSuccess(res.success);
          authLogin(
            { id: "1", name: "Usuário Logado", email: values.email },
            "mock-jwt-token-123"
          );
        }
      });
    });
  };

  return (
    <LoginContainer>
      <Heading>Acessar Plataforma</Heading>

      <Form onSubmit={form.handleSubmit(onSubmit)}>
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

        <FormFeedback type="error" message={error} />
        <FormFeedback type="success" message={success} />

        <SubmitButton isPending={isPending} label="Entrar" />

        <div className="flex flex-col items-center">
          <Button
            href="/register"
            className="text-sm text-center text-gray-400 hover:text-emerald-400 transition-color"
          >
            Não possui uma conta? Cadastre-se
          </Button>

          <Button
            href="/"
            className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
          >
            Voltar para Home
          </Button>
        </div>
      </Form>
    </LoginContainer>
  );
}
