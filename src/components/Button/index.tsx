import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

export function Button({ href, className, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx("inline-block", "px-4", "py-2", "rounded-md", className)}
    >
      {children}
    </Link>
  );
}
