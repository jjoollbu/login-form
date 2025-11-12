type FeedbackProps = {
  message?: string;
  type: "error" | "success";
};

export function FormFeedback({ message, type }: FeedbackProps) {
  if (!message) return null;

  const styles =
    type === "error"
      ? "bg-red-100 border-red-400 text-red-700"
      : "bg-emerald-100 border-emerald-600 text-emerald-800";

  return (
    <div className={`border px-4 py-3 rounded-md ${styles}`} role="alert">
      <span className="block sm:inline">{message}</span>
    </div>
  );
}
