import React from 'react';
import Feature from './Feature';

function Features(props) {
    return (
        <section className="features py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <Feature title="Feature 1" description="Describe the feature here. What does it do? Why is it beneficial?" />
                {/* Add more <Feature /> components as needed */}
            </div>
        </section>
    );
}

export default Features;