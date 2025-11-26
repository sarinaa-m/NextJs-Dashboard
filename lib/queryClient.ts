import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

export function createQueryClient(): QueryClient {
    const config: QueryClientConfig = {
        defaultOptions: {
            queries: {
                retry: Number(
                    process.env.VITE_REACT_QUERY_RETRY_NUMBER
                ) ?? 3,
                gcTime: Number(
                    process.env.VITE_REACT_QUERY_GC_TIME
                ) ?? 1000 * 60 * 60 * 24,
                staleTime: Number(
                    process.env.VITE_REACT_QUERY_STALE_TIME
                ) ?? 1000 * 60 * 5,
                retryDelay: (attempt) => attempt * 1000,
            },
        },
    };

    return new QueryClient(config);
}

