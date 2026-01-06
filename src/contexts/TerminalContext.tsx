"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface TerminalContextType {
    isTerminalMode: boolean;
    toggleTerminalMode: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(
    undefined
);

export function TerminalProvider({ children }: { children: ReactNode }) {
    const [isTerminalMode, setIsTerminalMode] = useState(false);

    const toggleTerminalMode = () => {
        setIsTerminalMode((prev) => !prev);
    };

    return (
        <TerminalContext.Provider value={{ isTerminalMode, toggleTerminalMode }}>
            {children}
        </TerminalContext.Provider>
    );
}

export function useTerminal() {
    const context = useContext(TerminalContext);
    if (context === undefined) {
        throw new Error("useTerminal must be used within a TerminalProvider");
    }
    return context;
}
