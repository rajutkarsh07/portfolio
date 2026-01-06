"use client";
import { useTerminal } from "@/contexts/TerminalContext";
import { Terminal, Layout } from "lucide-react";

export function TerminalToggle() {
    const { isTerminalMode, toggleTerminalMode } = useTerminal();

    return (
        <button
            onClick={toggleTerminalMode}
            className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-200 group"
            aria-label={isTerminalMode ? "Switch to GUI mode" : "Switch to CLI mode"}
            title={isTerminalMode ? "Switch to GUI mode" : "Switch to CLI mode"}
        >
            {/* Toggle Track */}
            <div className="relative w-12 h-6 bg-muted rounded-full transition-colors duration-200">
                {/* Toggle Thumb */}
                <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-primary rounded-full transition-transform duration-200 flex items-center justify-center ${isTerminalMode ? "translate-x-6" : "translate-x-0"
                        }`}
                >
                    {isTerminalMode ? (
                        <Terminal className="w-3 h-3 text-primary-foreground" />
                    ) : (
                        <Layout className="w-3 h-3 text-primary-foreground" />
                    )}
                </div>
            </div>

            {/* Label */}
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {isTerminalMode ? "CLI" : "GUI"}
            </span>
        </button>
    );
}
