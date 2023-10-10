import React from 'react';
import { ComplexNavbar } from '../Navbar/Nav';
import { Outlet } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

function Feed(props) {
    return (
        <div>
            <ComplexNavbar />
            <Typography variant='h1'>Feed</Typography>
            <Outlet />

        </div>
    );
}

export default Feed;