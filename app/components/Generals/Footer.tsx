"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Merveille94", label: "GitHub" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/emanuelemerveille", label: "LinkedIn" },
        { icon: FaInstagram, href: "https://Instagram.com/justemg.de", label: "Instagram" },
        { icon: FaEnvelope, href: "mailto:emanueleguehi@gmail.com", label: "Email" }
    ];

    return (
        <footer className="bg-white border-t border-gray-100 py-6 mt-12 w-full">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Name and tagline */}
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-gray-800 font-medium">
                            <Image src="/a2.png"
                                   alt="Emanuele Merveille"
                                   className="object-cover"
                                   height="200"
                                   width="200"

                            />
                        </h3>
                        <p className="text-gray-500 text-sm">Physics graduate & Frontend Web Developer </p>
                    </div>

                    {/* Social links */}
                    <div className="flex space-x-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-500 hover:text-blue-600 transition-colors"
                            >
                                <social.icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Emanuele Merveille Guehi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;