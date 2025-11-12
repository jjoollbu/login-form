import Link from "next/link";

type ButtonProps = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

export function Button({ href, className, children }: ButtonProps) {
  return (
    <Link href={href} className={`${className}`}>
      {children}
    </Link>
  );
}
