"use client";

import { QueryClientProvider } from "@/providers/query-client/QueryClientProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider>
            {children}
        </QueryClientProvider>
    );
}
