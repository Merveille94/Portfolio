"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaChevronRight, FaChevronDown } from "react-icons/fa";
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
    team: string[];
    github: string;
    sections: ProjectSection[];
}

const UndergraduateProject: React.FC = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>("overview");

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

    // Project details
    const projectDetails: ProjectDetailsType = {
        title: "Smart Traffic Control System",
        subtitle: "AI-Based Traffic Optimization Research Project",
        overview: "This undergraduate research project focused on developing an intelligent traffic control system that utilizes computer vision and machine learning to optimize traffic light timing based on real-time traffic conditions. The system was designed to reduce congestion, minimize wait times, and improve overall traffic flow in urban environments.",
        duration: "January 2023 - December 2023",
        technologies: ["Computer Vision", "Python", "C++", "TensorFlow", "OpenCV", "Raspberry Pi"],
        team: ["Your Name (Lead Developer)", "Professor X (Advisor)", "Team Member 1", "Team Member 2"],
        github: "#",
        sections: [
            {
                id: "overview",
                title: "Project Overview",
                content: "The Smart Traffic Control System is an innovative designed to address the growing problem of traffic congestion in urban areas. Traditional traffic light systems operate on fixed timing patterns regardless of actual traffic conditions, leading to inefficient traffic flow. Our system utilizes computer vision and machine learning algorithms to detect and analyze traffic density in real-time, allowing for dynamic adjustment of traffic signal timing to optimize vehicle movement through intersections.",
                image: "/api/placeholder/800/400"
            },
            {
                id: "problem",
                title: "Problem Statement",
                content: "Urban traffic congestion is a growing concern that leads to increased travel times, fuel consumption, air pollution, and driver frustration. Traditional traffic management systems lack the ability to adapt to changing traffic patterns throughout the day. Our research identified that up to 30% of urban congestion could be reduced with intelligent, responsive traffic control systems.",
                image: "/api/placeholder/800/400"
            },
            {
                id: "methodology",
                title: "Methodology",
                content: "We implemented a multi-stage approach for our system: 1) Vehicle detection using computer vision with OpenCV and YOLOv4, 2) Traffic density calculation based on vehicle count and type, 3) Machine learning model for predicting optimal signal timing, and 4) A control system for adjusting traffic lights in real-time. The system was first developed in a simulated environment using SUMO (Simulation of Urban Mobility) before being tested with recorded traffic footage.",
                image: "/api/placeholder/800/400"
            },
            {
                id: "implementation",
                title: "Implementation",
                content: "The hardware setup consisted of Raspberry Pi units with attached cameras positioned at test intersections. These units ran our C++ optimized computer vision algorithms to detect vehicles. The captured data was processed through our Python-based machine learning model that had been trained on various traffic scenarios. For the prototype, we created a scale model of a four-way intersection with working traffic lights controlled by our system.",
                image: "/api/placeholder/800/400"
            },
            {
                id: "results",
                title: "Results & Findings",
                content: "Our testing showed significant improvements compared to traditional fixed-timing systems: 1) 25% reduction in average waiting time at red lights, 2) 20% increase in throughput (number of vehicles passing through the intersection per hour), 3) 15% reduction in overall journey time across simulated city routes. The system performed especially well during rush hour conditions, where adaptability provided the greatest advantages.",
                image: "/api/placeholder/800/400"
            },
            {
                id: "challenges",
                title: "Challenges & Solutions",
                content: "Throughout the project, we encountered several technical challenges. The most significant was low light performance of the computer vision system, which we addressed by implementing a specialized night mode with infrared camera capabilities. Another challenge was optimizing the machine learning algorithm to run efficiently on the limited hardware of the Raspberry Pi, which we solved by creating a lightweight model specifically designed for edge computing.",
                image: "/api/placeholder/800/400"
            },
            {
                id: "conclusion",
                title: "Conclusion",
                content: "The Smart Traffic Control System demonstrated that adaptive, AI-driven traffic management can significantly improve urban traffic flow. While our prototype was limited to a single intersection, the research suggests that implementing such systems at a city-wide level could dramatically reduce congestion and emissions. Future work would focus on scaling the system to handle multiple interconnected intersections and incorporating additional data sources such as weather conditions and public transit schedules.",
                image: "/api/placeholder/800/400"
            }
        ]
    };

    // Toggle section expansion
    const toggleSection = (id: string) => {
        setExpandedSection(expandedSection === id ? null : id);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 bg-white">
            {/* Back button */}
            <Link href="/pages/publications" className="inline-block">
                <motion.div
                    whileHover={{ x: -5 }}
                    className="inline-flex items-center space-x-2 text-blue-600 mb-8"
                >
                    <FaArrowLeft size={14} />
                    <span>Back to Publications</span>
                </motion.div>
            </Link>

            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <h1 className="text-4xl font-bold text-gray-800 mb-3">{projectDetails.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{projectDetails.subtitle}</p>

                <div className="flex justify-center">
                    <motion.a
                        href={projectDetails.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900 transition-colors"
                    >
                        <FaGithub size={18} />
                        <span>View Code Repository</span>
                    </motion.a>
                </div>
            </motion.header>

            {/* Project quick details */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-gray-50 p-6 rounded-lg"
            >
                <motion.div variants={itemVariants}>
                    <h3 className="font-medium text-gray-700 mb-2">Duration</h3>
                    <p className="text-gray-600">{projectDetails.duration}</p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3 className="font-medium text-gray-700 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {projectDetails.technologies.map((tech, index) => (
                            <span key={index} className="text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3 className="font-medium text-gray-700 mb-2">Team</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                        {projectDetails.team.map((member, index) => (
                            <li key={index}>{member}</li>
                        ))}
                    </ul>
                </motion.div>
            </motion.section>

            {/* Main content sections */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-6"
            >
                {projectDetails.sections.map((section) => (
                    <motion.div
                        key={section.id}
                        variants={itemVariants}
                        className="border border-gray-100 rounded-lg overflow-hidden shadow-sm"
                    >
                        {/* Section header (always visible) */}
                        <motion.div
                            className="flex justify-between items-center p-6 cursor-pointer bg-white"
                            onClick={() => toggleSection(section.id)}
                            whileHover={{ backgroundColor: "#fafafa" }}
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                            <motion.div
                                animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaChevronDown className="text-gray-500" />
                            </motion.div>
                        </motion.div>

                        {/* Expandable content */}
                        <motion.div
                            initial={false}
                            animate={{
                                height: expandedSection === section.id ? "auto" : 0,
                                opacity: expandedSection === section.id ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                                </div>
                                <div className="relative h-64">
                                    <Image
                                        src={section.image}
                                        alt={section.title}
                                        fill
                                        className="object-cover rounded-md"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.section>

            {/* Conclusion and next steps */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 p-8 bg-blue-50 rounded-lg text-center"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Looking Forward</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-6">
                    This undergraduate project laid the foundation for my interest in applying AI and computer vision to real-world problems.
                    The experience gained from developing this system continues to influence my approach to software development and research.
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
    );
};

export default UndergraduateProject;