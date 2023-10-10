import React from 'react';
import { ComplexNavbar } from '../Navbar/Nav';
import { Outlet } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

function Feed(props) {
    return (
        <div>
            <ComplexNavbar />
            <Outlet />

        </div>
    );
}

export default Feed;