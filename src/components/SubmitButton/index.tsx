type SubmitButtonProps = {
  isPending: boolean;
  label: string;
};

export function SubmitButton({ isPending, label }: SubmitButtonProps) {
  return (
    <button type="submit" disabled={isPending} className="wipe-btn">
      <span>{isPending ? "Carregando..." : label}</span>
    </button>
  );
}
