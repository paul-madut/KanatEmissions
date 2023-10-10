import React from 'react';
import logo from '../../assets/KE.png'
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="bg-white text-white py-1">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-2xl font-bold">
                    <img className='w-24 shadow-xl' src={logo} />
                </a>

                <div className='space-x-4'>


                    <NavLink to={'login'}>

                        <Button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200">
                            Sign In
                        </Button>
                    </NavLink>

                    <NavLink to={'type'}>
                        <Button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200">
                            Register
                        </Button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;