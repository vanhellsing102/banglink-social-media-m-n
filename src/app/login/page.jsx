"use client";
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { PiEye, PiEyeClosed } from "react-icons/pi";


const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        axios.post("/api/auth/login", {email, password})
        .then(res =>{
            if(res.data.status){
                // console.log(res.data.user);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                return toast.success(res.data.message);
            }
            toast.error(res.data.message);
        })
    }
    return (
        <div className='flex items-center justify-center'>
           <div className='md:w-1/2 p-5 border border-slate-500 rounded-md'>
                <form onSubmit={handleLogin} className='space-y-2 w-full'>
                <div>
                    <label className='block text-sm font-semibold'>Email:</label>
                    <input type="email" name='email' required className='appearance-none w-full py-1 px-5 rounded-md outline-none border border-slate-400'/>
                </div>
                <div>
                    <label className='block text-sm font-semibold'>Password:</label>
                    <div className='relative'>
                        <input type={`${showPassword ? "text" : "password"}`} name='password' required className='appearance-none w-full py-1 px-5 rounded-md outline-none border border-slate-400'/>
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