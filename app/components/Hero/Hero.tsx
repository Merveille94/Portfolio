"use client"
// components/HeroSection.tsx
import { useEffect, useState, useRef, JSX } from 'react';
import { motion } from 'framer-motion';
import Footer from "@/app/components/Generals/Footer";
import Link from "next/link";

// Define interfaces for TypeScript
interface MousePosition {
    x: number;
    y: number;
}

interface Particle {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
    color: string;
    opacity: number;
}

interface ParticleBackgroundProps {
    mousePosition: MousePosition;
}

const HeroSection = (): JSX.Element => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement | null>(null);

    // Handle mouse movement for parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            if (sectionRef.current) {
                const { clientX, clientY } = e;
                const { width, height, left, top } = sectionRef.current.getBoundingClientRect();

                const x = (clientX - left) / width - 0.5;
                const y = (clientY - top) / height - 0.5;

                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full flex items-center overflow-hidden bg-gray-950"
        >
            {/* Dark background with subtle pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gray-200/20 z-10"></div>
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(/bg-h.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: `scale(1.1) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                        filter: 'brightness(0.2) contrast(1.2)'
                    }}
                />
            </div>

            {/* Animated gradient overlay - black and blue theme */}
            <div className="absolute inset-0 z-10 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Binary code patterns - resembling computation/programming */}
            <div className="absolute inset-0 z-5 opacity-10">
                <div className="binary-pattern"></div>
            </div>

            {/* Network grid lines */}
            <NetworkGrid mousePosition={mousePosition} />

            {/* Glowing particles */}
            <ParticleBackground mousePosition={mousePosition} />

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 z-20 relative">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="inline-block mb-3 md:mb-4"
                    >
                        {/*<span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-lg md:text-xl font-medium tracking-wider px-4 py-1 rounded-full border border-blue-500/30 backdrop-blur-sm bg-black/30">*/}
                        {/*    Physics Graduate • Computational Research • Software Engineer*/}
                        {/*</span>*/}
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <span className="inline-block">Emanuele  </span>
                        <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Merveille </span>
                        <span className="inline-block">Guehi</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl max-w-xl mb-8 text-gray-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Driven by a passion for clean energy and practical innovation,
                        my goal is to apply physics and computational methods to develop sustainable
                        solutions for the global energy transition.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <Link
                            href="/pages/about"
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-md hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2 group"
                        >
                            <span>View more</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            href="/pages/publications"
                            className="px-8 py-3 bg-transparent border border-blue-500 text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300"
                        >
                            Publications
                        </Link>
                    </motion.div>
                </div>
            </div>


            {/* Academic/tech symbols floating in background */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 z-5 opacity-20 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-blue-700/5"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90],
                        borderWidth: ["1px", "2px", "1px"]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full border border-blue-600/20 bg-gradient-to-br from-blue-600/5 to-blue-800/5"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0],
                        borderWidth: ["2px", "1px", "2px"]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Code snippets overlaid faintly */}
            <div className="absolute bottom-8 right-8 z-5 opacity-20 font-mono text-xs text-blue-300 hidden md:block pointer-events-none">
                {codeSnippet()}
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
};

// Code snippet that appears in the background
const codeSnippet = (): JSX.Element => {
    return (
        <pre>
            <code>
{`const simulateQuantumParticle = (
  position: Vector3,
  momentum: Vector3,
  time: number
): WaveFunction => {
  // Schrödinger equation solver
  const ħ = 1.0545718e-34;
  const m = 9.10938356e-31;
  
  return {
    amplitude: Math.exp(-position.normSq() / 2),
    phase: momentum.dot(position) - 
           (momentum.normSq() * time) / (2 * m * ħ)
  };
};`}
            </code>
        </pre>
    );
};

// Network Grid Component for academic/tech aesthetic
const NetworkGrid = ({ mousePosition }: { mousePosition: MousePosition }): JSX.Element => {
    return (
        <div className="absolute inset-0 z-5 opacity-20 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path
                            d="M 100 0 L 0 0 0 100"
                            fill="none"
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="0.5"
                        />
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#grid)"
                    style={{
                        transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
                    }}
                />
                {/* Add connection nodes */}
                {[...Array(10)].map((_, i) => (
                    <circle
                        key={i}
                        cx={`${Math.random() * 100}%`}
                        cy={`${Math.random() * 100}%`}
                        r="1"
                        fill="rgba(59, 130, 246, 0.7)"
                    />
                ))}
            </svg>
        </div>

    );
};

// Enhanced Particle Background Component - blues only
const ParticleBackground = ({ mousePosition }: ParticleBackgroundProps): JSX.Element => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate blue-themed particles
        const particlesArray = Array.from({ length: 30 }, (_, i) => {
            const size = Math.random() * 5 + 1;
            return {
                id: i,
                size,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 5,
                duration: Math.random() * 15 + 10,
                color: [
                    'bg-blue-400', 'bg-blue-500', 'bg-blue-600',
                    'bg-cyan-400', 'bg-sky-500'
                ][Math.floor(Math.random() * 5)],
                opacity: Math.random() * 0.4 + 0.2
            };
        });

        setParticles(particlesArray);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
            {particles.map(particle => (
                <motion.div
                    key={particle.id}
                    className={`absolute rounded-full ${particle.color} blur-sm`}
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        opacity: particle.opacity,
                        x: mousePosition.x * -15,
                        y: mousePosition.y * -15,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default HeroSection;