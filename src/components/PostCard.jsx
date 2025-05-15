"use client";
import { getAuthContext } from "@/context/AuthContextProvider";
import moment from "moment";
import Image from "next/image";
import Respond from "./Respond/Respond";


const PostCard = ({post}) => {
    const {user} = getAuthContext();
    const {text, description, image, video, createdAt} = post;
    const date = moment(createdAt).format("dddd, MMMM do YYYY");
    // console.log(video);
    return (
        <div className="border relative border-white/50 w-full rounded-md bg-slate-100">
            <div className="flex items-center gap-3 p-2">
                <Image className="border border-blue-500 rounded-full h-[50px] w-[50px]" width={50} height={50} src={"/images/profile.jpg"} alt={user?.name}></Image>
                <div>
                    <h2 className="text-lg font-medium capitalize">{user?.name}</h2>
                    <p className="text-sm">{date}</p>
                </div>
            </div>
            {/* <div className="divider my-0"></div> */}
            <div>
                {
                    description && 
                    <p className="px-2 py-1 text-[16px]">{description}</p>
                }
            </div>
            <div className="w-full min-h-[250px] flex justify-center items-center bg-blue-100">
                {
                    text && <p className="px-2">{text}</p>
                    ||
                    image &&
                    <Image width={100} height={100} src={image} alt="conn't resolve this image"></Image>
                    ||
                    video && <video src={video} controls className="h-[250px] w-full"></video>
                }
            </div>
            <Respond></Respond>
        </div>
    );
};

export default PostCard;