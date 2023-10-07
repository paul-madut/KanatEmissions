import React from 'react';

function Hero(props) {
    return (
        <section className="hero bg-[your-bg-color] text-[your-text-color] py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">Your Product Name</h1>
                <p className="text-xl mb-8">Short description or tagline here.</p>
                <a href="#" className="bg-[your-button-color] text-[your-button-text-color] px-6 py-3 rounded-full">Get Started</a>
            </div>
        </section>
    );
}

export default Hero;