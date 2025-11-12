import clsx from "clsx";
import { FieldError, Path, UseFormRegister } from "react-hook-form";

type FormFieldProps<T extends Record<string, unknown>> = {
  id: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: FieldError;
  register: UseFormRegister<T>;
};

export function FormField<T extends Record<string, unknown>>({
  id,
  label,
  type = "text",
  placeholder,
  disabled,
  error,
  register,
}: FormFieldProps<T>) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id)}
        className={clsx(
          "w-full",
          "px-3",
          "py-2",
          "bg-gray-700",
          "border",
          "border-gray-600",
          "rounded-md",
          "text-white",
          "placeholder-gray-400",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-emerald-500",
          "focus:border-emerald-500"
        )}
      />

      {error && <p className="text-sm text-red-400">{error.message}</p>}
    </div>
  );
}
