"use client";
import { getAuthContext } from "@/context/AuthContextProvider";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";


const ProfileAndContact = () => {
    const {user} = getAuthContext();
    const userId = user?._id;
    return (
        <div className='flex justify-end'>
            <ul className="flex items-center gap-3">
                <li className="bg-white border border-white/20 rounded-full p-2">
                    <Link href={"/"}>
                        <LuMessageCircleMore></LuMessageCircleMore>
                    </Link>
                </li>
                <li className="bg-white border border-white/20 rounded-full p-2">
                    <Link href={"/"}>
                        <IoMdNotificationsOutline></IoMdNotificationsOutline>
                    </Link>
                </li>
                <li className="bg-white border border-white/20 rounded-full p-2">
                    <Link href={`/profile/${userId}`}>
                        <FaRegCircleUser></FaRegCircleUser>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileAndContact;