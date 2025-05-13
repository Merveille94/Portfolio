// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-200/20 py-2' : 'bg-transparent py-4 '}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center pb-8">
                        <div className="relative h-16 w-48 sm:h-20 sm:w-56 md:h-16 md:w-64">
                            <Image
                                src="/a2.png"
                                alt="Logo Emanuele initials"
                                width={240}
                                height={90}
                                priority
                                className="object-contain text-white"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6 ">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/pages/about">About</NavLink>
                        <NavLink href="/pages/news">News</NavLink>
                        <NavLink href="/pages/publications">Publications</NavLink>
                        <NavLink href="/pages/contact">Contact</NavLink>
                        <div className="flex items-center">
                        </div>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-black focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-white`}>
                <div className="flex flex-col px-4 pb-4 space-y-4">
                    <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                    <MobileNavLink href="/pages/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                    <MobileNavLink href="/pages/news" onClick={() => setIsOpen(false)}>News</MobileNavLink>
                    <MobileNavLink href="/pages/publications" onClick={() => setIsOpen(false)}>Publications</MobileNavLink>
                    <MobileNavLink href="/pages/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="text-gray-400 font-medium relative group">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
    </Link>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
    <Link href={href} className="text-black font-medium py-2 block" onClick={onClick}>
        {children}
    </Link>
);

export default Navbar;
