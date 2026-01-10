"use client";
import { useState, useEffect, useRef } from "react";
import portfolioData from "@/data/portfolio.json";
import { useTerminal } from "@/contexts/TerminalContext";
import { PacManGame } from "@/components/PacManGame";

interface CommandOutput {
    command: string;
    output: string | JSX.Element;
    timestamp: Date;
}

interface FileSystemItem {
    type: "file" | "directory";
    content?: string;
    children?: Record<string, FileSystemItem>;
}

interface FileSystem {
    [key: string]: FileSystemItem;
}

export function Terminal() {
    const [history, setHistory] = useState<CommandOutput[]>([]);
    const [currentInput, setCurrentInput] = useState("");
    const [currentPath, setCurrentPath] = useState("~");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showPacMan, setShowPacMan] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { toggleTerminalMode } = useTerminal();

    // File system structure based on portfolio.json
    const fileSystem: FileSystem = {
        "~": {
            type: "directory",
            children: {
                about: {
                    type: "directory",
                    children: {
                        "bio.txt": {
                            type: "file",
                            content: portfolioData.about.paragraphs.join("\n\n"),
                        },
                        "intro.txt": {
                            type: "file",
                            content: portfolioData.about.intro,
                        },
                        "fun-fact.txt": {
                            type: "file",
                            content: portfolioData.personal.funFact,
                        },
                    },
                },
                experience: {
                    type: "directory",
                    children: Object.fromEntries(
                        portfolioData.experiences.map((exp, idx) => [
                            `${idx + 1}-${exp.company.toLowerCase().replace(/\s+/g, "-")}.txt`,
                            {
                                type: "file" as const,
                                content: `Company: ${exp.company}\nRole: ${exp.role}\nDuration: ${exp.duration}\nLocation: ${exp.location}\nWebsite: ${exp.url}\n${exp.description.length > 0 ? `\nDescription:\n${exp.description.join("\n")}` : ""}`,
                            },
                        ])
                    ),
                },
                projects: {
                    type: "directory",
                    children: Object.fromEntries(
                        portfolioData.projects.major.map((proj, idx) => [
                            `${idx + 1}-${proj.title.toLowerCase().replace(/\s+/g, "-")}.txt`,
                            {
                                type: "file" as const,
                                content: `Title: ${proj.title}\nDescription: ${proj.description}\n\nTech Stack: ${proj.tech.join(", ")}\n\nGitHub: ${proj.github}\nLive: ${proj.live}`,
                            },
                        ])
                    ),
                },
                skills: {
                    type: "directory",
                    children: {
                        "frontend.txt": {
                            type: "file",
                            content: portfolioData.skills.categories.Frontend.map(
                                (s) => s.name
                            ).join("\n"),
                        },
                        "backend.txt": {
                            type: "file",
                            content: portfolioData.skills.categories.Backend.map(
                                (s) => s.name
                            ).join("\n"),
                        },
                        "tools.txt": {
                            type: "file",
                            content: portfolioData.skills.categories["Tools & Others"].map(
                                (s) => s.name
                            ).join("\n"),
                        },
                    },
                },
                contact: {
                    type: "directory",
                    children: {
                        "email.txt": {
                            type: "file",
                            content: `Primary: ${portfolioData.contact.email}\nSecondary: ${portfolioData.contact.emailSecondary}`,
                        },
                        "location.txt": {
                            type: "file",
                            content: portfolioData.contact.locationDescription,
                        },
                    },
                },
                education: {
                    type: "directory",
                    children: {
                        "degree.txt": {
                            type: "file",
                            content: `Institution: ${portfolioData.education.institution}\nDegree: ${portfolioData.education.degree}\nDuration: ${portfolioData.education.duration}\nLocation: ${portfolioData.education.location}\n\n${portfolioData.education.description}`,
                        },
                    },
                },
            },
        },
    };

    const commands = {
        help: () => {
            return (
                <div className="space-y-2">
                    <div className="text-primary font-semibold">Available Commands:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                            <span className="text-green-400">ls</span> - List directory contents
                        </div>
                        <div>
                            <span className="text-green-400">cd [dir]</span> - Change directory
                        </div>
                        <div>
                            <span className="text-green-400">cat [file]</span> - Display file contents
                        </div>
                        <div>
                            <span className="text-green-400">pwd</span> - Print working directory
                        </div>
                        <div>
                            <span className="text-green-400">clear</span> - Clear terminal
                        </div>
                        <div>
                            <span className="text-green-400">whoami</span> - Display user info
                        </div>
                        <div>
                            <span className="text-green-400">github</span> - Open GitHub profile
                        </div>
                        <div>
                            <span className="text-green-400">linkedin</span> - Open LinkedIn profile
                        </div>
                        <div>
                            <span className="text-green-400">codeforces</span> - Open Codeforces profile
                        </div>
                        <div>
                            <span className="text-green-400">leetcode</span> - Open LeetCode profile
                        </div>
                        <div>
                            <span className="text-green-400">twitter</span> - Open Twitter profile
                        </div>
                        <div>
                            <span className="text-green-400">instagram</span> - Open Instagram profile
                        </div>
                        <div>
                            <span className="text-green-400">chess</span> - Open Chess.com profile
                        </div>
                        <div>
                            <span className="text-green-400">resume</span> - Download resume
                        </div>
                        <div>
                            <span className="text-green-400">email</span> - Send me an email
                        </div>
                        <div>
                            <span className="text-green-400">quit</span> - Exit terminal and return to GUI
                        </div>
                        <div>
                            <span className="text-green-400">help</span> - Show this help message
                        </div>
                        <div>
                            <span className="text-green-400">pacman</span> - 🎮 Play Pac-Man game
                        </div>
                    </div>
                    <div className="mt-4 text-muted-foreground text-xs">
                        Tip: Use Tab for autocomplete, ↑/↓ for command history
                    </div>
                </div>
            );
        },

        ls: (args: string[]) => {
            const path = args[0] || currentPath;
            const dir = getDirectory(path);

            if (!dir || dir.type !== "directory") {
                return `ls: ${path}: No such directory`;
            }

            const items = Object.entries(dir.children || {}).map(([name, item]) => {
                const isDir = item.type === "directory";
                return (
                    <div key={name} className="inline-block mr-4">
                        <span className={isDir ? "text-blue-400" : "text-foreground"}>
                            {name}
                            {isDir ? "/" : ""}
                        </span>
                    </div>
                );
            });

            return <div className="flex flex-wrap gap-2">{items}</div>;
        },

        cd: (args: string[]) => {
            if (!args[0]) {
                setCurrentPath("~");
                return "";
            }

            const targetPath = resolvePath(args[0]);
            const dir = getDirectory(targetPath);

            if (!dir) {
                return `cd: ${args[0]}: No such directory`;
            }

            if (dir.type !== "directory") {
                return `cd: ${args[0]}: Not a directory`;
            }

            setCurrentPath(targetPath);
            return "";
        },

        cat: (args: string[]) => {
            if (!args[0]) {
                return "cat: missing file operand";
            }

            const filePath = resolvePath(args[0]);
            const file = getFile(filePath);

            if (!file) {
                return `cat: ${args[0]}: No such file`;
            }

            if (file.type !== "file") {
                return `cat: ${args[0]}: Is a directory`;
            }

            return <pre className="whitespace-pre-wrap">{file.content}</pre>;
        },

        pwd: () => currentPath,

        clear: () => {
            setHistory([]);
            return "";
        },

        quit: () => {
            toggleTerminalMode();
            return "";
        },

        whoami: () => {
            return (
                <div className="space-y-2">
                    <div className="text-xl font-bold text-primary">
                        {portfolioData.personal.name}
                    </div>
                    <div className="text-muted-foreground">
                        {portfolioData.personal.title}
                    </div>
                    <div className="mt-2">{portfolioData.about.shortBio}</div>
                    <div className="mt-2 text-sm">
                        <span className="text-green-400">Current:</span>{" "}
                        {portfolioData.personal.currentCompany}
                    </div>
                    <div className="text-sm">
                        <span className="text-green-400">Location:</span>{" "}
                        {portfolioData.contact.location}
                    </div>
                </div>
            );
        },

        github: () => {
            const github = portfolioData.socials.find((s) => s.name === "GitHub");
            if (github) {
                window.open(github.url, "_blank");
                return `Opening GitHub profile: ${github.url}`;
            }
            return "GitHub profile not found";
        },

        linkedin: () => {
            const linkedin = portfolioData.socials.find((s) => s.name === "LinkedIn");
            if (linkedin) {
                window.open(linkedin.url, "_blank");
                return `Opening LinkedIn profile: ${linkedin.url}`;
            }
            return "LinkedIn profile not found";
        },

        codeforces: () => {
            const cf = portfolioData.codingProfiles.find(
                (p) => p.name === "Codeforces"
            );
            if (cf) {
                window.open(cf.url, "_blank");
                return `Opening Codeforces profile: ${cf.url}`;
            }
            return "Codeforces profile not found";
        },

        leetcode: () => {
            const lc = portfolioData.codingProfiles.find(
                (p) => p.name === "LeetCode"
            );
            if (lc) {
                window.open(lc.url, "_blank");
                return `Opening LeetCode profile: ${lc.url}`;
            }
            return "LeetCode profile not found";
        },

        twitter: () => {
            const twitter = portfolioData.socials.find((s) => s.name === "Twitter");
            if (twitter) {
                window.open(twitter.url, "_blank");
                return `Opening Twitter profile: ${twitter.url}`;
            }
            return "Twitter profile not found";
        },

        instagram: () => {
            const instagram = portfolioData.socials.find(
                (s) => s.name === "Instagram"
            );
            if (instagram) {
                window.open(instagram.url, "_blank");
                return `Opening Instagram profile: ${instagram.url}`;
            }
            return "Instagram profile not found";
        },

        chess: () => {
            const chess = portfolioData.socials.find((s) => s.name === "Chess.com");
            if (chess) {
                window.open(chess.url, "_blank");
                return `Opening Chess.com profile: ${chess.url}`;
            }
            return "Chess.com profile not found";
        },

        email: () => {
            window.location.href = `mailto:${portfolioData.contact.email}`;
            return `Opening email client to: ${portfolioData.contact.email}`;
        },

        resume: () => {
            return "Resume download functionality - Add your resume link here";
        },

        pacman: () => {
            setShowPacMan(true);
            return (
                <div className="text-green-400">
                    🎮 Loading Pac-Man...
                    <div className="text-sm text-muted-foreground mt-1">
                        Get ready to play! Use arrow keys or WASD to move.
                    </div>
                </div>
            );
        },
    };

    const resolvePath = (path: string): string => {
        if (path === "~" || path === "/") return "~";
        if (path.startsWith("~")) return path;
        if (path === "..") {
            const parts = currentPath.split("/").filter(Boolean);
            parts.pop();
            return parts.length === 0 ? "~" : parts.join("/");
        }
        if (path === ".") return currentPath;
        if (currentPath === "~") return `~/${path}`;
        return `${currentPath}/${path}`;
    };

    const getDirectory = (path: string): FileSystemItem | null => {
        const parts = path.split("/").filter((p) => p && p !== "~");
        let current: FileSystemItem = fileSystem["~"];

        for (const part of parts) {
            if (!current.children || !current.children[part]) {
                return null;
            }
            current = current.children[part];
        }

        return current;
    };

    const getFile = (path: string): FileSystemItem | null => {
        const parts = path.split("/").filter((p) => p && p !== "~");
        const fileName = parts.pop();
        const dirPath = parts.length === 0 ? "~" : `~/${parts.join("/")}`;
        const dir = getDirectory(dirPath);

        if (!dir || !dir.children || !fileName) {
            return null;
        }

        return dir.children[fileName];
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        // Add to command history
        setCommandHistory((prev) => [...prev, trimmedCmd]);
        setHistoryIndex(-1);

        const [command, ...args] = trimmedCmd.split(" ");
        const commandFunc = commands[command as keyof typeof commands];

        let output: string | JSX.Element;
        if (commandFunc) {
            output = commandFunc(args);
        } else {
            output = `Command not found: ${command}. Type 'help' for available commands.`;
        }

        setHistory((prev) => [
            ...prev,
            {
                command: trimmedCmd,
                output,
                timestamp: new Date(),
            },
        ]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(currentInput);
            setCurrentInput("");
            setHistoryIndex(-1);
            setSuggestions([]);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length === 0) return;

            const newIndex = historyIndex === -1
                ? commandHistory.length - 1
                : Math.max(0, historyIndex - 1);

            setHistoryIndex(newIndex);
            setCurrentInput(commandHistory[newIndex]);
            setSuggestions([]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex === -1) return;

            const newIndex = historyIndex + 1;

            if (newIndex >= commandHistory.length) {
                setHistoryIndex(-1);
                setCurrentInput("");
            } else {
                setHistoryIndex(newIndex);
                setCurrentInput(commandHistory[newIndex]);
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            handleTabComplete();
        } else {
            // Clear suggestions when user types
            if (suggestions.length > 0 && e.key.length === 1) {
                setSuggestions([]);
            }
        }
    };

    const handleTabComplete = () => {
        const input = currentInput.trim();
        if (!input) return;

        const parts = input.split(" ");
        const isFirstWord = parts.length === 1;

        if (isFirstWord) {
            // Autocomplete command
            const availableCommands = Object.keys(commands);
            const matches = availableCommands.filter(cmd => cmd.startsWith(input));

            if (matches.length === 1) {
                setCurrentInput(matches[0] + " ");
                setSuggestions([]);
            } else if (matches.length > 1) {
                // Show available options
                setSuggestions(matches);
            }
        } else {
            // Autocomplete file/directory name
            const lastPart = parts[parts.length - 1];
            const command = parts[0];

            if (command === "cd" || command === "ls") {
                // Get current directory
                const dir = getDirectory(currentPath);
                if (!dir || !dir.children) return;

                const items = Object.keys(dir.children).filter(item =>
                    item.startsWith(lastPart)
                );

                if (items.length === 1) {
                    parts[parts.length - 1] = items[0];
                    setCurrentInput(parts.join(" ") + (dir.children[items[0]].type === "directory" ? "/" : " "));
                    setSuggestions([]);
                } else if (items.length > 1) {
                    // Show available options
                    setSuggestions(items);
                }
            } else if (command === "cat") {
                // Autocomplete file name
                const dir = getDirectory(currentPath);
                if (!dir || !dir.children) return;

                const files = Object.entries(dir.children)
                    .filter(([name, item]) => item.type === "file" && name.startsWith(lastPart))
                    .map(([name]) => name);

                if (files.length === 1) {
                    parts[parts.length - 1] = files[0];
                    setCurrentInput(parts.join(" ") + " ");
                    setSuggestions([]);
                } else if (files.length > 1) {
                    setSuggestions(files);
                }
            }
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        // Welcome message
        setHistory([
            {
                command: "",
                output: (
                    <div className="space-y-2">
                        <div className="text-primary text-lg font-bold">
                            {portfolioData.personal.name}
                        </div>
                        <div className="text-muted-foreground">
                            Type 'help' to see available commands
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Navigate through my portfolio using Unix-like commands
                        </div>
                    </div>
                ),
                timestamp: new Date(),
            },
        ]);
    }, []);

    return (
        <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                <div className="w-full max-w-4xl h-[600px] bg-[#1e1e1e] text-[#d4d4d4] font-mono flex flex-col rounded-lg shadow-2xl overflow-hidden">
                    {/* Terminal Header (Mac-like) */}
                    <div className="bg-[#323233] border-b border-[#1e1e1e] px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-2">
                            <button
                                onClick={toggleTerminalMode}
                                className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors"
                                aria-label="Close terminal"
                                title="Close terminal"
                            ></button>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="flex-1 text-center text-sm text-[#d4d4d4]/60">
                            {portfolioData.personal.firstName.toLowerCase()} — zsh — 100×30
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div
                        ref={terminalRef}
                        className="flex-1 overflow-y-auto p-4 space-y-2"
                        onClick={() => inputRef.current?.focus()}
                    >
                        {history.map((item, idx) => (
                            <div key={idx} className="space-y-1">
                                {item.command && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#4ec9b0]">
                                            {portfolioData.personal.firstName.toLowerCase()}@portfolio
                                        </span>
                                        <span className="text-[#d4d4d4]">:</span>
                                        <span className="text-[#569cd6]">{currentPath}</span>
                                        <span className="text-[#d4d4d4]">$</span>
                                        <span className="text-[#d4d4d4]">{item.command}</span>
                                    </div>
                                )}
                                {item.output && (
                                    <div className="pl-0 text-[#d4d4d4]/90">{item.output}</div>
                                )}
                            </div>
                        ))}

                        {/* Input Line */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-[#4ec9b0]">
                                    {portfolioData.personal.firstName.toLowerCase()}@portfolio
                                </span>
                                <span className="text-[#d4d4d4]">:</span>
                                <span className="text-[#569cd6]">{currentPath}</span>
                                <span className="text-[#d4d4d4]">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={currentInput}
                                    onChange={(e) => setCurrentInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent outline-none text-[#d4d4d4] caret-[#d4d4d4]"
                                    autoFocus
                                    spellCheck={false}
                                />
                            </div>

                            {/* Autocomplete Suggestions */}
                            {suggestions.length > 0 && (
                                <div className="text-blue-400 flex flex-wrap gap-3 pl-0">
                                    {suggestions.map((suggestion, idx) => (
                                        <span key={idx}>{suggestion}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {showPacMan && <PacManGame onClose={() => setShowPacMan(false)} />}
        </>
    );
}
