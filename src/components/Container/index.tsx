import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        "flex",
        "items-center",
        "justify-center",
        "min-h-screen",
        "bg-linear-to-tl",
        "from-emerald-900",
        "via-black",
        "to-black",
        "text-white",
        className
      )}
    >
      <div className="max-w-5xl mx-auto px-8">{children}</div>
    </div>
  );
}
