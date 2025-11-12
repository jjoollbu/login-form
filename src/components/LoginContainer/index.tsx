import clsx from "clsx";

type LoginContainerProps = {
  children: React.ReactNode;
};

export function LoginContainer({ children }: LoginContainerProps) {
  return (
    <div
      className={clsx(
        "w-full",
        "max-w-md",
        "p-8",
        "bg-gray-900/50",
        "backdrop-blur-md",
        "border",
        "border-gray-700",
        "rounded-lg",
        "shadow-lg"
      )}
    >
      {children}
    </div>
  );
}
