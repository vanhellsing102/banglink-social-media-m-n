"use client";
import Link from 'next/link';
import { useState } from 'react';
import { PiEye, PiEyeClosed } from "react-icons/pi";


const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div className='flex items-center justify-center'>
           <div className='md:w-1/2 p-5 border border-slate-500 rounded-md'>
                <form onSubmit={handleLogin} className='space-y-2 w-full'>
                <div>
                    <label className='block text-sm font-semibold'>Email:</label>
                    <input type="email" name='email' className='appearance-none w-full py-1 px-5 rounded-md outline-none border border-slate-400'/>
                </div>
                <div>
                    <label className='block text-sm font-semibold'>Password:</label>
                    <div className='relative'>
                        <input type={`${showPassword ? "text" : "password"}`} name='password' className='appearance-none w-full py-1 px-5 rounded-md outline-none border border-slate-400'/>
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute top-2 right-3'>
                            {
                                showPassword ? <PiEye></PiEye> : <PiEyeClosed></PiEyeClosed>
                            }
                        </span>
                    </div>
                </div>
                <button type='submit' className='w-full bg-gray-400 hover:bg-blue-400 cursor-pointer rounded-md py-1 font-semibold duration-300'>Login Now</button>
            </form> 
            <Link href={"/register"} className='text-red-500 mt-5 border-b border-dotted inline-block text-sm'>Go To Register</Link>
           </div>
        </div>
    );
};

export default page;