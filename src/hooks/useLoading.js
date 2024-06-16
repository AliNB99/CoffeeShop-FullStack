import { useState } from "react";

function useLoading(initialValue = false) {
  const [isLoading, setIsLoading] = useState(initialValue);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return [isLoading, startLoading, stopLoading];
}

export default useLoading;
