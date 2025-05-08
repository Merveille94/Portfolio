"use client"
import { motion } from 'framer-motion';
import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

// Social Links Sidebar Component
const SocialSidebar = () => {
    return (
        <motion.div
            className="fixed right-6 bottom-0 hidden md:flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            <a href="https://linkedin.com/in/emanuelemerveille" className="text-gray-700 hover:text-blue-800 transition-colors">
                <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Merveille94" className="text-gray-700 hover:text-blue-800 transition-colors">
                <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/justemg.de" className="text-gray-700 hover:text-blue-800 transition-colors">
                <FaInstagram className="w-5 h-5" />
            </a>
            <div className="w-px h-24 bg-gray-400 my-2"></div>
        </motion.div>
    );
};

export default SocialSidebar;