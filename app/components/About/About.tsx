"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden text-white"
        >
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="grid-pattern w-full h-full"></div>
            </div>

            {/* Animated blue accent lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-800 to-transparent"></div>

            {/* Floating blue particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-blue-500 opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                {/* Heading with interactive elements */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    variants={fadeInUp}
                    className="mb-16 text-center relative"
                >
                    {/* Animated background element */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-blue-500/20 opacity-30"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.1, 0.3],
                            borderWidth: ["1px", "2px", "1px"]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Background BSC text with only outlines */}
                    <div className="relative flex justify-center items-center py-8">
                        <motion.h1
                            className="absolute text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent tracking-wider select-none"
                            style={{
                                WebkitTextStroke: '1px rgba(59, 130, 246, 0.2)',
                            }}
                            animate={{
                                opacity: [0.7, 0.5, 0.7]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            B.Sc
                        </motion.h1>
                        <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            EMANUELE MERVEILLE GUEHI
                        </h2>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        <div className="h-px w-12 bg-blue-600"></div>
                        <p className="text-gray-300 mt-1 font-light">Nuclear Physicist & Energy Engineer Enthusiast</p>
                        <div className="h-px w-12 bg-blue-600"></div>
                    </div>
                </motion.div>

                {/* Content with modern academic layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    {/* Profile Image with geometric accents */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="md:col-span-5 lg:col-span-4"
                    >
                        <div className="relative w-full max-w-sm mx-auto">
                            {/* Main image container */}
                            <div className="relative aspect-square z-10 border-2 border-blue-600/50">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-10"></div>
                                <Image
                                    src="/icon.png"
                                    alt="Emanuele Merveille Guehi"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* Geometric decorations */}
                                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-400"></div>
                                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blue-400"></div>
                            </div>

                            {/* Background decorative elements */}
                            <div className="absolute top-4 -right-4 w-full h-full border border-blue-600/30 z-0"></div>

                            {/* Academic credentials floating below image */}
                            <motion.div
                                className="absolute -bottom-10 -left-2 z-20 backdrop-blur-sm bg-black/40 p-3 border-l-2 border-blue-500"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <div className="text-xs font-light flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-500"></div>
                                        <span>B.Sc. Physics, KNUST - Ghana</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-500"></div>
                                        <span>Programmer and Physicist</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Content with interactive elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="md:col-span-7 lg:col-span-8"
                    >
                        <div className="space-y-6">
                            {/* Academic profile display */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-5xl font-bold text-blue-500 opacity-50 font-mono">01</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Academic Profile</h3>
                                    <div className="h-px w-20 bg-blue-600 mt-1"></div>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                Physics graduate with a focus on nuclear physics,
                                computational methods, and energy systems.
                                I aim to bridge theory and practice, especially in nuclear processes
                                and sustainable energy modeling..
                            </p>

                            <div className="bg-blue-900/20 border-l-2 border-blue-600 p-4 my-4">
                                <p className="text-gray-300 italic">
                                    &#34;Aiming for a masters degree focused on the practical application of physics and sustainable
                                    energy systems, with an interest in using computational models to optimize renewable technologies.&#34;
                                </p>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                Currently preparing for advanced studies in Applied Physics or Energy Engineering, with a focus on computational
                                optimization of grid systems and energy storage. I plan to contribute to the program through my programming skills
                                in C++ and modern web development frameworks.
                            </p>

                            {/* Key focus areas */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                <div className="bg-blue-950/30 p-4 backdrop-blur-sm">
                                    <h4 className="text-blue-400 font-medium mb-2">Research Focus</h4>
                                    <ul className="text-gray-300 space-y-1">
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500"></div>
                                            <span>Biophysics / Atomic Physics </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500"></div>
                                            <span>Nuclear Safety, Security and Safeguards</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500"></div>
                                            <span>Renewable Energy Integration</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/30 p-4 backdrop-blur-sm">
                                    <h4 className="text-blue-400 font-medium mb-2">Technical Skills</h4>
                                    <ul className="text-gray-300 space-y-1">
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500"></div>
                                            <span>C++ Algorithm Development</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500"></div>
                                            <span>React & Next.js Frameworks</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500"></div>
                                            <span>3d Modelling / CAD </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-6 flex flex-wrap gap-4">
                                <motion.a
                                    href="/Emanuele_Merveille_Guehi_CV.pdf"
                                    target="_blank"
                                    className="px-8 py-3 border border-blue-500 text-white font-medium hover:bg-blue-900/30 transition-all duration-300 inline-flex items-center gap-2 group"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Download CV</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.a>

                                <motion.a
                                    href="#publications"
                                    className="px-8 py-3 border border-blue-500 text-white font-medium hover:bg-blue-900/30 transition-all duration-300 inline-flex items-center gap-2 group"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Research Papers</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Academic journey timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-24"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="text-5xl font-bold text-blue-500 opacity-50 font-mono">02</div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Academic Journey</h3>
                            <div className="h-px w-20 bg-blue-600 mt-1"></div>
                        </div>
                    </div>

                    <div className="relative pl-8 border-l border-blue-800/50">
                        {/* Timeline Events */}
                        {[
                            { year: '2025 - Present', title: 'German Language course at Speak + Write gGmbh , Marburg - Germany', desc: 'Preparing for Master Programme in Physics/Energy Engineering' },
                            { year: '2024 - 2025', title: 'DAAD LFA Recipient', desc: 'Scholarship for Master study Programme Germany as well as Leadership training' },
                            { year: '2024 - 2025', title: 'Junior Web developer ', desc: 'Infoprosolutiongh ltd - Website design and Maintenance' },
                            { year: '2023 - 2024', title: 'Online Course Software Engineering', desc: 'Alx Africa, Nairobi Kenya web-development specialization' },
                            { year: '2021 - 2023', title: 'Nuclear Regulatory Authority', desc: 'Assistant Radiation Protection Officer, Radiological and Non-Ionizing Department' },
                            { year: '2017 - 2021', title: 'BSc Physics', desc: 'Kwame Nkrumah University of Science and technology Ghana, Biophysics option' },
                            { year: '2014 - 2017', title: 'West Africa Secondary School Certificate (WASSCE)', desc: 'Studied General Science (Maths, Biology, Chemistry, Physics)' }
                        ].map((item, index) => (
                            <div key={index} className="mb-10 relative">
                                {/*<div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-200 border-4 border-gray-900"></div>*/}
                                <div className="absolute -left-[3.25rem] text-blue-500 opacity-70 font-mono text-sm">{item.year}</div>
                                <div className="bg-gray-900/50 backdrop-blur-sm p-4 border-l border-blue-500">
                                    <h4 className="text-lg font-medium text-white">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CSS for grid pattern */}
            <style jsx>{`
                .grid-pattern {
                    background-size: 20px 20px;
                    background-image: 
                        linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
                }
            `}</style>
        </section>
    );
};

export default About;