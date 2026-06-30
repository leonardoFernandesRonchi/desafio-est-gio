export default function Toast({
  message,
  type = "error",
}: {
  message: string;
  type?: "error" | "success";
}) {
  if (!message) return null;

  return (
    <div
      className={`p-3 mb-3 text-white rounded ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {message}
    </div>
  );
}
