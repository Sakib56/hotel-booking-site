import React from 'react';

const ContactPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                    <p className="mb-2"><strong>Hotel Name:</strong> Nazmus Sakib</p>
                    <p className="mb-2"><strong>Address:</strong> Dinajpur, Bangladesh</p>
                    <p className="mb-2"><strong>Phone:</strong> +880 1234 567 890</p>
                    <p className="mb-2"><strong>Email:</strong> contact@staygohotel.com</p>
                    <p className="mb-2"><strong>Working Hours:</strong> 24/7 Customer Support</p>
                </div>

                {/* Contact Form */}
                <div className="p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
                        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
                        <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4} required></textarea>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Team Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-center mb-6">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 border rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Nazmus Sakib</h3>
                        <p>Founder & CEO</p>
                        <p className="text-gray-500">sakib@staygohotel.com</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Alvi Islam</h3>
                        <p>General Manager</p>
                        <p className="text-gray-500">alvi@staygohotel.com</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Ahmed Jovan</h3>
                        <p>Guest Relations Manager</p>
                        <p className="text-gray-500">jovan@staygohotel.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
