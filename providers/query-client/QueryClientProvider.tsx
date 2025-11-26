
"use client";

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "@tanstack/react-query";
import { createQueryClient } from "@/lib/queryClient";

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    return createQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = createQueryClient();
    return browserQueryClient;
  }
}

export const QueryClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
    </QueryClientProviderBase>
  );
};