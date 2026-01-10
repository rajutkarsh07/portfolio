"use client";
import { useEffect, useState } from 'react';

const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
];

export function EasterEgg() {
    const [keys, setKeys] = useState<string[]>([]);
    const [activated, setActivated] = useState(false);
    const [matrixChars, setMatrixChars] = useState<Array<{ id: number; x: number; char: string; delay: number }>>([]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setKeys((prevKeys) => {
                const newKeys = [...prevKeys, e.key].slice(-KONAMI_CODE.length);

                // Check if Konami code is complete
                if (newKeys.join(',') === KONAMI_CODE.join(',')) {
                    setActivated(true);

                    // Generate matrix rain characters
                    const chars = Array.from({ length: 50 }, (_, i) => ({
                        id: i,
                        x: Math.random() * 100,
                        char: String.fromCharCode(0x30A0 + Math.random() * 96), // Japanese katakana
                        delay: Math.random() * 2
                    }));
                    setMatrixChars(chars);

                    // Auto-hide after 10 seconds
                    setTimeout(() => {
                        setActivated(false);
                        setMatrixChars([]);
                        setKeys([]);
                    }, 10000);

                    return [];
                }

                return newKeys;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!activated) return null;

    return (
        <>
            {/* Matrix Rain Effect */}
            <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
                {matrixChars.map((item) => (
                    <div
                        key={item.id}
                        className="absolute text-green-500 font-mono text-2xl animate-matrix-fall opacity-70"
                        style={{
                            left: `${item.x}%`,
                            top: '-50px',
                            animationDelay: `${item.delay}s`,
                            textShadow: '0 0 10px rgba(0, 255, 0, 0.8)'
                        }}
                    >
                        {item.char}
                    </div>
                ))}
            </div>

            {/* Easter Egg Message */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[10000]">
                <div className="bg-black/90 border-2 border-green-500 rounded-lg p-8 max-w-md mx-4 animate-pulse-glow pointer-events-auto">
                    <div className="text-green-500 font-mono">
                        <h2 className="text-3xl font-bold mb-4 text-center glitch" data-text="🎮 KONAMI CODE ACTIVATED! 🎮">
                            🎮 KONAMI CODE ACTIVATED! 🎮
                        </h2>
                        <div className="space-y-2 text-sm">
                            <p className="typing-effect">{">"} Access granted...</p>
                            <p className="typing-effect" style={{ animationDelay: '0.5s' }}>{">"} You've discovered the secret!</p>
                            <p className="typing-effect" style={{ animationDelay: '1s' }}>{">"} Welcome, fellow developer 👨‍💻</p>
                            <p className="typing-effect text-center mt-4" style={{ animationDelay: '1.5s' }}>
                                ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️ B A
                            </p>
                        </div>
                        <div className="mt-6 text-center text-xs opacity-70">
                            <p>This message will self-destruct in 10 seconds...</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 255, 0, 0.8);
          }
        }

        @keyframes typing {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glitch {
          0% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }

        .animate-matrix-fall {
          animation: matrix-fall 3s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .typing-effect {
          animation: typing 0.3s ease-out forwards;
          opacity: 0;
        }

        .glitch {
          animation: glitch 1s linear infinite;
        }
      `}</style>
        </>
    );
}
