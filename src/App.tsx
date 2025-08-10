import React from 'react';

// Main LandingPage component
const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header Section */}
            <header className="bg-blue-600 text-white py-6">
                <nav className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">GoCohort</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#features" className="hover:underline">Features</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="flex-grow flex items-center justify-center bg-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Create Ads Efficiently with AI</h2>
                    <p className="text-lg text-gray-600 mb-6">Empower your business with smart ad solutions, creatives, and landing pages that integrate seamlessly into your feedback process.</p>
                    <a href="#signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-blue-500">Get Started</a>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="py-12 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="font-semibold text-xl mb-2">AI-Powered Creatives</h4>
                            <p className="text-gray-600">Generate high-quality advertisement creatives effortlessly using our smart AI tools.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="font-semibold text-xl mb-2">Landing Page Builder</h4>
                            <p className="text-gray-600">Create stunning landing pages that convert visitors into customers.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="font-semibold text-xl mb-2">Integrated Feedback Process</h4>
                            <p className="text-gray-600">Get actionable insights from your ad campaigns to improve performance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">About GoCohort</h3>
                    <p className="text-lg text-gray-600 mb-4">At GoCohort, we are committed to helping businesses thrive through innovative advertising solutions powered by AI.</p>
                    <a href="#signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-blue-500">Learn More</a>
                </div>
            </section>

            {/* Footer Section */}
            <footer id="contact" className="bg-blue-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>© 2023 GoCohort. All rights reserved.</p>
                    <p className="mt-2">Follow us on social media!</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;