import connectDB from "@/libs/connectDB";
import Post from "@/models/post.model";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    await connectDB();
    try {
        const {userId, type, description, image} = await request.json();
        // console.log(image);
        const newPost = await Post({
            userId, type, description, image
        })
        await newPost.save();
        return NextResponse.json({message: "Posted Successfully"}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Conn't get data"}, {status: 200});
    }
}