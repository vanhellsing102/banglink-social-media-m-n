import connectDB from "@/libs/connectDB";
import Post from "@/models/post.model";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    connectDB();
    try {
        const {userId, type, text} = await request.json();
        // console.log(userId, type, text);
        const newPost = await Post({
            userId, type, text
        });
        await newPost.save();
        return NextResponse.json({message: "Posted Successfully"}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Cann't get data"}, {status: 500});
    }
}