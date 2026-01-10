"use client";
import { useTerminal } from "@/contexts/TerminalContext";
import { Terminal } from "@/components/Terminal";
import { Navbar } from "@/components/Navbar";
import { EasterEgg } from "@/components/EasterEgg";

export function LayoutContent({ children }: { children: React.ReactNode }) {
    const { isTerminalMode } = useTerminal();

    if (isTerminalMode) {
        return <Terminal />;
    }

    return (
        <>
            <Navbar />
            {children}
            <EasterEgg />
        </>
    );
}
