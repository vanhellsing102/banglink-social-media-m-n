import connectDB from "@/libs/connectDB";
import Post from "@/models/post.model";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    await connectDB();
    try {
        const {userId} = await request.json();
        // console.log(userId);
        const posts = await Post.find({userId}).sort({createdAt: -1});
        if(!posts){
            return NextResponse.json({message: "Posts not found"}, {status: 404});
        }
        return NextResponse.json(posts, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Cann't get data"}, {status: 500});
    }
}