"use client";
import Image from 'next/image';
import { IoCameraReverseOutline } from "react-icons/io5";
import LogoutUser from './LogoutUser';
import { useState } from 'react';
import { getAuthContext } from '@/context/AuthContextProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
// import useGetCurrentUserProfilePicture from '@/hooks/useGetCurrentUserProfilePicture';

const ProfilePic = () => {
    const [profilePictureData, setProfilePictureData] = useState(null);
    const {user} = getAuthContext();
    const userId = user?._id;
    // const {profilePicture, refetch} = useGetCurrentUserProfilePicture();
    // console.log(profilePictureData);

    if(profilePictureData && userId){
        const reader = new FileReader();
        reader.readAsDataURL(profilePictureData);
        reader.onloadend = () =>{
            const profilePicture = reader.result;
            // console.log(profilePicture, userId);
            axios.post('/api/upload/profilePicture', {
                userId, profilePicture
            })
            .then(res =>{
                toast.success(res.data.message);
                setProfilePictureData(null);
                refetch();
            })
        }
    }
    return (
        <div className='flex justify-between'>
            <div className='relative'>
                {/* <Image className='border-2 border-blue-500 p-1 rounded-full h-[200px] w-[200px]' width={300} height={300} alt='profile pic' src={profilePicture ? profilePicture : "/images/profile.avif"}></Image> */}
                <Image className='border-2 border-blue-500 p-1 rounded-full h-[200px] w-[200px]' width={300} height={300} alt='profile pic' src={"/images/profile.avif"}></Image>
                <form className='absolute top-[160px] left-[150px]'>
                    <div>
                        <label className='cursor-pointer' htmlFor="picture">
                            <IoCameraReverseOutline className='text-3xl border border-slate-500 rounded-full'></IoCameraReverseOutline>
                        </label>
                        <input onChange={(e) =>setProfilePictureData(e.target.files[0])} className='hidden' type="file" name='picture' id='picture'/>
                    </div>
                </form>
            </div>
            <LogoutUser></LogoutUser>
        </div>
    );
};

export default ProfilePic;