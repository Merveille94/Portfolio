"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="relative py-20 bg-white overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center relative"
                >
                    {/* Background BSC text with only outlines - positioned directly behind name */}
                    <div className="relative flex justify-center items-center">
                        <h1 className="absolute text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent tracking-wider select-none"
                            style={{
                                WebkitTextStroke: '1px rgba(0,0,0,0.1)',
                                // textStroke: '1px rgba(0,0,0,0.1)' as any
                            }}>
                            BSC
                        </h1>
                        <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold">EMANUELE MERVEILLE GUEHI</h2>
                    </div>
                    <p className="italic text-gray-600 mt-1">Physicist & Energy Engineering Aspirant</p>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-4"
                    >
                        <div className="relative w-full max-w-sm mx-auto aspect-square">
                            <div className="bg-gray-200 w-full h-full relative">
                                <Image
                                    src="/profile-placeholder.jpg"
                                    alt="EMG"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-blue-800 z-0"></div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-8"
                    >
                        <div className="space-y-5 text-lg text-gray-800">
                            <p>
                                Physics graduate with 2 years of experience at the Nuclear Regulatory Authority. Passionate about sustainable energy solutions and programming.
                            </p>
                            <p>
                                Currently preparing for a Master programme in Energy Engineering in Germany to contribute to next-generation energy systems.
                            </p>
                            <p>
                                My work bridges theoretical physics and real-world regulatory practices, backed by a strong grasp of front-end development and C++ programming.
                            </p>

                            <div className="pt-4">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="px-6 py-2 border-2 border-black font-medium hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;