// components/education.tsx
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

                <div className="border-l-2 border-gray-300 pl-6 ml-4 space-y-12">
                    <div className="relative">
                        <div className="absolute -left-10 mt-1 bg-white p-1">
                            <FaGraduationCap className="text-2xl"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Bachelor of Science in Physics</h3>
                            <p className="text-gray-600 mb-2">University Name • 2017 - 2021</p>
                            <p>
                                Completed my bachelor degree with a focus on energy systems and computational physics.
                                Developed strong analytical and problem-solving skills through rigorous coursework in
                                theoretical and applied physics.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-10 mt-1 bg-white p-1">
                            <FaGraduationCap className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Pursuing Master in Energy Engineering</h3>
                            <p className="text-gray-600 mb-2">German University • Applying for 2025</p>
                            <p>
                                Currently preparing applications for Master programs in Energy Engineering at German universities.
                                Interested in sustainable energy systems, nuclear engineering, and energy policy development.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-10 mt-1 bg-white p-1">
                            <FaGraduationCap className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Professional Development</h3>
                            <p className="text-gray-600 mb-2">Frontend Development & C++ Programming</p>
                            <p>
                                Self-taught front-end development skills including React, Next.js, and Tailwind CSS.
                                Advanced knowledge of C++ programming with applications in scientific computing and simulation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;