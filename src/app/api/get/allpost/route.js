import connectDB from "@/libs/connectDB";
import Post from "@/models/post.model";
import { NextResponse } from "next/server";

export const GET = async() =>{
    await connectDB();
    try {
        const posts = await Post.find().sort({createdAt: -1});
        return NextResponse.json(posts, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Post not found"}, {status: 404});
    }
}