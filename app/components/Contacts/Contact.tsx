"use client";
import React from 'react';
import Welcome from "@/app/components/Generals/Welcome";

const Contact: React.FC = () => {
    return (
        <section className="container mx-auto pt-12 pb-20 bg-white overflow-hidden">

            <Welcome Heading="Contact" AboutTitle="Contact" AboutSubTitle="Home" AboutSubSubTitle="Contact"/>

            <div className="relative z-10 px-4 md:px-6">

                {/* Get in touch text */}
                <p className="text-lg text-gray-600 mb-8">Get in touch</p>

                {/* Form and Map Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-4 font-medium hover:bg-gray-900 transition-colors duration-300"
                                >
                                    Submit Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] relative bg-gray-100">
                        {/* Google Maps iframe would normally go here - using placeholder */}
                        <div className="w-full h-full bg-gray-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.3770455822!2d17.573397079760982!3d59.32893835412544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1713801603766!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;