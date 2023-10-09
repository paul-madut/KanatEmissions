import React from 'react';
import { ComplexNavbar } from '../Navbar/Nav';
import { SortableTable } from './lead';

function Leaderboard(props) {
    return (
        <div>
            <ComplexNavbar />
            <SortableTable />

        </div>
    );
}

export default Leaderboard;