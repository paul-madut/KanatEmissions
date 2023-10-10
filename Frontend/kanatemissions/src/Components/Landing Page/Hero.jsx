import React from 'react';
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

function Hero(props) {
    return (
        <section className="hero text-[your-text-color] py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-6xl text- font-bold mb-8  text-White">KanatEmissions</h1>
                <p className="text-xl mb-8">Put an end to the cycle of unneccesary tech waste.</p>
                <NavLink to={'type'}>
                    <Button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200">
                        Sign Up
                    </Button>
                </NavLink>
            </div>
        </section>
    );
}

export default Hero;