import React from 'react';

const GeneralFooter = () => {
    return (
        <div className="bg-gray-900 backdrop-blur-sm border-t border-blue-950/30">
            <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200">
                <div className="mb-2 md:mb-0">
                    &copy; {new Date().getFullYear()} Made by Emanuele Merveille Guehi using Nextjs. All rights reserved.
                </div>
                <div className="flex space-x-4">
                    <a href="https://github.com/Merveille94" target='_blank' className="hover:text-blue-400 transition-colors">GitHub</a>
                    <a href="https://linkedin.com/in/emanuelemerveille" target='_blank' className="hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="/pages/contact"  className="hover:text-blue-400 transition-colors">Contact</a>
                    <a href="/pages/about" className="hover:text-blue-400 transition-colors">CV</a>
                </div>
            </div>
        </div>
    );
};

export default GeneralFooter;