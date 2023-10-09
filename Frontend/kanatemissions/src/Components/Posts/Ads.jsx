import React from 'react';
import AdsPage from './AdPage';
import { ComplexNavbar } from '../Navbar/Nav';
import { Typography } from '@material-tailwind/react';
import { DefaultPagination } from './Pagination';

function Ads(props) {

    const adsData = [
        {
            id: 1,
            title: 'Vintage Chair',
            description: 'Comfortable and in good condition.',
            points: '50.00',
            imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        },
        {
            id: 2,
            title: 'Gaming Laptop',
            description: 'High performance, 16GB RAM, 1TB SSD.',
            points: '1200.00',
            imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        },
        // ... other ads
    ];

    return (
        <div>
            <ComplexNavbar />
            <Typography variant='h1' className='text-start text-6xl pt-6 ml-24'>Ads</Typography>
            <AdsPage adsData={adsData} />

            <DefaultPagination />

        </div>
    );
}

export default Ads;
