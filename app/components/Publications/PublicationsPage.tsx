"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaJs, FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

// Define types for project
interface GithubProject {
    id: string;
    title: string;
    description: string;
    tags: string[];
    icon: React.ReactNode;
    link: string;
}

interface WebProject {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

interface UndergraduateProject {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const PublicationsPage: React.FC = () => {
    // State to track which project is being previewed (if any)
    const [activePreview, setActivePreview] = useState<string | null>(null);

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
    const githubProjects: GithubProject[] = [
        {
            id: "github1",
            title: "Carbon Footprint Calculator",
            description: "Interactive visualization of common algorithms including sorting, pathfinding, and graph traversals using C++",
            tags: ["C++", "Algorithms", "Data Structures"],
            icon: <SiCplusplus className="text-blue-400" />,
            link: "https://github.com/Merveille94/CarbonFootprintCpp",
        },
        {
            id: "github2",
            title: "Solar Energy Potential",
            description: "Machine learning model that predicts weather patterns based on historical data using Python and scikit-learn",
            tags: ["Javascript", "Html", "NREL API"],
            icon: <FaJs className="text-blue-400" />,
            link: "https://github.com/Merveille94/Solar-Energy-Potential_Calculator",
        },
        {
            id: "github3",
            title: "Radiation Dose Calculator",
            description: "C++ application for estimating radiation exposure from various sources and calculate effective doses (Just for Side project not for real medical diagnostic)",
            tags: ["C++", "Radiation", "Radiation Safety"],
            icon: <SiCplusplus className="text-blue-400" />,
            link: "https://github.com/Merveille94/Radiation-Dose_Calculator",
        }
    ];

    // Web development projects
    const webProjects: WebProject[] = [
        {
            id: "web1",
            title: "This Website - made by me",
            description: "I have decided to build my very own website using the skills i have acquired for about 4yrs of programming, " +
                "this is not just for show but a way to for me to structure my life a little better, and give you front row seat on this journey with me",
            image: "/B (20).png",
            tags: ["React", "NextJS", "Tailwind CSS"],
            link: "https://github.com/Merveille94/Portfolio",
        },
        {
            id: "web2",
            title: "MedAdhere - something I did during my volunteerism",
            description: "At MedAdhere, the mission is to enhance healthcare outcomes by simplifying medication adherence and streamlining patient-provider communication." +
                " We are dedicated to empowering individuals and healthcare professionals through innovation and data-driven insights. The App - Is still under development ",
            image: "/B (22).png",
            tags: ["TypeScript", "NextJS", "MongoDB"],
            link: "https://www.medadheregh.org/",
        },
        {
            id: "web3",
            title: "Ephod Music - Gospel Musics Studio",
            description: " (Made this in Collaboration with WhiteFlamingo a startup I joined few months ago still under development) " +
                "First of its kind, an opportunity to bring out young talents with us through our organization, spirit of special music. " +
                "As both a music record label and performance powerhouse, we deliver exceptional live performances, high-quality studio recordings, and artist development services. " +
                "Our mission is to nurture and promote talents that recognize all the hard and soft skills of industry standards. Ephod Music offers a range of services including an organization, recording," +
                " distribution, and talent management, ensuring that each artist we work with reaches their full potential and connects deeply with their audience.",
            image: "/B (24).png",
            tags: ["React", "Firebase", "Tailwind CSS"],
            link: "https://ephod-music.vercel.app/",
        }
    ];

    // undergraduate project
    const undergraduateProject: UndergraduateProject = {
        id: "undergrad",
        title: "Design and Construction of Departmental Liquid Nitrogen Plant",
        description: "The project addressed a critical need for the Physics Department at KNUST: a functional liquid nitrogen plant. Using Pressure Swing Adsorption (PSA) technology, we designed and constructed a cost-effective system capable of producing high-purity nitrogen (99.98%) at a rate of up to 60 L/day.",
        image: "/U-P.jpg",
        link: "/pages/undergraduate", // This would link to the detailed description page
    };

    // Function to handle preview toggling
    const togglePreview = (id: string) => {
        if (activePreview === id) {
            setActivePreview(null);
        } else {
            setActivePreview(id);
        }
    };

