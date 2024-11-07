import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = function (e) {
        e.preventDefault();
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border 2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => {
                    submitHandler(e);
                    setEmail('');
                    setPassword('');
                }}
                    className='flex flex-col items-center justify-center text-white'>
                    <input onChange={(e) => {
                        setEmail(e.target.value);
                    }} value={email} required className='outline-none font-medium bg-transparent border-2 border-emerald-600 py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    
                    <input onChange={(e) => {
                        setPassword(e.target.value);
                    }} value={password} required  className='mt-3 font-medium outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />

                    <button className='mt-7 outline-none hover:bg-emerald-700 bg-emerald-600  px-8 py-2 w-full rounded-full text-lg'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login