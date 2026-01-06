"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TerminalProvider } from "@/contexts/TerminalContext";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
                <TerminalProvider>
                    <TooltipProvider>
                        {children}
                    </TooltipProvider>
                </TerminalProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
