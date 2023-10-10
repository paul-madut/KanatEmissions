import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function loginUser(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const data = await response.json();
        console.log(data)
    }
    return (
        <>
            <div className='background flex items-center justify-center h-screen w-screen bg-cover bg-[url("https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")]'>
                <Card className="w-96 h-5/6 p-6 flex  justify-center">
                    <CardHeader
                        variant="gradient"
                        color="gray"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Sign In
                        </Typography>
                    </CardHeader>
                    <form onSubmit={(e) => { loginUser(e) }}>
                        <CardBody className="flex flex-col gap-4">
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" label="Email" size="lg" />
                            <Input label="Password" size="lg" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                            <div className="-ml-2.5">
                                <Checkbox label="Remember Me" />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button type="submit" variant="gradient" fullWidth>
                                Sign In
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Don&apos;t have an account?
                                <NavLink to="../register"><Typography
                                    as="a"
                                    href="#signup"
                                    variant="small"
                                    color="blue-gray"
                                    className="ml-1 font-bold"
                                >
                                    Sign up
                                </Typography></NavLink>
                            </Typography>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default Login