// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiHome, FiInfo, FiFileText, FiBook, FiMail } from 'react-icons/fi';
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

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
                        <div className="relative h-16 w-48 sm:h-20 sm:w-56 md:h-10 md:w-64">
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

            {/* Mobile Menu - Enhanced with blue and black theme */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-gray-900 shadow-lg`}>
                <div className="flex flex-col justify-center px-4 py-3 space-y-2 border-t border-blue-500">
                    <MobileNavLink
                        href="/"
                        onClick={() => setIsOpen(false)}
                        active={pathname === "/"}
                        icon={<FiHome className="mr-2" />}
                    >
                        Home
                    </MobileNavLink>
                    <MobileNavLink
                        href="/pages/about"
                        onClick={() => setIsOpen(false)}
                        active={pathname === "/pages/about"}
                        icon={<FiInfo className="mr-2" />}
                    >
                        About
                    </MobileNavLink>
                    <MobileNavLink
                        href="/pages/news"
                        onClick={() => setIsOpen(false)}
                        active={pathname === "/pages/news"}
                        icon={<FiFileText className="mr-2" />}
                    >
                        News
                    </MobileNavLink>
                    <MobileNavLink
                        href="/pages/publications"
                        onClick={() => setIsOpen(false)}
                        active={pathname === "/pages/publications"}
                        icon={<FiBook className="mr-2" />}
                    >
                        Publications
                    </MobileNavLink>
                    <MobileNavLink
                        href="/pages/contact"
                        onClick={() => setIsOpen(false)}
                        active={pathname === "/pages/contact"}
                        icon={<FiMail className="mr-2" />}
                    >
                        Contact
                    </MobileNavLink>
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

const MobileNavLink = ({
                           href,
                           children,
                           onClick,
                           active = false,
                           icon
                       }: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
    active?: boolean;
    icon?: React.ReactNode;
}) => (
    <Link
        href={href}
        className={`flex items-center font-medium py-3 px-4 rounded-md transition-all duration-200 ${
            active
                ? 'bg-blue-600 text-white'
                : 'text-blue-300 hover:bg-gray-800 hover:text-blue-100'
        }`}
        onClick={onClick}
    >
        {icon}
        {children}
    </Link>
);

export default Navbar;