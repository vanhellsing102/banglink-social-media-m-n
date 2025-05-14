import connectDB from "@/libs/connectDB";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export const POST = async(request, {params}) =>{
    await connectDB();
    try {
        const {userId} = await params;
        const user = await User.findById({_id: userId});
        if(!user){
            return NextResponse.json({message: "User not found"}, {status: 404});
        }
        return NextResponse.json({profilePicture: user.profilePicture}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Cann't get data"}, {status: 500});
    }
}