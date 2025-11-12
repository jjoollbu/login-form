"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from 'next/link';
import { LoginSchema } from "@/lib/schemas";
import { useAuthStore } from "@/lib/store";
import { loginAction } from "@/lib/actions";

interface FeedbackProps {
  message?: string;
  type: "error" | "success";
}

const FormFeedback = ({ message, type }: FeedbackProps) => {
  if (!message) return null;

  const styles = type === "error" 
    ? "bg-red-100 border-red-400 text-red-700" 
    : "bg-emerald-100 border-emerald-600 text-emerald-800";

  return (
    <div className={`border px-4 py-3 rounded-md ${styles}`} role="alert">
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

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

      loginAction(formData)
        .then((res) => {
          if (res.error) {
            setError(res.error);
          }
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


    <main className="flex items-center justify-center min-h-screen bg-gradient-to-tl from-emerald-900 via-black to-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">
          Acessar Plataforma
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-300"
            >
              E-mail
            </label>
            <input 
              {...form.register("email")} 
              id="email"
              type="email" 
              disabled={isPending}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="seuemail@exemplo.com"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-400">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-300"
            >
              Senha
            </label>
            <input 
              {...form.register("password")} 
              id="password"
              type="password" 
              disabled={isPending} 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="********"
            />
            {form.formState.errors.password && (
              <p className="text-sm text-red-400">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <FormFeedback type="error" message={error} />
          <FormFeedback type="success" message={success} />

          <button 
            type="submit" 
            disabled={isPending} 
            className="wipe-btn"
          >
            <span>
              {isPending ? "Entrando..." : "Entrar"}
            </span>
          </button>

          <div className="text-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
              Voltar para Home
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}