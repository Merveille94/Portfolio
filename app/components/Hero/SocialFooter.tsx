"use client"
import { motion } from 'framer-motion';
import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

// Social Footer Component for Mobile
const SocialFooter = () => {
    return (
        <motion.div
            className="absolute bottom-6 left-0 right-0 md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            <div className="flex justify-center gap-8">
                <a href="https://linkedin.com/in/emanuelemerveille" className="text-gray-700 hover:text-blue-800 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Merveille94" className="text-gray-700 hover:text-blue-800 transition-colors">
                    <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/justemg.de" className="text-gray-700 hover:text-blue-800 transition-colors">
                    <FaInstagram className="w-5 h-5" />
                </a>
            </div>
        </motion.div>
    );
};

export default SocialFooter;