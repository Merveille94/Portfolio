"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaGithub, FaChevronRight, FaTools, FaFlask, FaLaptopCode, FaRegLightbulb } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Define TypeScript interfaces
interface ProjectSection {
    id: string;
    title: string;
    content: string;
    image: string;
}

interface ProjectDetailsType {
    title: string;
    subtitle: string;
    overview: string;
    duration: string;
    technologies: string[];
    skills: string[];
    team: string[];
    github: string;
    sections: ProjectSection[];
}

const UndergraduateProject: React.FC = () => {
    // const [expandedSection, setExpandedSection] = useState<string | null>("overview");
    const [activeTab, setActiveTab] = useState<string>("overview");

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
    };

    // Custom colors
    // const colors = {
    //     darkBlue: "bg-blue-900",
    //     mediumBlue: "bg-blue-800",
    //     lightBlue: "bg-blue-700",
    //     black: "bg-black",
    //     darkGray: "bg-gray-900",
    //     text: "text-gray-100",
    //     highlight: "text-blue-300",
    // };

    // Project details
    const projectDetails: ProjectDetailsType = {
        title: "Design & Construction of a Liquid Nitrogen Plant",
        subtitle: "Pressure Swing Adsorption (PSA) System for High-Purity Nitrogen Production",
        overview: "This undergraduate thesis project focused on designing and constructing a functional liquid nitrogen plant for the Physics Department of KNUST using Pressure Swing Adsorption (PSA) technology. The system was engineered to provide continuous high-purity nitrogen gas and liquid nitrogen at a rate of up to 60 L/day with 99.98% purity, addressing the department's critical need for cryogenic capabilities.",
        duration: "January 2022 - December 2022",
        technologies: ["SolidWorks 3D", "MATLAB", "SolidWorks Simulation", "Arduino", "Pressure Swing Adsorption"],
        skills: ["3D Modeling", "Simulation", "Metal Fabrication", "Welding", "Thermodynamics", "Cryogenics", "Mechanical Design"],
        team: ["Your Name (Lead Engineer)", "Professor X (Advisor)", "Team Member 1", "Team Member 2"],
        github: "#",
        sections: [
            {
                id: "overview",
                title: "Project Overview",
                content: "The project addressed a critical need for the Physics Department at KNUST: a functional liquid nitrogen plant. Using Pressure Swing Adsorption (PSA) technology, we designed and constructed a cost-effective system capable of producing high-purity nitrogen (99.98%) at a rate of up to 60 L/day. The system was designed to operate with clean, dry compressed air to generate nitrogen in both gaseous and liquid states, providing a continuous supply for laboratory applications while maintaining process stability and cost efficiency.",
                image: "/A (7).jpg"
            },
            {
                id: "problem",
                title: "Problem Statement",
                content: "The Physics Department of KNUST lacked a functional liquid nitrogen plant, limiting research capabilities and increasing operational costs through external procurement. Liquid nitrogen is essential for various laboratory experiments, cryogenic research, and equipment maintenance. The department required a reliable, in-house solution that could produce high-purity nitrogen to avoid contamination risks in sensitive experiments and analyses. Our project aimed to develop a sustainable, cost-effective solution to this critical infrastructure gap.",
                image: "/A (15).jpg"
            },
            {
                id: "methodology",
                title: "Methodology & Design",
                content: "The project was structured in four key phases: design, material acquisition, construction, and testing/simulation. We began with detailed 2D schematic diagrams that served as the foundation for the plant structure. The system design incorporated a scrubber to remove H₂O and CO₂ from intake air, a compressor with micron filtering, high-pressure cooling through an ice bath, and PSA towers filled with Carbon Molecular Sieve (CMS). The PSA system used Arduino-controlled pneumatic valves to regulate airflow between towers, selectively adsorbing oxygen while allowing nitrogen to pass through. I personally created detailed 3D models in SolidWorks to visualize the complete assembly and identify potential design flaws before construction began.",
                image: "/A (22).jpg"
            },
            {
                id: "fabrication",
                title: "Fabrication & Construction",
                content: "The construction phase required significant hands-on engineering skills. I learned welding specifically for this project, (I really had a great time doing that) to ensure high-pressure integrity of the metal components. The fabrication involved precision metal work for the PSA towers (As you can probably tell, it wasn't precise... My fault 🙏), compressor integration, and cooling systems. Each component was carefully assembled and tested for pressure tolerance. The thermodynamic cooling chamber was constructed with multiple layers of glass fiber insulation (We were safe), which our research confirmed would provide sufficient thermal isolation for the Joule-Thomson refrigeration process to occur effectively. The control system utilized an Arduino-based controller to manage the PSA cycling process through solid-state relays and pneumatic valves.",
                image: "/A (11).jpg"
            },
            {
                id: "simulation",
                title: "Simulation & Analysis",
                content: "Extensive simulations were conducted using SolidWorks 2021 (Yes! it was licensed) and MATLAB (the free option) to validate the design. I ran computational models for the cooling tower to determine optimal pressure ranges and temperature drops for nitrogen liquefaction (Learnt a very important lesson simulation ≠ reality). Simulations were performed at various pressures (500 kPa and 1 MPa) with both ideal and real gas models for 78% pure nitrogen. These simulations were crucial for understanding the thermodynamic behavior of the system and identifying potential failure points before physical testing. The analysis revealed that pressures above 6 bar would be necessary for effective nitrogen liquefaction with our 2HP compressor setup, though this approached the critical operating capacity of the compressor.",
                image: "/A (17).png"
            },
            {
                id: "testing",
                title: "Testing & Results",
                content: "The testing phase involved rigorous pressure testing to ensure system integrity and safety. Through leakage tests, we identified and sealed all potential failure points. Our findings confirmed that glass fiber is an effective insulation material for creating the thermodynamic conditions necessary for Joule-Thomson refrigeration. While we were unable to achieve full production testing due to material constraints (specifically the Carbon Molecular Sieve and oxygen analyzers), our pressure testing and simulations indicated that the system design was sound. The 2HP compressor proved capable of generating pressures sufficient for nitrogen liquefaction, though we recommended a more powerful compressor for higher production rates and longer operational periods.",
                image: "/A (12).jpg"
            },
            {
                id: "challenges",
                title: "Challenges & Solutions",
                content: "Throughout the project, we encountered several significant engineering challenges. One major obstacle was creating a leak-proof system capable of maintaining the high pressures required for PSA operation.  As I was in charge of structural integrity and simulations, I addressed this through meticulous welding and connection designs ( Again, I had to learn that on the spot 🤣), implementing multiple redundant sealing methods at critical junctions. Another challenge was the thermal management needed for efficient liquefaction ( NB: It got hot and melted pipes 🤣🤣). By applying thermodynamic principles (Lots of suffering 😊), I designed a graduated cooling system that progressively lowered gas temperature while maintaining pressure until the final expansion and phase change (that worked for 8 min before Death). Material constraints, particularly the specialized Carbon Molecular Sieve, required creative sourcing solutions and adaptation of the design to work with locally available alternatives where possible.",
                image: "/A (13).jpg"
            },
            {
                id: "conclusion",
                title: "Conclusion & Future Work",
                content: "This undergraduate thesis project successfully designed and largely constructed a functional liquid nitrogen plant using Pressure Swing Adsorption technology. While full production testing awaits the acquisition of specialized components like the Carbon Molecular Sieve and precise measurement instruments, the mechanical system, control logic, and structural elements were successfully completed. Our research confirmed that a localized, cost-effective liquid nitrogen production system is feasible for educational institutions. Future work will focus on optimizing the compressor capacity for increased production rates, investigating alternative adsorbent materials, and implementing more sophisticated monitoring systems. The project demonstrates the viability of small-scale cryogenic systems for educational and research applications.",
                image: "/A (8).jpg"
            }
        ]
    };

    // Toggle section expansion
    // const toggleSection = (id: string) => {
    //     setExpandedSection(expandedSection === id ? null : id);
    // };

    // Change active tab
    const changeTab = (tabId: string) => {
        setActiveTab(tabId);
    };

    // Find the selected section
    const selectedSection = projectDetails.sections.find(section => section.id === activeTab);

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header with background hero */}
            <div className="relative bg-gradient-to-r from-blue-900 to-black text-white">
                <div className="absolute inset-0 bg-opacity-40 bg-black">
                    <div className="absolute inset-0 bg-blue-900 opacity-20" style={{ backgroundImage: 'url("/lnp.jpg")', backgroundSize: 'contain' }}></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 pt-24 pb-20 relative z-10">
                    {/* Back button */}
                    <Link href="/pages/publications" className="inline-block mb-8 inline-flex items-center space-x-2 text-blue-200">
                            <FaArrowLeft size={14} />
                            <span>Back to Publications</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{projectDetails.title}</h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl">{projectDetails.subtitle}</p>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                            {projectDetails.technologies.map((tech, index) => (
                                <span key={index} className="text-xs bg-blue-800 bg-opacity-50 text-blue-50 px-3 py-1 rounded-full border border-blue-700">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
                        >
                            <FaGithub size={18} />
                            <Link href="/pages/publications"><span>View other projects</span></Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Project quick details */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500 text-gray-100"
                    >
                        <h3 className="font-medium text-blue-300 mb-3 flex items-center">
                            <FaRegLightbulb className="mr-2 text-blue-400" /> Project Overview
                        </h3>
                        <p className="text-gray-300 text-sm">{projectDetails.overview}</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500 text-gray-100"
                    >
                        <h3 className="font-medium text-blue-300 mb-3 flex items-center">
                            <FaLaptopCode className="mr-2 text-blue-400" /> Technical Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {projectDetails.skills.map((skill, index) => (
                                <span key={index} className="text-xs text-gray-200 px-2 py-1 bg-gray-700 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500 text-gray-100"
                    >
                        <h3 className="font-medium text-blue-300 mb-3 flex items-center">
                            <FaTools className="mr-2 text-blue-400" /> Construction Process
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Hands-on fabrication involving metal working, precision welding, and component assembly for high-pressure systems. Complete design-to-construction process from 3D modeling to physical implementation.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500 text-gray-100"
                    >
                        <h3 className="font-medium text-blue-300 mb-3 flex items-center">
                            <FaFlask className="mr-2 text-blue-400" /> Key Components
                        </h3>
                        <ul className="text-gray-300 text-sm space-y-1 list-disc ">
                            <li>PSA Towers with Carbon Molecular Sieve</li>
                            <li>Scrubber & Filtering System</li>
                            <li>2HP Compressor with Cooling System</li>
                            <li>Arduino-controlled Valve System</li>
                            <li>Thermodynamic Cooling Chamber</li>
                        </ul>
                    </motion.div>
                </motion.section>

                {/* Tabbed navigation */}
                <div className="mb-8">
                    <div className="flex overflow-x-auto pb-2 scrollbar-hide">
                        {projectDetails.sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => changeTab(section.id)}
                                className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-t-lg mr-2 transition-colors ${
                                    activeTab === section.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active section content */}
                <AnimatePresence mode="wait">
                    {selectedSection && (
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-blue-300 mb-4">{selectedSection.title}</h2>
                                    <p className="text-gray-300 leading-relaxed">{selectedSection.content}</p>
                                </div>
                                <div className="h-64 md:h-auto relative">
                                    <Image
                                        src={selectedSection.image}
                                        alt={selectedSection.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Engineering highlights section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="bg-blue-900 bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 border-blue-400 text-gray-100">
                        <h3 className="text-lg font-semibold text-blue-300 mb-3">3D Modeling & Simulation</h3>
                        <p className="text-gray-300">
                            Used SolidWorks 3D for comprehensive component design and assembly modeling. Conducted thermal and pressure simulations using MATLAB and SolidWorks Simulation to verify the design would maintain structural integrity under operating conditions and achieve the required thermodynamic parameters.
                        </p>
                    </div>

                    <div className="bg-blue-900 bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 border-blue-400 text-gray-100">
                        <h3 className="text-lg font-semibold text-blue-300 mb-3">Fabrication & Construction</h3>
                        <p className="text-gray-300">
                            Learned welding techniques specifically for this project to ensure high-pressure system integrity. Performed precision metal fabrication to construct the PSA towers, cooling chambers, and structural framework. Implemented pressure-testing procedures to verify system integrity and safety.
                        </p>
                    </div>

                    <div className="bg-blue-900 bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 border-blue-400 text-gray-100">
                        <h3 className="text-lg font-semibold text-blue-300 mb-3">Electronics & Control</h3>
                        <p className="text-gray-300">
                            Designed and implemented an Arduino-based control system to manage the PSA cycling process. Programmed the timing sequences for pneumatic valve operation, ensuring precise control of gas flow between adsorption towers. Integrated pressure and temperature sensors for system monitoring and safety controls.
                        </p>
                    </div>
                </motion.section>

                {/* Conclusion and next steps */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 bg-gradient-to-r from-blue-900 to-black text-white rounded-lg"
                >
                    <h2 className="text-2xl font-bold mb-4">Project Impact & Skills Developed</h2>
                    <p className="max-w-6xl mx-auto mb-6">
                        This undergraduate thesis project was a comprehensive engineering challenge that developed my skills across mechanical engineering, thermodynamics, fabrication, and control systems. The hands-on experience of designing, modeling, simulating, and constructing a complex cryogenic system provided invaluable practical knowledge that continues to influence my approach to engineering problems.
                    </p>
                    <Link href="/pages/contact" className="inline-block">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            <span>Discuss This Project</span>
                            <FaChevronRight size={14} />
                        </motion.div>
                    </Link>
                </motion.section>
            </div>
        </div>
    );
};

export default UndergraduateProject;