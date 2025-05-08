"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode, FaExternalLinkAlt, FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const PublicationsPage = () => {
    // State to track which project is being previewed (if any)
    const [activePreview, setActivePreview] = useState(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    // GitHub projects data
    const githubProjects = [
        {
            id: "github1",
            title: "Algorithm Visualizer",
            description: "Interactive visualization of common algorithms including sorting, pathfinding, and graph traversals using C++",
            tags: ["C++", "Algorithms", "Data Structures"],
            icon: <SiCplusplus className="text-blue-500" />,
            link: "#",
        },
        {
            id: "github2",
            title: "ML Weather Prediction",
            description: "Machine learning model that predicts weather patterns based on historical data using Python and scikit-learn",
            tags: ["Python", "Machine Learning", "Data Analysis"],
            icon: <FaPython className="text-green-600" />,
            link: "#",
        },
        {
            id: "github3",
            title: "Network Traffic Analyzer",
            description: "C++ application for monitoring and analyzing network traffic patterns with custom visualization",
            tags: ["C++", "Networking", "Data Visualization"],
            icon: <SiCplusplus className="text-blue-500" />,
            link: "#",
        }
    ];

    // Web development projects
    const webProjects = [
        {
            id: "web1",
            title: "E-commerce Dashboard",
            description: "Interactive dashboard for an e-commerce platform with real-time data visualization and admin controls",
            image: "/api/placeholder/500/300",
            tags: ["React", "NextJS", "Tailwind CSS"],
            link: "#",
        },
        {
            id: "web2",
            title: "Personal Blog Platform",
            description: "Minimalist blogging platform with dark/light mode, markdown support, and commenting system",
            image: "/api/placeholder/500/300",
            tags: ["TypeScript", "NextJS", "MongoDB"],
            link: "#",
        },
        {
            id: "web3",
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates and progress tracking",
            image: "/api/placeholder/500/300",
            tags: ["React", "Firebase", "Tailwind CSS"],
            link: "#",
        }
    ];

    // undergraduate project
    const undergraduateProject = {
        id: "undergrad",
        title: "Smart Traffic Control System",
        description: "Developed an AI-based traffic control system that optimizes signal timing based on real-time traffic density to reduce congestion and improve flow.",
        image: "/api/placeholder/600/400",
        link: "/pages/undergraduate", // This would link to the detailed description page
    };

    // Function to handle preview toggling
    const togglePreview = (id) => {
        if (activePreview === id) {
            setActivePreview(null);
        } else {
            setActivePreview(id);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-gray-800 mb-8 text-center"
            >
                My Publications
            </motion.h1>

            {/* Featured undergraduate Project */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="mb-16"
            >
                <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-700 mb-6">
                    Featured Undergraduate Project
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <img
                            src={undergraduateProject.image}
                            alt={undergraduateProject.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{undergraduateProject.title}</h3>
                            <p className="text-white/90 mb-4">{undergraduateProject.description}</p>
                            <motion.a
                                href={undergraduateProject.link}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md inline-flex items-center space-x-2 self-start"
                            >
                                <span>View Detailed Process</span>
                                <FaExternalLinkAlt size={14} />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* GitHub Projects */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="mb-16"
            >
                <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-700 mb-6">
                    Coding Projects
                </motion.h2>

                <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-6">
                    <FaGithub size={18} className="text-gray-700" />
                    <span className="text-gray-600">GitHub Repositories</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {githubProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        {project.icon}
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {project.tags[0]}
                  </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(1).map((tag, index) => (
                                        <span key={index} className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <motion.a
                                    href={project.link}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                                >
                                    <FaGithub size={16} />
                                    <span>View Repository</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Web Development Projects */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-700 mb-6">
                    Web Development Projects
                </motion.h2>

                <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-6">
                    <FaReact size={18} className="text-blue-500" />
                    <span className="text-gray-600">Interactive Web Applications</span>
                </motion.div>

                <div className="space-y-12">
                    {webProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="flex flex-col md:flex-row gap-8 items-center"
                            style={{ flexDirection: index % 2 === 1 ? 'row-reverse' : '' }}
                        >
                            {/* Project Image */}
                            <motion.div
                                className="w-full md:w-1/2"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => togglePreview(project.id)}
                            >
                                <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover"
                                    />

                                    {/* Preview overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: activePreview === project.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-white text-center p-6">
                                            <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                            <p className="mb-4">{project.description}</p>
                                            <motion.a
                                                href={project.link}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="inline-flex items-center space-x-2 bg-white text-gray-800 py-2 px-4 rounded-md text-sm"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaExternalLinkAlt size={14} />
                                                <span>Visit Site</span>
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Project Info */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <motion.a
                                    href={project.link}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
                                >
                                    <FaExternalLinkAlt size={14} />
                                    <span>Visit Project</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default PublicationsPage;