"use client";

import { QueryClientProvider } from "@/providers/query-client/QueryClientProvider";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange={false}>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
}