    return (
       <section className="w-full px-4 py-12 bg-gray-900 text-gray-100">
           <div className="max-w-6xl mx-auto ">
               <motion.h1
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-4xl font-bold text-blue-400 mb-8 text-center"
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
                   <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-blue-300 mb-6">
                       Featured Undergraduate Project
                   </motion.h2>

                   <motion.div
                       variants={itemVariants}
                       className="relative overflow-hidden rounded-lg shadow-md hover:shadow-blue-900/50 hover:shadow-xl transition-shadow duration-300"
                   >
                       <motion.div
                           whileHover={{ scale: 1.03 }}
                           transition={{ duration: 0.3 }}
                           className="relative"
                       >
                           <div className="w-full h-64 relative">
                               <Image
                                   src={undergraduateProject.image}
                                   alt={undergraduateProject.title}
                                   fill
                                   className="object-cover"
                                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                               />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                               <h3 className="text-2xl font-bold text-blue-300 mb-2">{undergraduateProject.title}</h3>
                               <p className="text-gray-300 mb-4">{undergraduateProject.description}</p>
                               <motion.div
                                   whileHover={{ scale: 1.05 }}
                                   whileTap={{ scale: 0.95 }}
                                   className="self-start"
                               >
                                   <Link href={undergraduateProject.link} className="bg-blue-600 text-white py-2 px-4 rounded-md inline-flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                                       <span>View Detailed Process</span>
                                       <FaExternalLinkAlt size={14} />
                                   </Link>
                               </motion.div>
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
                   <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-blue-300 mb-6">
                       Coding Projects
                   </motion.h2>

                   <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-6">
                       <FaGithub size={18} className="text-blue-400" />
                       <span className="text-gray-300">GitHub Repositories</span>
                   </motion.div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {githubProjects.map((project) => (
                           <motion.div
                               key={project.id}
                               variants={itemVariants}
                               whileHover={{ y: -5 }}
                               className="bg-gray-900 rounded-lg overflow-hidden border border-blue-900/30 shadow-sm hover:shadow-md hover:shadow-blue-900/20 transition-all duration-300"
                           >
                               <div className="p-6">
                                   <div className="flex items-center justify-between mb-4">
                                       <div className="bg-black p-3 rounded-full shadow-sm shadow-blue-900/20">
                                           {project.icon}
                                       </div>
                                       <span className="text-xs font-medium px-2 py-1 bg-blue-900/40 text-blue-300 rounded-full">
                                        {project.tags[0]}
                                    </span>
                                   </div>
                                   <h3 className="text-lg font-bold text-blue-300 mb-2">{project.title}</h3>
                                   <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                   <div className="flex flex-wrap gap-2 mb-4">
                                       {project.tags.slice(1).map((tag, index) => (
                                           <span key={index} className="text-xs text-gray-400 px-2 py-1 bg-gray-800 rounded-full">
                                            {tag}
                                        </span>
                                       ))}
                                   </div>
                                   <motion.div
                                       whileHover={{ scale: 1.05 }}
                                       whileTap={{ scale: 0.95 }}
                                   >
                                       <Link
                                           href={project.link}
                                           className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
                                       >
                                           <FaGithub size={16} />
                                           <span>View Repository</span>
                                       </Link>
                                   </motion.div>
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
                   <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-blue-300 mb-6">
                       Web Development Projects
                   </motion.h2>

                   <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-6">
                       <FaReact size={18} className="text-blue-400" />
                       <span className="text-gray-300">Interactive Web Applications</span>
                   </motion.div>

                   <div className="space-y-12">
                       {webProjects.map((project, index) => (
                           <motion.div
                               key={project.id}
                               variants={itemVariants}
                               className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                           >
                               {/* Project Image */}
                               <motion.div
                                   className="w-full md:w-1/2"
                                   whileHover={{ scale: 1.02 }}
                                   onClick={() => togglePreview(project.id)}
                               >
                                   <div className="relative overflow-hidden rounded-lg shadow-md shadow-blue-900/20 cursor-pointer">
                                       <div className="w-full h-64 relative">
                                           <Image
                                               src={project.image}
                                               alt={project.title}
                                               fill
                                               className="object-cover"
                                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                           />
                                       </div>

                                       {/* Preview overlay */}
                                       <motion.div
                                           className="absolute inset-0 bg-black/70 flex items-center justify-center"
                                           initial={{ opacity: 0 }}
                                           animate={{ opacity: activePreview === project.id ? 1 : 0 }}
                                           transition={{ duration: 0.3 }}
                                       >
                                           <div className="text-gray-100 text-center p-6">
                                               <h4 className="text-xl font-bold text-blue-300 mb-2">{project.title}</h4>
                                               <p className="mb-4 text-gray-300">{project.description}</p>
                                               <motion.div
                                                   whileHover={{ scale: 1.05 }}
                                                   whileTap={{ scale: 0.95 }}
                                                   onClick={(e) => e.stopPropagation()}
                                               >
                                                   <Link
                                                       href={project.link}
                                                       className="inline-flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-500 transition-colors"
                                                   >
                                                       <FaExternalLinkAlt size={14} />
                                                       <span>Visit Site</span>
                                                   </Link>
                                               </motion.div>
                                           </div>
                                       </motion.div>
                                   </div>
                               </motion.div>

                               {/* Project Info */}
                               <div className="w-full md:w-1/2">
                                   <h3 className="text-xl font-bold text-blue-300 mb-3">{project.title}</h3>
                                   <p className="text-gray-300 mb-4">{project.description}</p>
                                   <div className="flex flex-wrap gap-2 mb-4">
                                       {project.tags.map((tag, idx) => (
                                           <span key={idx} className="text-xs font-medium px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full">
                                            {tag}
                                        </span>
                                       ))}
                                   </div>
                                   <motion.div
                                       whileHover={{ scale: 1.05 }}
                                       whileTap={{ scale: 0.95 }}
                                   >
                                       <Link
                                           href={project.link}
                                           className="inline-flex items-center space-x-2 bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors text-sm"
                                       >
                                           <FaExternalLinkAlt size={14} />
                                           <span>Visit Project</span>
                                       </Link>
                                   </motion.div>
                               </div>
                           </motion.div>
                       ))}
                   </div>
               </motion.section>
           </div>
       </section>
    );
};

export default PublicationsPage;