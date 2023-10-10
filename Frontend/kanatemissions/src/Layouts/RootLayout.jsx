import React from 'react';
import { ComplexNavbar } from '../Components/Navbar/Nav';

import { NavLink, Outlet } from 'react-router-dom';

function RootLayout(props) {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>

    );
}

export default RootLayout;