import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Navbar from './Navbar';
import Footer from './Footer';

function Landing() {



    return (

        <div className=" bg-[url('https://images.unsplash.com/photo-1597535827808-73616636cc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] text-white">
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>

    );
}

export default Landing;