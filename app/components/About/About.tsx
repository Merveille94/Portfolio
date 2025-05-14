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
                            {/* Bio section */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-5xl font-bold text-blue-500 opacity-50 font-mono">01</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">About Me</h3>
                                    <div className="h-px w-20 bg-blue-600 mt-1"></div>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                Born in Italy and raised in Ivory Coast from the age of 6, I moved to Ghana in 2011 due to the
                                civil war crisis. My journey has shaped my resilience and global perspective. I completed my
                                B.Sc. in Physics at Kwame Nkrumah University of Science and Technology (KNUST) in Ghana,
                                specializing in Biomedical Physics with a focus on nuclear applications.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                During my undergraduate studies, I designed and simulated a Departmental Liquid Nitrogen Plant using
                                locally available materials, creating 3D models and using MATLAB for thermodynamic simulations. This
                                project ignited my interest in cryogenics and engineering design. Following graduation, I worked at
                                Ghana Nuclear Regulatory Authority as an Assistant Nuclear Security Officer, where I collaborated
                                on designing a scintillation detector for nuclear and radioactive material detection.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                Currently in Germany pursuing language studies with a DAAD Leadership for Africa Scholarship,
                                In preparation for a Masters program in Physics, Applied Physics, IT or Energy Engineering. I aim to contribute
                                to research and development in nuclear safety, sustainable energy, and computational applications.
                            </p>
                            <div className="bg-blue-900/20 border-l-2 border-blue-600 p-4 my-4">
                                <p className="text-gray-300 italic">
                                    &#34;As a passionate physicist and programmer, I aim to bridge the gap between theoretical concepts and
                                    practical applications, with particular interests in Atomic Energy, nuclear security, radiation protection,
                                    and sustainable energy systems.&#34;
                                </p>
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
                                    href="/pages/publications"
                                    className="px-8 py-3 border border-blue-500 text-white font-medium hover:bg-blue-900/30 transition-all duration-300 inline-flex items-center gap-2 group"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>View Projects</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
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
                            <h3 className="text-xl font-bold text-white">Skills & Expertise</h3>
                            <div className="h-px w-20 bg-blue-600 mt-1"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Technical Skills */}
                        <div className="bg-blue-950/30 p-6 backdrop-blur-sm border-l border-blue-500">
                            <h4 className="text-lg font-medium text-blue-400 mb-4">Technical Skills</h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-white font-medium mb-2">Programming Languages</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {['C++', 'Python', 'JavaScript', 'HTML', 'CSS'].map((skill, index) => (
                                            <span key={index} className="bg-blue-900/40 px-3 py-1 text-sm text-gray-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h5 className="text-white font-medium mb-2">Frameworks & Tools</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {['React.js', 'Next.js', 'Tailwind CSS', 'GitHub', 'Vercel'].map((skill, index) => (
                                            <span key={index} className="bg-blue-900/40 px-3 py-1 text-sm text-gray-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h5 className="text-white font-medium mb-2">Design & Modeling</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {['Blender 3D', 'SolidWorks', 'MATLAB', 'Adobe Suite'].map((skill, index) => (
                                            <span key={index} className="bg-blue-900/40 px-3 py-1 text-sm text-gray-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Research Interests */}
                        <div className="bg-blue-950/30 p-6 backdrop-blur-sm border-l border-blue-500">
                            <h4 className="text-lg font-medium text-blue-400 mb-4">Research Interests</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="min-w-4 h-4 mt-1 rounded-full bg-blue-500 opacity-70"></div>
                                    <span className="text-gray-300">Nuclear Security & Radiation Protection</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-4 h-4 mt-1 rounded-full bg-blue-500 opacity-70"></div>
                                    <span className="text-gray-300">Computational Methods & Engineering</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-4 h-4 mt-1 rounded-full bg-blue-500 opacity-70"></div>
                                    <span className="text-gray-300">Renewable & Smart Energy Systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-4 h-4 mt-1 rounded-full bg-blue-500 opacity-70"></div>
                                    <span className="text-gray-300">Modeling & Simulation in Physics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-4 h-4 mt-1 rounded-full bg-blue-500 opacity-70"></div>
                                    <span className="text-gray-300">Sustainable Engineering Solutions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-4 h-4 mt-1 rounded-full bg-blue-500 opacity-70"></div>
                                    <span className="text-gray-300">Energy Storage & System Optimization</span>
                                </li>
                            </ul>
                        </div>

                        {/* Languages & Soft Skills */}
                        <div className="bg-blue-950/30 p-6 backdrop-blur-sm border-l border-blue-500">
                            <h4 className="text-lg font-medium text-blue-400 mb-4">Languages & Soft Skills</h4>

                            <div className="mb-6">
                                <h5 className="text-white font-medium mb-3">Languages</h5>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300">French (Native)</span>
                                            <span className="text-blue-400 text-sm">100%</span>
                                        </div>
                                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300">English ( Native - Fluency)</span>
                                            <span className="text-blue-400 text-sm">100%</span>
                                        </div>
                                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300">German (Elementary A1)</span>
                                            <span className="text-blue-400 text-sm">25%</span>
                                        </div>
                                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-1/4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-white font-medium mb-2">Soft Skills</h5>
                                <div className="flex flex-wrap gap-2">
                                    {['Project Management', 'Team Collaboration', 'Problem Solving', 'Adaptability', 'Leadership', 'Cross-cultural Communication'].map((skill, index) => (
                                        <span key={index} className="bg-blue-900/40 px-3 py-1 text-sm text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Professional Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="mt-24"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="text-5xl font-bold text-blue-500 opacity-50 font-mono">03</div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Professional Experience</h3>
                            <div className="h-px w-20 bg-blue-600 mt-1"></div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* NRA Experience */}
                        <div className="bg-gray-900/50 p-6 border-l-2 border-blue-500">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                <h4 className="text-lg font-medium text-white">Assistant Nuclear Security Officer</h4>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-400 text-sm bg-blue-900/30 px-3 py-1">Aug 2021 - Nov 2023</span>
                                </div>
                            </div>
                            <h5 className="text-gray-300 mb-3">Nuclear Regulatory Authority (NRA), Accra, Ghana</h5>
                            <ul className="list-disc pl-5 text-gray-300 space-y-2">
                                <li>Collaborated on designing a scintillation detector for nuclear and radioactive material detection using SolidWorks 3D and MATLAB</li>
                                <li>Developed proficiency in complex system design, radiation detection, optimization, and efficiency through hands-on project experience</li>
                                <li>Assisted with radiation safety protocols and regulatory compliance activities</li>
                                <li>Participated in training programs and workshops on nuclear security measures</li>
                            </ul>
                        </div>

                        {/* Junior Web Developer Experience */}
                        <div className="bg-gray-900/50 p-6 border-l-2 border-blue-500">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                <h4 className="text-lg font-medium text-white">Junior Web Developer (Volunteer)</h4>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-400 text-sm bg-blue-900/30 px-3 py-1">2024</span>
                                </div>
                            </div>
                            <h5 className="text-gray-300 mb-3">InfoProSolution GH Ltd – Kumasi, Ghana</h5>
                            <ul className="list-disc pl-5 text-gray-300 space-y-2">
                                <li>Designed and developed the official website for MedAdheregh.org, a digital platform supporting medical adherence</li>
                                <li>Contributed to front-end and back-end enhancements for various health tech projects</li>
                                <li>Supported the team in refining UI/UX and debugging tasks across multiple applications</li>
                            </ul>
                        </div>

                        {/* Freelance Web Developer Experience */}
                        <div className="bg-gray-900/50 p-6 border-l-2 border-blue-500">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                <h4 className="text-lg font-medium text-white">Freelance Web Developer (Volunteer)</h4>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-400 text-sm bg-blue-900/30 px-3 py-1">2024</span>
                                </div>
                            </div>
                            <h5 className="text-gray-300 mb-3">Gwaipro Church Music Studio – Ghana</h5>
                            <ul className="list-disc pl-5 text-gray-300 space-y-2">
                                <li>Built and deployed www.gwaipro.com to promote community-based music production services</li>
                                <li>Ensured responsive design and user-friendly navigation using React and Tailwind CSS</li>
                                <li>Delivered continuous technical support and content maintenance</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="mt-24"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="text-5xl font-bold text-blue-500 opacity-50 font-mono">04</div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Educational Background</h3>
                            <div className="h-px w-20 bg-blue-600 mt-1"></div>
                        </div>
                    </div>

                    <div className="relative pl-8 border-l border-blue-800/50">
                        {/* Timeline Events */}
                        {[
                            {
                                year: '2025',
                                title: 'DAAD Scholar, German Language Student',
                                location: 'S + W Speak + Write gGmbh Sprachschule, Marburg, Germany',
                                desc: 'A1.1 completed | Expected to reach B1 by September'
                            },
                            {
                                year: '2025',
                                title: 'DAAD Leadership for Africa (LFA) Scholarship Recipient',
                                location: 'Germany',
                                desc: 'Scholarship for Master study Programme in Germany and Leadership training'
                            },
                            {
                                year: '2024',
                                title: 'Software Engineering Certificate',
                                location: ' "Online" Nairobi, Kenya',
                                desc: 'Scholarship from Mastercard to partake in the 12-months ALX Africa Software engineering Program'
                            },
                            {
                                year: '2021',
                                title: 'Bachelor of Science, Physics (Biomedical Physics Option)',
                                location: 'Kwame Nkrumah University of Science and Technology, Kumasi, Ghana',
                                desc: 'Second Class Honours Upper Division | DAFI Ghana Scholarship Recipient'
                            },
                            {
                                year: '2021',
                                title: 'Undergraduate Research Project',
                                location: 'KNUST, Ghana',
                                desc: 'Design and Simulation of a Departmental Liquid Nitrogen Plant using household and local materials'
                            },
                            {
                                year: '2017',
                                title: 'WASSCE West Africa Senior High School Certificate, General Science',
                                location: 'Faith Community Baptist Senior High School, Ghana',
                                desc: 'Focus on Mathematics, Biology, Chemistry, and Physics | UNHCR Partial Support'
                            }
                        ].map((item, index) => (
                            <div key={index} className="mb-10 relative">
                                <div className="absolute -left-[3.25rem] text-blue-500 opacity-70 font-mono text-sm">{item.year}</div>
                                <div className="bg-gray-900/50 backdrop-blur-sm p-4 border-l border-blue-500">
                                    <h4 className="text-lg font-medium text-white">{item.title}</h4>
                                    <p className="text-blue-400 text-sm">{item.location}</p>
                                    <p className="text-gray-400 mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CSS for grid pattern */}
            {/*<style jsx>{`*/}
            {/*    .grid-pattern {*/}
            {/*        background-size: 20px 20px;*/}
            {/*        background-image:*/}
            {/*                linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),*/}
            {/*                linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);*/}
            {/*    }*/}
            {/*`}</style>*/}
        </section>
    );
};

export default About;