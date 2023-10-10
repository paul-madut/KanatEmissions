import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function Feature(props) {
    return (

        <div className='h-full w-full flex'>

            <Card className="feature mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        className="absolute left-0 right-0 mx-auto h-full w-full object-cover"
                        src={[props.img]}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {props.title}
                    </Typography>
                    <Typography>
                        {props.description}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}

export default Feature;