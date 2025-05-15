import connectDB from "@/libs/connectDB"
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    await connectDB();
    try {
        const {userId} = await request.json();
        const users = await User.find({
            _id: {$ne: userId}
        })
        return NextResponse.json(users, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "internal server error"}, {status: 500})
    }
}