import { useState } from "react";

function useLoading(initialValue) {
  const [isLoading, setIsLoading] = useState(initialValue);
  const startLoading = (item) =>
    setIsLoading((values) => ({ ...values, [item]: true }));
  const stopLoading = (item) =>
    setIsLoading((values) => ({ ...values, [item]: false }));

  return { isLoading, startLoading, stopLoading };
}

export default useLoading;
