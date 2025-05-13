"use client";
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formState);
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                {/* Academic-style heading with blue accent */}
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-gray-400 mb-3">
                        Contact me
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <div className="h-1 w-16 bg-blue-600"></div>
                        <p className="text-lg text-gray-600 font-light uppercase tracking-wider">📩</p>
                        <div className="h-1 w-16 bg-blue-600"></div>
                    </div>
                    <p className="text-sm text-gray-300">🙏 Website still under development 😊 my apology, I have been busy lately messaging down...</p>
                </div>

                {/* Main contact content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column - Contact form */}
                    <div className="lg:col-span-2 bg-black shadow-xl rounded-lg p-8 border-t-4 border-blue-600">
                        <h3 className="text-2xl font-bold mb-6 text-gray-200">Get in touch</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border text-white border-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border text-white border-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border text-white border-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border text-white border-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-black text-white border-1 border-white px-8 py-3 rounded-md font-medium hover:bg-blue-600 hover:border-none transition-colors duration-300 flex items-center gap-2"
                                >
                                    Submit Inquiry
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right column - Contact details and map */}
                    <div className="space-y-8">
                        {/* Contact information */}
                        <div className="bg-black text-white p-8 rounded-lg shadow-xl">
                            <h3 className="text-xl font-bold mb-6 border-b border-blue-600 pb-2">Contact Information</h3>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <MapPin className="text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Location</p>
                                        <p className="text-gray-300">Marburg, Germany</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Phone className="text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Phone Number</p>
                                        <p className="text-gray-300">+46 XXX XXXX XXXX</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Mail className="text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Work / Academic Email Address </p>
                                        <p className="text-gray-300">merveilleg.de@gmail.com</p>
                                        <p className="text-gray-300">emanueleguehi@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Clock className="text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Available</p>
                                        <p className="text-gray-300">Fridays-Sundays: 3:00 PM - 9:00 PM</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Map */}
                        <div className="h-64 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25948.583514962376!2d8.746336150000001!3d50.80905145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd47fa0c276bcd%3A0x420dad183b1f3bd8!2sMarburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1713801603766!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;