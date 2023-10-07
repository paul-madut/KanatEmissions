import React from 'react';
import logo from '../../assets/KE.png'

function Navbar(props) {
    return (
        <nav className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-2xl font-bold">
                    <img className='w-24' src={logo} />
                </a>

                <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}

export default Navbar;