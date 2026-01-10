"use client";
import { useEffect, useRef, useState, useCallback } from 'react';

interface PacManGameProps {
    onClose: () => void;
}

export function PacManGame({ onClose }: PacManGameProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [highScore, setHighScore] = useState(0);
    const [gameState, setGameState] = useState<'ready' | 'playing' | 'paused' | 'gameover' | 'win'>('ready');
    const gameLoopRef = useRef<number>();
    const keysPressed = useRef<Set<string>>(new Set());
    const gameStarted = useRef(false);

    // Initialize game data
    const initialMaze = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 3, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 3, 1],
        [1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1],
        [1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    // Handle keyboard controls
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const key = e.key.toLowerCase();
        keysPressed.current.add(key);

        if (key === 'escape') {
            onClose();
            return;
        }

        if (key === ' ') {
            e.preventDefault();
            if (gameState === 'playing') {
                setGameState('paused');
            } else if (gameState === 'paused') {
                setGameState('playing');
            } else if (gameState === 'ready') {
                setGameState('playing');
            }
            return;
        }

        if (gameState === 'ready' && !gameStarted.current) {
            setGameState('playing');
            gameStarted.current = true;
        }
    }, [gameState, onClose]);

    const handleKeyUp = useCallback((e: KeyboardEvent) => {
        keysPressed.current.delete(e.key.toLowerCase());
    }, []);

    useEffect(() => {
        // Add keyboard event listeners
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Game constants
        const CELL_SIZE = 20;
        const COLS = 28;
        const ROWS = 31;
        canvas.width = COLS * CELL_SIZE;
        canvas.height = ROWS * CELL_SIZE;

        // Game state variables
        let maze = JSON.parse(JSON.stringify(initialMaze)); // Deep copy
        let currentScore = 0;
        let currentLives = 3;
        let gameRunning = true;
        let readyTimer = 90; // 1.5 seconds at 60fps
        let powerMode = false;
        let powerTimer = 0;
        let dotsEaten = 0;
        const totalDots = 244; // Counted from maze

        // Frame counter for movement speed control
        let frameCount = 0;
        const PACMAN_MOVE_INTERVAL = 8; // Pac-Man moves every 8 frames (slower)
        const GHOST_MOVE_INTERVAL = 12; // Ghosts move every 12 frames (even slower)

        // Pac-Man state
        let pacman = {
            x: 14,
            y: 23,
            direction: 0, // 0: right, 1: down, 2: left, 3: up
            nextDirection: 0,
            mouthOpen: 0,
            moving: false,
            speed: 0.8
        };

        // Ghosts with simplified AI
        const ghosts = [
            { x: 14, y: 11, color: '#FF0000', name: 'Blinky', direction: 2, speed: 0.1, mode: 'chase' },
            { x: 12, y: 14, color: '#FFB8FF', name: 'Pinky', direction: 2, speed: 0.1, mode: 'chase' },
            { x: 14, y: 14, color: '#00FFFF', name: 'Inky', direction: 2, speed: 0.1, mode: 'chase' },
            { x: 16, y: 14, color: '#FFB852', name: 'Clyde', direction: 2, speed: 0.1, mode: 'chase' }
        ];

        // Directions
        const directions = [
            { x: 1, y: 0 },   // right
            { x: 0, y: 1 },   // down
            { x: -1, y: 0 },  // left
            { x: 0, y: -1 },  // up
        ];

        // Helper functions
        const isValidMove = (x: number, y: number) => {
            if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return false;
            return maze[y][x] !== 1;
        };

        const drawMaze = () => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let y = 0; y < ROWS; y++) {
                for (let x = 0; x < COLS; x++) {
                    const cell = maze[y][x];
                    if (cell === 1) {
                        // Wall
                        ctx.fillStyle = '#0000AA';
                        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                        ctx.fillStyle = '#2121DE';
                        ctx.fillRect(x * CELL_SIZE + 2, y * CELL_SIZE + 2, CELL_SIZE - 4, CELL_SIZE - 4);
                    } else if (cell === 2) {
                        // Dot
                        ctx.fillStyle = '#FFF';
                        ctx.beginPath();
                        ctx.arc(
                            x * CELL_SIZE + CELL_SIZE / 2,
                            y * CELL_SIZE + CELL_SIZE / 2,
                            3,
                            0,
                            Math.PI * 2
                        );
                        ctx.fill();
                    } else if (cell === 3) {
                        // Power pellet
                        ctx.fillStyle = '#FFF';
                        ctx.beginPath();
                        ctx.arc(
                            x * CELL_SIZE + CELL_SIZE / 2,
                            y * CELL_SIZE + CELL_SIZE / 2,
                            6,
                            0,
                            Math.PI * 2
                        );
                        ctx.fill();
                    }
                }
            }
        };

        const drawPacMan = () => {
            const centerX = pacman.x * CELL_SIZE + CELL_SIZE / 2;
            const centerY = pacman.y * CELL_SIZE + CELL_SIZE / 2;
            const radius = CELL_SIZE / 2 - 2;

            // Animate mouth
            pacman.mouthOpen += 0.15;
            const mouthAngle = Math.PI / 6 * Math.sin(pacman.mouthOpen) + Math.PI / 6;

            ctx.fillStyle = '#FF0';
            ctx.beginPath();

            const startAngle = pacman.direction * Math.PI / 2 + mouthAngle;
            const endAngle = pacman.direction * Math.PI / 2 + Math.PI * 2 - mouthAngle;

            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(centerX, centerY);
            ctx.fill();

            // Draw eye
            ctx.fillStyle = '#000';
            ctx.beginPath();
            const eyeX = centerX + Math.cos(pacman.direction * Math.PI / 2) * radius / 3;
            const eyeY = centerY + Math.sin(pacman.direction * Math.PI / 2) * radius / 3;
            ctx.arc(eyeX, eyeY, radius / 6, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawGhosts = () => {
            ghosts.forEach(ghost => {
                const centerX = ghost.x * CELL_SIZE + CELL_SIZE / 2;
                const centerY = ghost.y * CELL_SIZE + CELL_SIZE / 2;
                const radius = CELL_SIZE / 2 - 2;

                // Ghost color
                if (powerMode) {
                    // Flash when power is about to end
                    if (powerTimer < 60 && Math.floor(powerTimer / 10) % 2 === 0) {
                        ctx.fillStyle = '#FFF';
                    } else {
                        ctx.fillStyle = '#0000FF';
                    }
                } else {
                    ctx.fillStyle = ghost.color;
                }

                // Ghost body
                ctx.beginPath();
                ctx.arc(centerX, centerY - radius * 0.3, radius, Math.PI, 0, false);
                ctx.lineTo(centerX + radius, centerY + radius * 0.7);

                // Wavy bottom
                const waveCount = 3;
                const waveWidth = (CELL_SIZE * 2) / waveCount;
                for (let i = 1; i <= waveCount; i++) {
                    const x = centerX + radius - (i * waveWidth);
                    const y = centerY + (i % 2 === 0 ? radius * 0.5 : radius * 0.7);
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(centerX - radius, centerY + radius * 0.7);
                ctx.closePath();
                ctx.fill();

                // Eyes (not when power mode or flashing)
                if (!powerMode || (powerTimer < 60 && Math.floor(powerTimer / 10) % 2 === 0)) {
                    ctx.fillStyle = '#FFF';
                    ctx.beginPath();
                    ctx.arc(centerX - radius / 3, centerY - radius / 4, radius / 4, 0, Math.PI * 2);
                    ctx.arc(centerX + radius / 3, centerY - radius / 4, radius / 4, 0, Math.PI * 2);
                    ctx.fill();

                    // Pupils
                    ctx.fillStyle = '#0000AA';
                    ctx.beginPath();

                    let pupilDirX = directions[ghost.direction].x * radius / 6;
                    let pupilDirY = directions[ghost.direction].y * radius / 6;

                    if (powerMode) {
                        pupilDirY = -radius / 6; // Look scared
                    }

                    ctx.arc(centerX - radius / 3 + pupilDirX, centerY - radius / 4 + pupilDirY, radius / 8, 0, Math.PI * 2);
                    ctx.arc(centerX + radius / 3 + pupilDirX, centerY - radius / 4 + pupilDirY, radius / 8, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
        };


        const movePacMan = () => {
            // Handle input
            if (keysPressed.current.has('arrowright') || keysPressed.current.has('d')) {
                pacman.nextDirection = 0;
            } else if (keysPressed.current.has('arrowdown') || keysPressed.current.has('s')) {
                pacman.nextDirection = 1;
            } else if (keysPressed.current.has('arrowleft') || keysPressed.current.has('a')) {
                pacman.nextDirection = 2;
            } else if (keysPressed.current.has('arrowup') || keysPressed.current.has('w')) {
                pacman.nextDirection = 3;
            }

            // Try next direction first
            const nextDir = directions[pacman.nextDirection];
            const nextX = pacman.x + nextDir.x;
            const nextY = pacman.y + nextDir.y;

            if (isValidMove(nextX, nextY)) {
                pacman.direction = pacman.nextDirection;
            }

            // Move in current direction
            const dir = directions[pacman.direction];
            const newX = pacman.x + dir.x;
            const newY = pacman.y + dir.y;

            if (isValidMove(newX, newY)) {
                pacman.x = newX;
                pacman.y = newY;
                pacman.moving = true;

                // Tunnel wrap-around
                if (pacman.x < 0) pacman.x = COLS - 1;
                if (pacman.x >= COLS) pacman.x = 0;

                // Eat dots
                if (maze[pacman.y][pacman.x] === 2) {
                    maze[pacman.y][pacman.x] = 0;
                    currentScore += 10;
                    setScore(currentScore);
                    dotsEaten++;
                } else if (maze[pacman.y][pacman.x] === 3) {
                    maze[pacman.y][pacman.x] = 0;
                    currentScore += 50;
                    setScore(currentScore);
                    powerMode = true;
                    powerTimer = 300; // 5 seconds at 60fps
                    dotsEaten++;
                }
            } else {
                pacman.moving = false;
            }

            // Check win condition
            if (dotsEaten >= totalDots) {
                setGameState('win');
                if (currentScore > highScore) {
                    setHighScore(currentScore);
                }
            }
        };

        const moveGhosts = () => {
            ghosts.forEach(ghost => {
                // Simple ghost AI
                const validDirections = [];
                for (let dir = 0; dir < 4; dir++) {
                    const newX = ghost.x + directions[dir].x;
                    const newY = ghost.y + directions[dir].y;
                    if (isValidMove(newX, newY) && dir !== (ghost.direction + 2) % 4) {
                        validDirections.push(dir);
                    }
                }

                if (validDirections.length > 0) {
                    // Different behavior based on mode
                    let chosenDir = ghost.direction;

                    if (powerMode) {
                        // In power mode, ghosts try to run away
                        if (Math.random() < 0.3) {
                            chosenDir = validDirections[Math.floor(Math.random() * validDirections.length)];
                        }
                    } else {
                        // Normal mode: simple chase
                        if (Math.random() < 0.2) {
                            // Find direction that gets closer to Pac-Man
                            let bestDir = ghost.direction;
                            let minDistance = Infinity;

                            validDirections.forEach(dir => {
                                const newX = ghost.x + directions[dir].x;
                                const newY = ghost.y + directions[dir].y;
                                const distance = Math.sqrt(
                                    Math.pow(newX - pacman.x, 2) +
                                    Math.pow(newY - pacman.y, 2)
                                );

                                if (distance < minDistance) {
                                    minDistance = distance;
                                    bestDir = dir;
                                }
                            });

                            chosenDir = bestDir;
                        }
                    }

                    ghost.direction = chosenDir;
                }

                // Move ghost
                const dir = directions[ghost.direction];
                const newX = ghost.x + dir.x;
                const newY = ghost.y + dir.y;

                if (isValidMove(newX, newY)) {
                    ghost.x = newX;
                    ghost.y = newY;

                    // Tunnel wrap-around for ghosts too
                    if (ghost.x < 0) ghost.x = COLS - 1;
                    if (ghost.x >= COLS) ghost.x = 0;
                }
            });
        };

        const checkCollisions = () => {
            ghosts.forEach(ghost => {
                if (ghost.x === pacman.x && ghost.y === pacman.y) {
                    if (powerMode) {
                        // Eat ghost
                        currentScore += 200;
                        setScore(currentScore);
                        // Reset ghost
                        ghost.x = 14;
                        ghost.y = 14;
                    } else {
                        // Lose life
                        currentLives--;
                        setLives(currentLives);

                        if (currentLives <= 0) {
                            // Game over
                            setGameState('gameover');
                            if (currentScore > highScore) {
                                setHighScore(currentScore);
                            }
                        } else {
                            // Reset positions
                            resetPositions();
                        }
                    }
                }
            });
        };

        const resetPositions = () => {
            pacman.x = 14;
            pacman.y = 23;
            pacman.direction = 0;
            pacman.nextDirection = 0;
            pacman.moving = false;

            ghosts[0].x = 14; ghosts[0].y = 11;
            ghosts[1].x = 12; ghosts[1].y = 14;
            ghosts[2].x = 14; ghosts[2].y = 14;
            ghosts[3].x = 16; ghosts[3].y = 14;

            readyTimer = 30;
            setGameState('ready');
        };

        const updatePowerMode = () => {
            if (powerMode) {
                powerTimer--;
                if (powerTimer <= 0) {
                    powerMode = false;
                }
            }
        };

        // Game loop
        const gameLoop = () => {
            if (!gameRunning) return;

            // Increment frame counter
            frameCount++;

            // Update game state based on current game state
            if (gameState === 'ready') {
                readyTimer--;
                if (readyTimer <= 0) {
                    setGameState('playing');
                }
            } else if (gameState === 'playing') {
                // Move Pac-Man every PACMAN_MOVE_INTERVAL frames
                if (frameCount % PACMAN_MOVE_INTERVAL === 0) {
                    movePacMan();
                }

                // Move ghosts every GHOST_MOVE_INTERVAL frames
                if (frameCount % GHOST_MOVE_INTERVAL === 0) {
                    moveGhosts();
                }

                checkCollisions();
                updatePowerMode();
            }
            // For paused, gameover, and win states, just draw

            // Draw everything
            drawMaze();
            drawGhosts();
            drawPacMan();

            gameLoopRef.current = requestAnimationFrame(gameLoop);
        };

        // Start the game immediately
        gameRunning = true;
        gameLoopRef.current = requestAnimationFrame(gameLoop);

        return () => {
            gameRunning = false;
            if (gameLoopRef.current) {
                cancelAnimationFrame(gameLoopRef.current);
            }
        };
    }, [gameState, highScore]);

    // Start game automatically after a short delay
    useEffect(() => {
        const timer = setTimeout(() => {
            if (gameState === 'ready' && !gameStarted.current) {
                setGameState('playing');
                gameStarted.current = true;
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [gameState]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-8">
            <div className="flex flex-col items-center gap-4 max-w-4xl">
                {/* Header with Title */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-3 tracking-wider">
                        🎮 UTKARSH PAC-MAN 🎮
                    </h1>
                </div>

                {/* Score Bar */}
                <div className="w-full bg-blue-900/50 rounded-lg px-6 py-3 flex justify-between items-center text-white">
                    <div className="flex flex-col items-start">
                        <div className="text-yellow-400 font-bold">SCORE</div>
                        <div className="text-2xl font-mono">{score}</div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-green-400 font-bold">HIGH SCORE</div>
                        <div className="text-2xl font-mono">{highScore}</div>
                    </div>

                    <div className="flex flex-col items-end">
                        <div className="text-red-400 font-bold">LIVES</div>
                        <div className="text-2xl">{'❤️ '.repeat(lives)}</div>
                    </div>
                </div>

                {/* Game Status */}
                <div className="w-full text-center py-2">
                    {gameState === 'ready' && (
                        <div className="text-yellow-400 text-2xl font-bold animate-pulse">
                            🎯 GET READY! 🎯
                        </div>
                    )}
                    {gameState === 'playing' && (
                        <div className="text-green-400 text-xl font-bold">
                            ▶ PLAYING
                        </div>
                    )}
                    {gameState === 'paused' && (
                        <div className="text-yellow-400 text-2xl font-bold animate-pulse">
                            ⏸ PAUSED - PRESS SPACE TO CONTINUE
                        </div>
                    )}
                    {gameState === 'gameover' && (
                        <div className="text-red-500 text-3xl font-bold animate-pulse">
                            💀 GAME OVER 💀
                        </div>
                    )}
                    {gameState === 'win' && (
                        <div className="text-green-400 text-3xl font-bold animate-pulse">
                            🏆 YOU WIN! 🏆
                        </div>
                    )}
                </div>

                {/* Canvas - Pure Game Area */}
                <canvas
                    ref={canvasRef}
                    className="border-4 border-blue-600 rounded-lg shadow-2xl bg-black"
                    style={{ width: '560px', height: '620px' }}
                />

                {/* Controls and Info */}
                <div className="w-full grid grid-cols-3 gap-4 text-white text-sm bg-gray-900/50 rounded-lg p-4">
                    <div>
                        <div className="text-yellow-400 font-bold mb-2">🎮 CONTROLS</div>
                        <div className="space-y-1 text-xs">
                            <div>↑ W - Move Up</div>
                            <div>↓ S - Move Down</div>
                            <div>← A - Move Left</div>
                            <div>→ D - Move Right</div>
                            <div>SPACE - Pause</div>
                        </div>
                    </div>

                    <div>
                        <div className="text-yellow-400 font-bold mb-2">👻 GHOSTS</div>
                        <div className="space-y-1 text-xs">
                            <div className="text-red-400">🔴 Blinky - Red</div>
                            <div className="text-pink-300">🟣 Pinky - Pink</div>
                            <div className="text-cyan-300">🔵 Inky - Cyan</div>
                            <div className="text-orange-400">🟠 Clyde - Orange</div>
                        </div>
                    </div>

                    <div>
                        <div className="text-yellow-400 font-bold mb-2">📊 SCORING</div>
                        <div className="space-y-1 text-xs">
                            <div>• Dot: 10 points</div>
                            <div>• Power Pellet: 50 points</div>
                            <div>• Ghost: 200 points</div>
                            <div className="mt-2 text-gray-400">
                                Eat power pellets to turn ghosts blue!
                            </div>
                        </div>
                    </div>
                </div>

                {/* Exit Button */}
                <button
                    onClick={onClose}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg"
                >
                    EXIT GAME (ESC)
                </button>
            </div>
        </div>
    );
}