import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');

    async function registerUser(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                name: name,
                userName: userName,
                email: email,
                password: password
            })
        })

        const data = await response.json();
        console.log(data)
    }

    return (
        <>
            <div className='background flex justify-center h-screen w-screen bg-cover bg-[url("https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")]'></div>
        </>
    )
}

export default Register