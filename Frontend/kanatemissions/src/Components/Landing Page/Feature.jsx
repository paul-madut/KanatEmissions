import React from 'react';

function Feature(props) {
    return (
        <div className="feature">
            <h2 className="text-2xl font-bold mb-6">{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Feature;