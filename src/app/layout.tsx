import type { Metadata } from "next";
import "./globals.css";
import { Container } from "../components/Container";

export const metadata: Metadata = {
  title: {
    default: "Login Form",
    template: "%s | Login Form",
  },
  description: "Login Form Project using Next.js 13, React Hook Form and Zod",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
