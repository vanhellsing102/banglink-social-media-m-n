import Image from 'next/image';
import { IoCameraReverseOutline } from "react-icons/io5";
import LogoutUser from './LogoutUser';

const ProfilePic = () => {
    return (
        <div className='flex justify-between'>
            <div className='relative'>
                <Image className='border-2 border-blue-500 p-1 rounded-full h-[200px] w-[200px]' width={300} height={300} alt='profile pic' src={"/images/profile.jpg"}></Image>
                <form className='absolute top-[160px] left-[150px]'>
                    <div>
                        <label className='cursor-pointer' htmlFor="picture">
                            <IoCameraReverseOutline className='text-3xl border border-slate-500 rounded-full'></IoCameraReverseOutline>
                        </label>
                        <input className='hidden' type="file" name='picture' id='picture'/>
                    </div>
                </form>
            </div>
            <LogoutUser></LogoutUser>
        </div>
    );
};

export default ProfilePic;