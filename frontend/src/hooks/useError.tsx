import { useState } from "react";

export function useError() {
  const [error, setError] = useState<string>("");

  const showError = (msg: string) => {
    setError(msg);

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return { error, showError, setError };
}
