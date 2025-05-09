"use client"
// components/HeroSection.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="container mx-auto min-h-screen relative flex flex-col justify-center px-4 md:px-6 ">

            {/* Particle Background */}
            <ParticleBackground />

            <div className="container mx-auto z-10">
                <motion.p
                    className="text-lg md:text-xl tracking-wider mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Physics Graduate • Aspiring Energy Engineer • Web Developer
                </motion.p>

                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Emanuele Merveille Guehi
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl max-w-lg mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Aspire to explore innovative solutions in sustainable energy and technology.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="#projects" //This part will take the visitor to my publications or site and projects
                        className="px-8 py-3 bg-black text-white font-medium border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
                    >
                        View My Projects
                    </a>
                </motion.div>
            </div>


        </section>
    );
};

// Particle Background Component
const ParticleBackground = () => {
    const [particles, setParticles] = useState<{ id: number; size: number; x: number; y: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate random particles
        const particlesArray = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            size: Math.random() * 10 + 5,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5
        }));

        setParticles(particlesArray);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map(particle => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-gray-200"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                    }}
                    transition={{
                        duration: 8,
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