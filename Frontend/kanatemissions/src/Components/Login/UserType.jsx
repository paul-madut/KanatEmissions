import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function UserType(props) {
    return (
        <div className='background flex flex-col space-y-24 space-x-8 items-center justify-center h-screen w-screen bg-cover bg-[url("https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")]'>
            <Typography variant='h1' className=' text-white text-6xl'>Are you a...</Typography>
            <div className='flex space-x-12'>

                <Card className="mt-6 w-96">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Company
                        </Typography>
                        <Typography>
                            You have devices you are trying to give away, and you want to find a place to donate them to.
                        </Typography>
                    </CardBody>
                    <div className='flex align-end'>

                        <CardFooter className="pt-0">
                            <Button>Sign up</Button>
                        </CardFooter>

                        <CardFooter className="pt-0">
                            <Button>Sign In</Button>
                        </CardFooter>
                    </div>
                </Card>
                <Card className="mt-6 w-96">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Consumer
                        </Typography>
                        <Typography>
                            You are looking for a device to use, and you want to find a place to get one.
                        </Typography>
                    </CardBody>
                    <div className='flex align-end'>

                        <CardFooter className="pt-0">
                            <Button>Sign up</Button>
                        </CardFooter>

                        <CardFooter className="pt-0">
                            <Button>Sign In</Button>
                        </CardFooter>
                    </div>
                </Card>



            </div>
        </div>
    );
}

export default UserType;