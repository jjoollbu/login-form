import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "min-h-screen",
        "bg-linear-to-tl",
        "from-emerald-900",
        "via-black",
        "to-black",
        "text-white",
        "p-8"
      )}
    >
      <div className="max-w-5xl mx-auto px-8">{children}</div>
    </div>
  );
}
