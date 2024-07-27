"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultOptions } from "src/configs/reactQuery";

const queryClient = new QueryClient({ defaultOptions });

function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
