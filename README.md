# Projeto de Autenticação com Next.js 14, Zod e Server Actions

Este projeto é uma implementação completa de um fluxo de autenticação moderno (Login e Cadastro) usando Next.js 14+ com App Router, Server Actions, Zod para validação de schemas, React Hook Form para gerenciamento de formulários e Zustand para gerenciamento de estado global.

## 🚀 Sobre o Projeto

O objetivo deste repositório é demonstrar uma arquitetura robusta e escalável para autenticação de usuários, aproveitando os recursos mais recentes do Next.js, como as **Server Actions**, para mutações de dados seguras e eficientes diretamente do servidor, sem a necessidade de criar rotas de API tradicionais.

## ✨ Principais Funcionalidades

O projeto foi estruturado seguindo um roteiro de desenvolvimento claro, dividido nas seguintes etapas:

* **Configuração Inicial**: Setup do projeto com Next.js 14+, App Router e Tailwind CSS .
* **Validação de Schema**: Criação de schemas robustos para login e cadastro usando Zod .
* **Gerenciamento de Estado**: Implementação de um store global para autenticação com Zustand .
* **Formulário de Login**: Construção do formulário de login completo, integrando React Hook Form, Zod e Server Actions do Next.js .
* **Formulário de Cadastro**: Implementação do formulário de cadastro com validações avançadas e feedback visual .
* **Proteção de Rotas**: Criação de rotas protegidas (privadas) utilizando Middleware do Next.js para garantir que apenas usuários autenticados tenham acesso .
* **Otimização e Deploy**: Etapa final de otimizações e preparação para o deploy .

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

* **[Next.js 14+](https://nextjs.org/)**: (App Router) 
* **[Tailwind CSS](https://tailwindcss.com/)**: Para estilização .
* **[Zod](https://zod.dev/)**: Para declaração e validação de schemas .
* **[React Hook Form](https://react-hook-form.com/)**: Para gerenciamento de formulários .
* **[Zustand](https://zustand-demo.pmnd.rs/)**: Para gerenciamento de estado global .
* **[Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)**: Para mutações de dados no lado do servidor .

## 🏁 Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

* Node.js (v18 ou superior)
* npm, yarn ou pnpm

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd nome-do-repositorio
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Configure as Variáveis de Ambiente**
    Crie um arquivo `.env.local` na raiz do projeto, copiando o `.env.example` (se houver).
    ```bash
    cp .env.example .env.local
    ```
    *Obs: Adicione aqui as variáveis que seu projeto precisa, como `DATABASE_URL`, `JWT_SECRET`, etc.*

5.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

6.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🤝 Contribuidores

* [Seu Nome / Usuário do GitHub]
* [Nome / Usuário do GitHub do seu colega]

---