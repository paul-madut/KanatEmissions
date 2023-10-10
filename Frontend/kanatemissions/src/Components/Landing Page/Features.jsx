import React from 'react';
import Feature from './Feature';

function Features(props) {
    return (
        <section className="features py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <Feature title="Make sure your tech is used" description="We send your unwanted devices to areas in need of them." img="https://5.imimg.com/data5/SELLER/Default/2022/1/QC/YU/AX/82368182/computer-lab-jb-028-500x500.jpg" />
                <Feature title="Not Abused" description="Instead of places that don't." img="https://i.cbc.ca/1.4494214.1516321437!/fileImage/httpImage/ewaste-2.jpg" />
                <Feature title="And cherished" description="And make sure they're used for along time." img="https://www.himss.org/sites/hde/files/media/image/2020/06/26/how-longevity-will-boost-the-silver-economy-1200x630.png" />
            </div>
        </section>
    );
}

export default Features;