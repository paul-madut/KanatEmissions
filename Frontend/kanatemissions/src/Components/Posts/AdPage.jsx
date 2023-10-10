// AdsPage.js
import React from 'react';
import AdCard from './AdCard';
import { useState } from 'react';


function AdPage(props) {

    const [adsData, setAdsData] = useState(props.adsData);

    return (
        <div className="container mx-auto my-12 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adsData.map(ad => (
                <AdCard id={ad.id} title={ad.title} description={ad.description} points={ad.points} imageUrl={ad.imageUrl} />
            ))}
        </div>
    );
}

export default AdPage;
