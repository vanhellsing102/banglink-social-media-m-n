"use client";
import { getAuthContext } from "@/context/AuthContextProvider";
import UploadText from "./UploadText";
import UploadImage from "./UploadImage";
import UploadVideo from "./UploadVideo";


const Upload = () => {
    const {user} = getAuthContext();
    return (
        <div>
            <h2 className="text-center mt-3">
                <span className="bg-white/30 p-1 rounded-md border border-blue-300 block">Hi I'm</span>
                <span className="text-2xl font-black capitalize">{user? user?.name : "Unknown Person"}</span>
            </h2>
            <div className="mt-2 flex items-center justify-center gap-7">
                <p className="font-semibold">What's on your mind?</p>
                <UploadText></UploadText>
                <UploadImage></UploadImage>
                <UploadVideo></UploadVideo>
            </div>
        </div>
    );
};

export default Upload;