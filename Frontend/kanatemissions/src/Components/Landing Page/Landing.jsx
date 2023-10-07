import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Navbar from './Navbar';
import Footer from './Footer';


function Landing() {
    return (
        <div className="bg-blue-400 text-white">
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}

export default Landing;