import cloudinary from "@/libs/cloudinary";
import connectDB from "@/libs/connectDB"
import Post from "@/models/post.model";
import { NextResponse } from "next/server";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "200mb"
        }
    }
}

export const POST = async(request) =>{
    await connectDB();
    try {
        const {userId, type, description, video} = await request.json();
        // console.log(userId, type, description,);
        const uploadedVideo = await cloudinary.uploader.upload(video, {
            resource_type: "video",
        })
        await Post.create({
            userId, type, description, video: uploadedVideo.secure_url
        })
        return NextResponse.json({message: "Posted Successfully"}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Cann't get data"}, {status: 500})
    }
}