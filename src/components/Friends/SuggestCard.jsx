"use client";
import { getAuthContext } from '@/context/AuthContextProvider';
import Image from 'next/image';

const SuggestCard = ({requestUser}) => {
    const {user} = getAuthContext();
    const userId = user?._id;
    console.log(userId);
    // console.log(user);
    const handleSentRequest = () =>{
        console.log(requestUser?._id)
    }
    return (
        <div className='flex justify-center items-center gap-7 py-1 bg-slate-300 rounded-md px-10'>
            <Image className='rounded-full border border-blue-500' width={40} height={40} src={"/images/profile.avif"} alt='profile'></Image>
            <h2 className='text-xl font-semibold text-slate-800 capitalize'>{requestUser?.name}</h2>
            <button onClick={handleSentRequest} className='text-sm hover:bg-blue-300 bg-slate-200 rounded-md px-3 py-1 cursor-pointer'>sent request</button>
        </div>
    );
};

export default SuggestCard;