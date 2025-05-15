import connectDB from "@/libs/connectDB"
import Post from "@/models/post.model";
import { NextResponse } from "next/server";

export const GET = async() =>{
    await connectDB();
    try {
        const videoPosts = await Post.find({type: "video"}).sort({createdAt: -1});
        return NextResponse.json(videoPosts, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "video not found"}, {status: 204})
    }
}